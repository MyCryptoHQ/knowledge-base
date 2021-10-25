import BigNumber from 'bignumber.js';
import { FunctionComponent, useState } from 'react';
import { Unit } from './Unit';

export const UnitConverter: FunctionComponent = () => {
  const [value, setValue] = useState(new BigNumber('1000000000000000000'));

  return (
    <>
      <Unit name="Wei" value={value} onChange={setValue} />
      <Unit name="Kwei" multiplier={new BigNumber('1000')} value={value} onChange={setValue} />
      <Unit name="Mwei" multiplier={new BigNumber('1000000')} value={value} onChange={setValue} />
      <Unit name="Gwei" multiplier={new BigNumber('1000000000')} value={value} onChange={setValue} />
      <Unit name="Szabo" multiplier={new BigNumber('1000000000000')} value={value} onChange={setValue} />
      <Unit name="Finney" multiplier={new BigNumber('1000000000000000')} value={value} onChange={setValue} />
      <Unit name="Ether" multiplier={new BigNumber('1000000000000000000')} value={value} onChange={setValue} />
      <Unit name="Kether" multiplier={new BigNumber('1000000000000000000000')} value={value} onChange={setValue} />
      <Unit name="Mether" multiplier={new BigNumber('1000000000000000000000000')} value={value} onChange={setValue} />
      <Unit
        name="Gether"
        multiplier={new BigNumber('1000000000000000000000000000')}
        value={value}
        onChange={setValue}
      />
      <Unit
        name="Tether"
        multiplier={new BigNumber('1000000000000000000000000000000')}
        value={value}
        onChange={setValue}
      />
    </>
  );
};
