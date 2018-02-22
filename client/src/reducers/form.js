import axios from 'axios';
import { CHANGE_EMAIL, CHANGE_TEXT, SUBMIT } from './../redux-types/contact';

let defaultState = {
  email: '',
  text: '',
  sendMailStatus: ''
};

const form = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_TEXT:
      return { ...state, text: action.payload };
    case SUBMIT:
      const event = action.payload;
      const url = '/sending-form';

      event.preventDefault();
      axios.post(url, state)
        .then(function (response) {
          return({ ...state, email: '', text: '', sendMailStatus: response.status });
        })
        .catch(function (error) {
          console.log(error);
          return({ ...state, sendMailStatus: 500 });
        });
      return({ ...state, email: '', text: '', sendMailStatus: 102 });
    default:
      return state
  }
};

export default form;