import * as actionTypes from '../actions';

const initialState = {
  searchItem: '',
  searchURL: '',
  apiKey: '64bc0f6954c0105d497c4e993697e278'
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_URL_CHANGED:
      const newSearchURL =
        'search/multi?api_key=' + state.apiKey + '&query=' + action.show;
      return {
        ...state,
        searchURL: newSearchURL
      };
    default:
      return state;
  }
};

export default searchReducer;
