import { useState } from 'react';
import { Tabs } from '@datacamp/waffles/tabs';
import { Paragraph } from '@datacamp/waffles/paragraph';

function Example() {
  const [activeTabIndex, setActiveTabIndex] = useState<React.Key>(0);

  return (
    <>
      <Tabs
        activeTab={activeTabIndex}
        onChange={(activeTab) => {
          setActiveTabIndex(activeTab);
        }}
      >
        <Tabs.Tab label="First" />
        <Tabs.Tab label="Second" />
      </Tabs>
      <Paragraph>
        For use when the tabs have no content but instead control the context of
        the whole page.
      </Paragraph>
    </>
  );
}

export default Example;
