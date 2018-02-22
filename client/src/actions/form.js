import { CHANGE_EMAIL, CHANGE_TEXT, SUBMIT } from './../redux-types/contact';

export const changeEmail = (newEmail) => {
  return {
    type: CHANGE_EMAIL,
    payload: newEmail
  }
};

export const changeText = (newText) => {
  return {
    type: CHANGE_TEXT,
    payload: newText
  }
};

export const handleSubmit = (event) => {
  return {
      type: SUBMIT,
      payload: event
    }
};