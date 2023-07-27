export const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const anyCharRegExp = /./;

export const symbolsRegExp = /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/;

export const numbersRegExp = /\d/;

export const morseInputTextRegExp =
  /^[а-яА-я\d\s`!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]*$/;

export const morseInputCodeRegExp = /[-.\s]/;

export const caesarRegExp = /^[а-яА-я\d\s.,:;)(*#%!+-/$&"']*$/;

export const caesarReplaceCharRegExp = /[Ёё]/gim;
