import React, { FunctionComponent } from 'react';
import Text from '../../../ui/Text';

const Paragraph: FunctionComponent = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

export default Paragraph;
