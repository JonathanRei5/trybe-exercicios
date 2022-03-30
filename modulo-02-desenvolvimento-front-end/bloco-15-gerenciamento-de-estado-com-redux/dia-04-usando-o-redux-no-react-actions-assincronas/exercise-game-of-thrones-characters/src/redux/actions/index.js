import charAPI from "../../services/charAPI";

const REQUEST_CHARACTER = 'REQUEST_CHARACTER';
const GET_CHARACTER = 'GET_CHARACTER';
const FAILED_REQUEST = 'FAILED_REQUEST';

function requestCharacter() {
  return { type: REQUEST_CHARACTER };
}

function getCharacter(character) {
  return { type: GET_CHARACTER, character };
}

function failedRequest(error) {
  return { type: FAILED_REQUEST, error };
}

export function fetchCharacter() {
  return (dispatch) => {
    dispatch(requestCharacter());
    charAPI()
      .then((data) => dispatch(getCharacter(data)))
      .catch((error) => dispatch(failedRequest(error)));
  };
}
