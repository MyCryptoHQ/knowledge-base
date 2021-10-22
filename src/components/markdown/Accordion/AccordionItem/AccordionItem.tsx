import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../../ui';
import Text from '../../../ui/Text';
import Heading from '../../default/Heading';

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

  ${Heading} {
    margin: 0;
    font-size: 1.8rem;
  }
`;

const ItemContent = styled.div<ContainerProps>`
  margin-top: ${({ extended }) => (extended ? '3rem' : '0')};
  height: ${({ extended }) => (extended ? '100%' : '0')};
  overflow: hidden;

  ${Text}:first-of-type {
    margin-top: 0;
  }
`;

const AccordionItem: FunctionComponent<Props> = ({ title, children }) => {
  const [extended, setExtended] = useState<boolean>(false);

  const handeToggle = () => setExtended((state) => !state);

  return (
    <Container extended={extended}>
      <ItemHeading onClick={handeToggle}>
        <Heading as="h2">{title}</Heading>
        <Icon name={extended ? 'Contract' : 'Expand'} type={'arrow'} />
      </ItemHeading>
      <ItemContent extended={extended}>{children}</ItemContent>
    </Container>
  );
};

export default AccordionItem;
