import React, { ChangeEvent, FunctionComponent, useState } from 'react';

/**
 * An example MDX component. It has no styles and is not fully working.
 */
const TokenInfo: FunctionComponent = () => {
  const [tokenAddress, setTokenAddress] = useState<string>('');
  const [hasClicked, setClicked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTokenAddress(event.currentTarget.value);
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <input type="text" placeholder="Token address" value={tokenAddress} onChange={handleChange} />
      <input type="submit" value="Search" onClick={() => setClicked(true)} />
      {hasClicked && (
        <table>
          <tbody>
            <tr>
              <td>
                <b>Token Name</b>
              </td>
              <td>Dai Stablecoin v1.0</td>
            </tr>
            <tr>
              <td>
                <b>Token Symbol</b>
              </td>
              <td>DAI</td>
            </tr>
            <tr>
              <td>
                <b>Address</b>
              </td>
              <td>0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359</td>
            </tr>
            <tr>
              <td>
                <b>Decimals</b>
              </td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TokenInfo;
