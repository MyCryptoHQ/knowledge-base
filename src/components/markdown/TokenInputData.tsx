import { defaultAbiCoder } from '@ethersproject/abi';
import { t, Trans } from '@lingui/macro';
import { Body, Box, Input, SubHeading } from '@mycrypto/ui';
import BigNumber from 'bignumber.js';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { Link } from '../Link';

const TRANSFER_ID = 'a9059cbb';

/**
 * Input data generator for token transactions. Can be used in Mist article for sending tokens, etc.
 */
export const TokenInputData: FunctionComponent = () => {
  const [tokenDecimals, setTokenDecimals] = useState<string>('');
  const [toAddress, setToAddress] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [data, setData] = useState<string>('');

  const handleChangeDecimals = (event: ChangeEvent<HTMLInputElement>) => setTokenDecimals(event.target.value);

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => setToAddress(event.target.value);

  const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => setAmount(event.target.value);

  useEffect(() => {
    setData('');

    if (tokenDecimals && toAddress && amount) {
      const actualAmount = new BigNumber(amount).multipliedBy(new BigNumber(10).pow(new BigNumber(tokenDecimals)));

      try {
        const encodedData = `0x${TRANSFER_ID}${defaultAbiCoder
          .encode(['address', 'uint256'], [toAddress, `0x${actualAmount.toString(16)}`])
          .slice(2)}`;
        setData(encodedData);
      } catch {
        // noop
      }
    }
  }, [tokenDecimals, toAddress, amount]);

  return (
    <Box as="section" marginBottom="4">
      <Box marginBottom="3">
        <SubHeading as="h3">
          <Trans>Token Decimals</Trans>
        </SubHeading>
        <Body marginBottom="2">
          <Trans>
            Enter the number of decimals the token contract uses. You can find this on{' '}
            <Link to="https://etherscan.io" external={true}>
              Etherscan
            </Link>
            .
          </Trans>
        </Body>
        <Input variant="simple" type="number" value={tokenDecimals} onChange={handleChangeDecimals} />
      </Box>

      <Box marginBottom="3">
        <SubHeading as="h3">
          <Trans>To Address</Trans>
        </SubHeading>
        <Body marginBottom="2">
          <Trans>
            Enter the address where you want to send the tokens to.{' '}
            <strong>Do not enter the token contract address here.</strong>
          </Trans>
        </Body>
        <Input variant="simple" type="text" value={toAddress} onChange={handleChangeAddress} />
      </Box>

      <Box marginBottom="3">
        <SubHeading as="h3">
          <Trans>Amount</Trans>
        </SubHeading>
        <Body marginBottom="2">
          <Trans>
            Enter the number of tokens you want to send. It's highly recommended to use a small amount for a test
            transaction first.
          </Trans>
        </Body>
        <Input variant="simple" type="number" value={amount} onChange={handleChangeAmount} />
      </Box>

      <Box>
        <SubHeading as="h3">
          <Trans>Data</Trans>
        </SubHeading>
        <Body marginBottom="2">
          <Trans>When all fields above are filled out, the data should appear below.</Trans>
        </Body>
        <Input
          variant="simple"
          as="textarea"
          value={data}
          placeholder={t`Fill out the fields above to get the data.`}
          readOnly={true}
        />
      </Box>
    </Box>
  );
};
