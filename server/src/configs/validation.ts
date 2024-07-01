const validStringRegex = /^[a-zA-Z0-9\s,.!?_'-]+$/;

const urlRegex =
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
const nameRegex = /^[a-z ,.'-]+$/i;
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const validateName = (name: string) => nameRegex.test(name);

export const validateEmail = (email: string) => emailRegex.test(email);

export const validateString = (str: string) => validStringRegex.test(str);

export const validateUrl = (url: string) => urlRegex.test(url);
