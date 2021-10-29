import { Body, Box, Flex, Input } from '@mycrypto/ui';
import BigNumber from 'bignumber.js';
import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';

const isNumeric = (value: string): boolean => {
  return /^\d+(?:\.\d+)?$/.test(value);
};

const toPrecision = (value: BigNumber, multiplier: BigNumber): string => {
  return value.dividedBy(multiplier).precision(20).toString(10);
};

export interface UnitProps {
  name: string;
  value: BigNumber;
  multiplier?: BigNumber;

  onChange(value: BigNumber): void;
}

export const Unit: FunctionComponent<UnitProps> = ({ name, multiplier = new BigNumber(1), value, onChange }) => {
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
    <Flex marginY="3" alignItems="center">
      <Box flexGrow={1}>
        <Input variant="simple" type="text" value={localValue} marginRight="3" onChange={handleChange} />
      </Box>
      <Body width="60px">{name}</Body>
    </Flex>
  );
};
