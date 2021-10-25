import { Body, Input } from '@mycrypto/ui';
import BigNumber from 'bignumber.js';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';

const isNumeric = (value: string): boolean => {
  return /^\d+(?:\.\d+)?$/.test(value);
};

const toPrecision = (value: BigNumber, multiplier: BigNumber): string => {
  return value.dividedBy(multiplier).precision(20).toString(10);
};

interface Props {
  name: string;
  value: BigNumber;
  multiplier?: BigNumber;

  onChange(value: BigNumber): void;
}

const UnitContainer = styled.label`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UnitLabel = styled(Body)`
  width: 6rem;
  text-align: center;
`;

export const Unit: FunctionComponent<Props> = ({ name, multiplier = new BigNumber(1), value, onChange }) => {
  const [localValue, setValue] = useState(toPrecision(value, multiplier));

  useEffect(() => {
    setValue(toPrecision(value, multiplier));
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (isNumeric(event.target.value)) {
      onChange(new BigNumber(event.target.value).multipliedBy(multiplier));
    }
  };

  return (
    <UnitContainer>
      <Input type="text" value={localValue} onChange={handleChange} />
      <UnitLabel>{name}</UnitLabel>
    </UnitContainer>
  );
};
