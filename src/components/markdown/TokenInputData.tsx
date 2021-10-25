import { defaultAbiCoder } from '@ethersproject/abi';
import { Box, Input } from '@mycrypto/ui';
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

  // TODO
  return (
    <section>
      <Box label="Token Decimals">
        Enter the number of decimals the token contract uses. You can find this on{' '}
        <Link to="https://etherscan.io">Etherscan</Link>.
        <Input type="number" value={tokenDecimals} onChange={handleChangeDecimals} />
      </Box>
      <Box label="To Address">
        Enter the address where you want to send the tokens to.{' '}
        <strong>Do not enter the token contract address here.</strong>
        <Input type="text" value={toAddress} onChange={handleChangeAddress} />
      </Box>
      <Box label="Amount">
        Enter the number of tokens you want to send. It's highly recommended to use a small amount for a test
        transaction first.
        <Input type="number" value={amount} onChange={handleChangeAmount} />
      </Box>
      <Box label="Data">
        When all fields above are filled out, the data should appear below.
        <Input as="textarea" value={data} placeholder="Fill out the fields above to get the data" readOnly={true} />
      </Box>
    </section>
  );
};
