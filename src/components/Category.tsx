import { Body, Box, Flex, Icon, SubHeading } from '@mycrypto/ui';
import { ElementType, FunctionComponent } from 'react';
import { Yaml } from '../types';
import { Grid } from './Grid';
import { Link } from './Link';

export interface CategoryProps {
  category: Yaml;
  depth?: number;
}

export const Category: FunctionComponent<CategoryProps> = ({ category, depth = 0 }) => (
  <Box
    marginBottom="5"
    sx={{
      h3: {
        fontSize: 'large',
        lineHeight: '120%'
      },
      h4: {
        fontSize: '20px',
        lineHeight: '24px',
        color: 'text.purple'
      }
    }}>
    {category.pages && category.pages.length > 0 && (
      <Grid columns={2} marginBottom="5">
        {category.pages.map((page) => (
          <Link key={`article-${page.slug}`} to={`/${page.slug}`}>
            <Flex key={page.slug}>
              <Body fontWeight="bold" marginRight="10px">
                {page.frontmatter.title}
              </Body>
              <Icon type="external" width="12px" />
            </Flex>
          </Link>
        ))}
      </Grid>
    )}

    {category.categories && category.categories.length > 0 && (
      <>
        {category.categories.map((category) => (
          <Box key={`sub-category=${category.slug}`}>
            <SubHeading as={`h${depth + 3}` as ElementType} marginBottom="24px">
              {category.title}
            </SubHeading>
            <Category category={category} depth={depth + 1} />
          </Box>
        ))}
      </>
    )}
  </Box>
);
