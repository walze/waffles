import { useState } from 'react';
import { css } from '@emotion/react';

import { SideNavigation } from '../index';
import { tokens } from '../../tokens';
import { Home, Cog, AddCircle, Flash, Compass, Book, Chat } from '../../icon';
import { mediaQuery } from '../../helpers';
import { Button } from '../../button';
import { Badge } from '../../badge';

const layoutStyle = css`
  display: block;
  min-height: 100vh;

  ${mediaQuery.aboveMedium} {
    display: grid;
    grid-template-columns: auto 1fr;
  }
`;

const mainContentStyle = css`
  padding: ${tokens.spacing.medium};
`;

function Story() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={layoutStyle}>
      <SideNavigation isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SideNavigation.Nav>
          <SideNavigation.Category noDivider>
            <SideNavigation.Item
              iconLeft={<Home />}
              iconRight={<AddCircle />}
              href="/"
            >
              Welcome
            </SideNavigation.Item>
            <SideNavigation.Item isActive iconLeft={<Cog />} href="/setup">
              Setup
            </SideNavigation.Item>
          </SideNavigation.Category>
          <SideNavigation.Category label="Components">
            <SideNavigation.Subcategory iconLeft={<Flash />} label="Action">
              <SideNavigation.Item href="/button">Button</SideNavigation.Item>
              <SideNavigation.Item href="/link">Link</SideNavigation.Item>
            </SideNavigation.Subcategory>
            <SideNavigation.Subcategory
              iconLeft={<Compass />}
              label="Navigation"
            >
              <SideNavigation.Item isNew href="/side-nav">
                Side Navigation
              </SideNavigation.Item>
              <SideNavigation.Item href="/tabs">
                Tabs and Very Long Item Content
              </SideNavigation.Item>
            </SideNavigation.Subcategory>
          </SideNavigation.Category>
          <SideNavigation.Category
            label={
              <Badge size="small" variant="grey">
                Beta
              </Badge>
            }
            noDivider
          >
            <SideNavigation.Item
              size="small"
              iconLeft={<Book />}
              href="/documentation"
            >
              Documentation
            </SideNavigation.Item>
            <SideNavigation.Item
              size="small"
              iconLeft={<Chat />}
              href="/give-feedback"
            >
              Give Feedback
            </SideNavigation.Item>
          </SideNavigation.Category>
        </SideNavigation.Nav>
      </SideNavigation>
      <article css={mainContentStyle}>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
      </article>
    </div>
  );
}

export default Story;
