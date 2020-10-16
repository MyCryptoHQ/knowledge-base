import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledPreformattedText = styled.pre`
  font-family: ${({ theme }) => theme.monoFontFamily};
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25rem;
`;

const PreformattedText: FunctionComponent = ({ children, ...rest }) => (
  <StyledPreformattedText {...rest}>{children}</StyledPreformattedText>
);

export default PreformattedText;
