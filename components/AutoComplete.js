import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectAutoComplete,connectHighlight } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';
import Link from 'next/link';

const CustomHighlight = connectHighlight(({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit
  });

  return (
    <div className="px-2 w-full">
      {parsedHit.map(
        part => (part.isHighlighted ? <mark>{part.value}</mark> : part.value)
      )}
    </div>
  );
});

const HitComponent = ({ hit }) => (
  <div className="bg-white w-full">
<Link
 href={`/products/${hit.objectID}`} as={`/products/${hit.objectID}`}
>
    <div className="hit-content hover:bg-blue-200 w-full flex cursor-pointer">
    <div>
      <div className="hit-picture">
        <img className="w-14 h-14" src={`${hit.img}`} />
      </div>
    </div>
      <div>
        <CustomHighlight attribute="name" hit={hit} />
        <span className="text-base"> {hit.brand}</span>
      </div>
    </div>
    </Link>

  </div>
);

class AutoComplete extends Component {
  static propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentRefinement: PropTypes.string.isRequired,
    refine: PropTypes.func.isRequired,
    onSuggestionSelected: PropTypes.func.isRequired,
    onSuggestionCleared: PropTypes.func.isRequired,
  };
  

  state = {
    value: this.props.currentRefinement,
  };

  onChange = (_, { newValue }) => {
    if (!newValue) {
      this.props.onSuggestionCleared();
    }

    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.name;
  }

  renderSuggestion(hit) {
    return     <HitComponent attribute="name" hit={hit} />;
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: '   Search for a product...',
      onChange: this.onChange,
      value,
    };

    return (
      <>
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />



      </>

    );
  }
}

export default connectAutoComplete(AutoComplete);
