import { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from '../../theme/breakpoints';
import { Yaml } from '../../types/category';
import CategoryItem from '../CategoryItem';
import PageBody from '../PageBody';
import PageItem from '../PageItem';
import Heading from '../ui/Heading';

interface CategoryWrapperProps {
  small?: boolean;
}

const CategoryWrapper = styled.section<CategoryWrapperProps>`
  flex: 1;
  margin-left: 3.22rem;

  ${({ small }) =>
    small &&
    css`
      max-width: 500px;
      margin: 0 auto;
    `};

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

const CategoryOverview: FunctionComponent<Props & CategoryWrapperProps> = ({
  category,
  showCount = true,
  small = false
}) => (
  <CategoryWrapper small={small}>
    <OverviewHeading as="h2">{category.displayTitle ?? category.title}</OverviewHeading>

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
