import { t } from '@lingui/macro';
import { Box, BoxProps, Input } from '@mycrypto/ui';
import { navigate } from 'gatsby';
import { ChangeEvent, FunctionComponent, KeyboardEvent, useState } from 'react';

export interface SearchProps {
  placeholder?: string;
}

export const Search: FunctionComponent<SearchProps & BoxProps> = ({ placeholder = t`Search here...`, ...props }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && query) {
      navigate(`/search/?query=${encodeURI(query)}`);
    }
  };

  return (
    <Box maxWidth="400px" marginX="auto" {...props}>
      <Input
        variant="simple"
        icon="search"
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        aria-label={t`Search`}
      />
    </Box>
  );
};
