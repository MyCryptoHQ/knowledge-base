import { FunctionComponent } from 'react';
import Text from '../../../ui/Text';

const DeletedText: FunctionComponent = ({ children, ...rest }) => (
  <Text as="del" {...rest}>
    {children}
  </Text>
);

export default DeletedText;
