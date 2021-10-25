import { t } from '@lingui/macro';
import { Body, Box, Flex, Icon, SubHeading } from '@mycrypto/ui';
import { ElementType, FunctionComponent } from 'react';
import { Yaml } from '../types';
import { Article } from './Article';
import { Articles } from './Articles';
import { Grid } from './Grid';
import { Link } from './Link';

export interface CategoryProps {
  category: Yaml;
  list?: boolean;
  depth?: number;
}

export const Category: FunctionComponent<CategoryProps> = ({ category, list, depth = 0 }) => {
  if (list) {
    return (
      <Box
        marginBottom="5"
        sx={{
          h3: {
            fontSize: '45px',
            lineHeight: '54px'
          },
          h4: {
            fontSize: '20px',
            lineHeight: '24px',
            color: 'text.purple'
          }
        }}
      >
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
                <SubHeading as={`h${depth + 3}` as ElementType} color="text.primary" marginBottom="24px">
                  {category.title}
                </SubHeading>
                <Category category={category} list={true} depth={depth + 1} />
              </Box>
            ))}
          </>
        )}
      </Box>
    );
  }

  return (
    <Box>
      {category.pages && category.pages.length > 0 && (
        <Articles title={t`Browse All Articles`} marginBottom="5">
          {category.pages.map((page) => (
            <Article key={page.slug} article={page} />
          ))}
        </Articles>
      )}
    </Box>
  );
};
