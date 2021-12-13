import { Box, BoxProps, IconType } from '@mycrypto/ui';
import { graphql, useStaticQuery } from 'gatsby';
import { FunctionComponent } from 'react';
import { Yaml } from '../types';
import { CategoryButton } from './CategoryButton';
import { Link } from './Link';

interface QueryData {
  allYaml: {
    nodes: Yaml[];
  };
}

export interface CategoriesProps {
  exclude?: string;
}

export const Categories: FunctionComponent<CategoriesProps & BoxProps> = ({ exclude, ...props }) => {
  const { allYaml } = useStaticQuery<QueryData>(graphql`
    query {
      allYaml(
        filter: { category: { slug: { eq: null } }, slug: { ne: "troubleshooter" } }
        sort: { order: DESC, fields: [priority] }
      ) {
        nodes {
          title
          slug
          icon {
            small
          }
        }
      }
    }
  `);

  return (
    <Box
      {...props}
      textAlign="center"
      sx={{
        'a:last-of-type': {
          button: {
            marginRight: '0'
          }
        }
      }}>
      {allYaml.nodes
        .filter(({ slug }) => slug !== exclude)
        .map(({ title, slug, icon }) => (
          <Link key={slug} to={`/${slug}`}>
            <CategoryButton icon={icon?.small as IconType}>{title}</CategoryButton>
          </Link>
        ))}
    </Box>
  );
};
