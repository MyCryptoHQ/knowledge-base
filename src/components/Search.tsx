import { t } from '@lingui/macro';
import { Box, BoxProps, Input } from '@mycrypto/ui';
import { FunctionComponent } from 'react';

export type SearchProps = BoxProps;

export const Search: FunctionComponent<SearchProps> = ({ ...props }) => {
  // const searchText = useSelector((state) => state.navigation.searchText);
  // const dispatch = useDispatch();
  //
  // const handleSearch = () => {
  //   if (searchText) {
  //     const query = searchText;
  //     dispatch(search());
  //     navigate(`/search/?query=${encodeURI(query)}`);
  //   }
  // };
  //
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   dispatch({
  //     type: 'SET_SEARCH_TEXT',
  //     payload: event.target.value
  //   });
  // };
  //
  // const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
  //   if (event.key === 'Enter') {
  //     handleSearch();
  //   }
  // };

  return (
    <Box maxWidth="400px" marginX="auto" {...props}>
      <Input
        variant="simple"
        icon="search"
        type="search"
        placeholder={t`Try "Cancel Transaction" or "MetaMask"`}
        // value={searchText}
        // onChange={handleChange}
        // onKeyPress={handleKeyPress}
        aria-label={t`Search`}
      />
    </Box>
  );
};
