import { FunctionComponent } from 'react';
import styled from 'styled-components';
import breakpoint from '../../theme/breakpoints';
import { Yaml } from '../../types/category';
import CategoryItem from '../CategoryItem';
import PageBody from '../PageBody';
import PageItem from '../PageItem';
import Heading from '../ui/Heading';

const CategoryWrapper = styled.section`
  flex: 1;
  margin-left: 3.22rem;

  ${breakpoint('lg', 'max')`
    margin: 0;
  `};
`;

const OverviewHeading = styled(Heading)`
  color: ${({ theme }) => theme.primary};
`;

const SubCategories = styled.div`
  margin-bottom: 5rem;
`;

interface Props {
  category: Yaml;
  showCount?: boolean;
}

const CategoryOverview: FunctionComponent<Props> = ({ category, showCount = true }) => (
  <CategoryWrapper>
    <OverviewHeading as="h2">{category.title}</OverviewHeading>

    {category.description && <PageBody body={category.description.body} />}

    {category.categories && category.categories.length > 0 && (
      <SubCategories>
        {category.categories.map((subCategory) => (
          <CategoryItem key={subCategory.slug} category={subCategory} showCount={showCount} />
        ))}
      </SubCategories>
    )}

    {category.pages && category.pages.map((page) => <PageItem key={page.slug} page={page} showReadMore={true} />)}
  </CategoryWrapper>
);

export default CategoryOverview;
