import charAPI from "../../services/charAPI";

export const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
export const GET_CHARACTER = 'GET_CHARACTER';
export const FAILED_REQUEST = 'FAILED_REQUEST';

function requestCharacter() {
  return { type: REQUEST_CHARACTER };
}

function getCharacter(character) {
  return { type: GET_CHARACTER, character };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, error };
}

export function fetchCharacter(char) {
  return (dispatch) => {
    dispatch(requestCharacter());
    charAPI(char)
      .then((data) => dispatch(getCharacter(data)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
