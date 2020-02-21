import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as bitcoin from '../../../../assets/images/donate/bitcoin.png';
import * as ether from '../../../../assets/images/donate/ether.png';
import breakpoint from '../../../../theme/breakpoints';
import Heading from '../../Heading';
import Text from '../../Text';
import Check from './Check';
import DonateButton from './DonateButton';

const StyledDonate = styled.div`
  min-width: 250px;

  ${breakpoint('lg', 'max')`
    margin: auto;
  `};
`;

const DonateButtons = styled.div`
  display: flex;
`;

const DonateIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const DonateMessage = styled(Text)`
  margin-top: 10px;
  font-size: 1.4rem !important;
  font-weight: 300;
  color: ${({ theme }) => theme.textInverted};
`;

const Donate: FunctionComponent = () => {
  const [displayMessage, setDisplayMessage] = useState<boolean>();

  useEffect(() => {
    if (displayMessage) {
      const id = setTimeout(() => {
        setDisplayMessage(false);
      }, 3000);

      return () => clearTimeout(id);
    }
  }, [displayMessage]);

  const handleCopy = () => {
    setDisplayMessage(true);
  };

  return (
    <StyledDonate>
      <Heading as="h2">Donate</Heading>
      <DonateButtons>
        <DonateButton address="0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520" onCopy={handleCopy}>
          <DonateIcon src={ether} alt="Ethereum" />
          Ethereum
        </DonateButton>
        <DonateButton address="32oirLEzZRhi33RCXDF9WHJjEb8RsrSss3" onCopy={handleCopy}>
          <DonateIcon src={bitcoin} alt="Bitcoin" />
          Bitcoin
        </DonateButton>
      </DonateButtons>
      {displayMessage && (
        <DonateMessage>
          <Check />
          Address Copied to Clipboard!
        </DonateMessage>
      )}
    </StyledDonate>
  );
};

export default Donate;
