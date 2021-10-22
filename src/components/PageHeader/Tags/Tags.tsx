import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { encodeTag } from '../../../utils/tags';
import { Link } from '../../Link';

interface Props {
  tags: string[];
}

export const TagsContainer = styled.ul`
  list-style-type: none;
  display: inline-block;
  margin: -1rem 0 0 0;
  padding: 0;
`;

const Tag = styled(Link)`
  display: inline-block;
  margin: 0 0.3rem;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.tagBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text.primary} !important;
  font-weight: normal !important;
`;

export const TagItem = styled.li`
  display: inline-block;
  margin: 1rem 0 0 0;
  font-size: 1.4rem;
`;

const Tags: FunctionComponent<Props> = ({ tags }) => (
  <TagsContainer>
    {tags.map((tag) => (
      <TagItem key={tag}>
        <Tag to={`/tag/${encodeTag(tag)}`}>{tag}</Tag>
      </TagItem>
    ))}
  </TagsContainer>
);

export default Tags;
