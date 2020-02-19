import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import * as CopyToClipboard from 'react-copy-to-clipboard';

interface Props {
  address: string;
  onCopy?(): void;
}

const StyledDonateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 110px;
  height: 32px;
  background-color: #344b64;
  border: 1px solid #4a5d75;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 1px 1px 0 rgba(232, 234, 237, 0.5), inset 0 1px 3px 0 rgba(232, 234, 237, 0.5);
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.textInverted};
  margin-right: 15px;
`;

const DonateButton: FunctionComponent<Props> = ({ address, onCopy, children }) => (
  <CopyToClipboard text={address} onCopy={onCopy}>
    <StyledDonateButton>{children}</StyledDonateButton>
  </CopyToClipboard>
);

export default DonateButton;
