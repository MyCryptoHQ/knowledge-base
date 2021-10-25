import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../ui';
import { H2 } from '../default/H2';

interface Props {
  title: string;
}

interface ContainerProps {
  extended: boolean;
}

const Container = styled.li<ContainerProps>`
  display: block;
  padding: 1.65em 3.375em;
  background: ${({ extended }) => (extended ? 'white' : 'none')};
  border-bottom: 1px solid ${({ theme }) => theme.actionPanelBorder};

  :first-of-type {
    border-top: 1px solid ${({ theme }) => theme.actionPanelBorder};
  }
`;

const ItemHeading = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
`;

const ItemContent = styled.div<ContainerProps>`
  margin-top: ${({ extended }) => (extended ? '3rem' : '0')};
  height: ${({ extended }) => (extended ? '100%' : '0')};
  overflow: hidden;
`;

export const AccordionItem: FunctionComponent<Props> = ({ title, children }) => {
  const [extended, setExtended] = useState<boolean>(false);

  const handleToggle = () => setExtended((state) => !state);

  return (
    <Container extended={extended}>
      <ItemHeading onClick={handleToggle}>
        <H2>{title}</H2>
        <Icon name={extended ? 'Contract' : 'Expand'} type={'arrow'} />
      </ItemHeading>
      <ItemContent extended={extended}>{children}</ItemContent>
    </Container>
  );
};
