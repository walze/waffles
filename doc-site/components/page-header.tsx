import { useRouter } from 'next/router';
import Head from 'next/head';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { mediaQuery } from '@datacamp/waffles/helpers';
import { Heading } from '@datacamp/waffles/heading';
import { ErrorBoundary } from '@datacamp/waffles/error-boundary';
import { ContentContainer } from '@datacamp/waffles/content-container';
import { Chapeau } from '@datacamp/waffles/chapeau';

const headerStyle = css`
  background-color: ${tokens.colors.white};
  border-bottom: 1px solid ${tokens.colors.greyMedium};
  color: ${tokens.colors.navy};
  font-family: ${tokens.fontFamilies.sansSerif};
`;

const containerStyle = css`
  display: block;

  ${mediaQuery.aboveMedium} {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: ${tokens.spacing.xlarge};
  }
`;

const chapeauStyle = css`
  color: ${tokens.colors.navySubtleTextOnLight};
`;

const headingStyle = css`
  font-size: 40px;
`;

const textStyle = css`
  padding-top: ${tokens.spacing.small};
  font-size: ${tokens.fontSizes.large};
  line-height: ${tokens.lineHeights.relaxed};
  max-width: 720px;
`;

type PageHeaderProps = {
  title: string;
  description?: React.ReactNode;
};

function PageHeader({ title, description }: PageHeaderProps) {
  // Obtain the category based on the current url path
  const category = useRouter().pathname.split('/')[1];

  return (
    <ErrorBoundary>
      <Head>
        <title key="title">Waffles - {title}</title>
      </Head>
      <header css={headerStyle}>
        <ContentContainer css={containerStyle}>
          <div>
            <Chapeau css={chapeauStyle}>{category}</Chapeau>
            <Heading css={headingStyle} size="xxlarge">
              {title}
            </Heading>
            <Text css={textStyle}>{description}</Text>
          </div>
        </ContentContainer>
      </header>
    </ErrorBoundary>
  );
}

export default PageHeader;
