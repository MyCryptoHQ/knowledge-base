import { lighten } from 'polished';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from '../../Link';

interface Props {
  tags: string[];
}

const TagsContainer = styled.ul`
  list-style-type: none;
  display: inline-block;
  margin: -1rem 0 0 0;
  padding: 0;
`;

// tslint:disable-next-line
const Tag = styled<any>(Link)`
  display: inline-block;
  margin: 0 0.3rem;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.tagBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => lighten(0.1, theme.text)} !important;
  font-weight: normal !important;
`;

const TagItem = styled.li`
  display: inline-block;
  margin: 1rem 0 0 0;
  font-size: 1.4rem;
`;

const Tags: FunctionComponent<Props> = ({ tags }) => (
  <TagsContainer>
    {tags.map(tag => (
      <TagItem key={tag}>
        <Tag to={`/tag/${tag.toLowerCase()}`}>{tag}</Tag>
      </TagItem>
    ))}
  </TagsContainer>
);

export default Tags;
