import * as React from 'react';
import { search, setSearchText } from '../../store/search/actions';
import { ApplicationState } from '../../store';
import { Dispatch } from 'redux';
import { SearchActions } from '../../store/search/types';
import { connect } from 'react-redux';
import './Search.scss';

interface OwnProps {
  compact?: boolean;
}

interface StateProps {
  searchText: string;
}

interface DispatchProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onSearch(): void;
}

type Props = OwnProps & StateProps & DispatchProps;

class Search extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  render(): React.ReactNode {
    const { compact = true, searchText, onChange } = this.props;
    return (
      <div className={`search ${compact ? 'compact' : ''}`}>
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={onChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }

  private handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      this.props.onSearch();
    }
  }
}

const mapStateToProps = (state: ApplicationState) => ({ searchText: state.search.searchText });

const mapDispatchToProps = (dispatch: Dispatch<SearchActions>) => ({
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchText(event.currentTarget.value)),
  onSearch: () => dispatch(search())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
