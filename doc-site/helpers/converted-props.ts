/* eslint-disable @typescript-eslint/no-non-null-assertion */

const SKIP_DOCS_FLAG = '[skip docs]';

type PropMetadata = {
  name: string;
  type: string;
  isOptional: boolean;
  description?: string;
  defaultValue?: string;
};

type PropTypeValue = {
  kind: string;
  name: string;
};

type PropComment = {
  type: string;
  value: string;
};

type PropRawMetadata = {
  kind: string;
  optional: boolean;
  key: {
    kind: string;
    name: string;
  };
  value: {
    kind: string;
    name?: string;
    value?: PropTypeValue;
    type?: {
      kind: string;
      value: {
        name: string;
      };
    };
    types?: Array<{
      kind: string;
      value: string | PropTypeValue;
    }>;
  };
  leadingComments?: Array<PropComment>;
};

type AutoGeneratedMetadata = Record<string, unknown>;

type ProperPropMetadata = { kind: string; members: PropRawMetadata[] };

// Find and extract proper props definitons from auto generated structure
// Only objects with 'kind' defined as 'object' contain relevant information
// Traverse whole initial structure to find such objects and put them in flat array
function extractedProperProps(
  generatedMetadata: AutoGeneratedMetadata,
): ProperPropMetadata[] {
  return Object.values(generatedMetadata).reduce<ProperPropMetadata[]>(
    (rawProps, node) => {
      // Check if node exists and is object
      if (typeof node === 'object' && node) {
        // Check whether key 'kind' has value 'object'
        if (
          Object.keys(node).includes('kind') &&
          (node as ProperPropMetadata).kind === 'object'
        ) {
          return rawProps.concat(node as ProperPropMetadata);
        }
        return rawProps.concat(
          extractedProperProps(node as AutoGeneratedMetadata),
        );
      }
      return rawProps;
    },
    [],
  );
}

// Flatten whole structure and omit props of type 'never'
function filteredRawProps(
  propsMetadata: ProperPropMetadata[],
): PropRawMetadata[] {
  // Extract names of all props with name 'never' from the whole collection
  const neverPropNames = propsMetadata.reduce<string[]>((names, metadata) => {
    const { members } = metadata;

    const neverNames = members.reduce<string[]>((names, val) => {
      if (val.value?.name === 'never') {
        return names.concat(val.key.name);
      }
      return names;
    }, []);

    return names.concat(neverNames);
  }, []);

  const noDuplicatedNames = [...new Set(neverPropNames)];

  return propsMetadata.reduce<PropRawMetadata[]>((rawProps, metadata) => {
    const { members } = metadata;

    // Since 'never' props are part of complex disciriminating unions, they are required only in some cases
    const adjustedMembers = members.map((member) => {
      if (noDuplicatedNames.includes(member.key.name)) {
        return {
          ...member,
          optional: true,
        };
      }
      return member;
    });

    // At the end remove props with name 'never'
    const filteredMembers = adjustedMembers.filter((memeber) => {
      return memeber.value?.name !== 'never';
    });

    return rawProps.concat(filteredMembers);
  }, []);
}

// Remove duplicates and adjust optional flag accordingly
function noDuplicateRawProps(
  propsMetadata: PropRawMetadata[],
): PropRawMetadata[] {
  return propsMetadata.reduce<PropRawMetadata[]>((props, metadata) => {
    const isDuplicate = !!props.find((prop) => {
      return prop.key.name === metadata.key.name;
    });

    if (isDuplicate) {
      return props;
    }

    return props.concat(metadata);
  }, []);
}

function formattedType(metadata: PropRawMetadata): string {
  const { value } = metadata;

  // Nicely format React internal types
  if (value.value?.name) {
    const { name } = value.value;

    return name.includes('default') ? name.replace('default', 'React') : name;
  }

  if (value.kind === 'union') {
    return value
      .types!.map(
        (type) =>
          (typeof type.value === 'object' &&
            (type.value as PropTypeValue).name) ||
          type.value ||
          type.kind,
      )
      .join(' | ');
  }

  if (value.kind === 'generic' && value.value?.kind) {
    return value.value.kind;
  }

  if (value.kind === 'arrayType') {
    const typeName =
      value.type?.kind === 'generic' ? value.type.value.name : value.type?.kind;
    return `${typeName}[]`;
  }

  return value.kind;
}

function formattedDescription(description: PropComment) {
  return description.value.replace(/\n/g, ' ').trim();
}

function formattedDefaultValue(defaultValue: PropComment) {
  return defaultValue?.value.replace('@default', ' ').trim();
}

// Simplify props structure and skip marked props
function transformedRawProps(propsMetadata: PropRawMetadata[]): PropMetadata[] {
  return propsMetadata.reduce<PropMetadata[]>((props, metadata) => {
    const description =
      metadata.leadingComments &&
      formattedDescription(metadata.leadingComments[0]);

    // Omit props marked with [skip docs]
    if (description && description.includes(SKIP_DOCS_FLAG)) {
      return props;
    }

    const defaultValue =
      metadata.leadingComments &&
      formattedDefaultValue(metadata.leadingComments[1]);

    return props.concat({
      name: metadata.key.name,
      type: formattedType(metadata),
      isOptional: metadata.optional,
      ...(description && {
        description,
      }),
      ...(defaultValue && {
        defaultValue,
      }),
    });
  }, []);
}

// List required props first, sort all props by name
function sortByPropName(propsMetadata: PropMetadata[]): PropMetadata[] {
  return propsMetadata.sort((prop1, prop2) => {
    return prop1.name > prop2.name ? 1 : prop1.name < prop2.name ? -1 : 0;
  });
}

function sortTransformedProps(propsMetadata: PropMetadata[]): PropMetadata[] {
  const requiredProps: PropMetadata[] = [];
  const optionalProps: PropMetadata[] = [];

  propsMetadata.forEach((prop) => {
    if (prop.isOptional) {
      optionalProps.push(prop);
    } else {
      requiredProps.push(prop);
    }
  });

  return sortByPropName(requiredProps).concat(sortByPropName(optionalProps));
}

// Convert auto generated props to the format digestable by final component
function convertedProps(propsMetadata: AutoGeneratedMetadata): PropMetadata[] {
  const extractedProps = extractedProperProps(propsMetadata);
  const filteredProps = filteredRawProps(extractedProps);
  const noDuplicates = noDuplicateRawProps(filteredProps);
  const transformedProps = transformedRawProps(noDuplicates);

  return sortTransformedProps(transformedProps);
}

export default convertedProps;
