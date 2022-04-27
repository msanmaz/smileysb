import React, { Component } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  Highlight,
  connectSearchBox,
} from 'react-instantsearch-dom';
import Autocomplete from './Autocomplete';
import '@algolia/autocomplete-theme-classic';
import 'instantsearch.css/themes/reset.css';




const searchClient = algoliasearch(
    'MCMIFXPG08',
    'b04ed2076613926884b9309b2c1de20e'
);



class SearchBar extends Component {
  state = {
    query: '',
  };

  onSuggestionSelected = (_, { suggestion }) => {
    console.log('onSuggestionSelected', suggestion);
    this.setState({
      query: suggestion.name,
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div className="px-2">
        <InstantSearch indexName="smileys" searchClient={searchClient}>
          <Configure hitsPerPage={5} />
          <Autocomplete
            onSuggestionSelected={this.onSuggestionSelected}
            onSuggestionCleared={this.onSuggestionCleared}
          />


        </InstantSearch>


      </div>
    );
  }
}



export default SearchBar;
