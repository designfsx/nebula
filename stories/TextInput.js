import './textinput.css';

export const createTextInput = ({
  value = 'Text Input',
  style = 'default',
  color,
  backgroundColor,
}) => {
  const textInputWrapper = document.createElement('div');
  textInputWrapper.className = 'text-input__wrapper';
  const input = document.createElement('input');
  input.className = ['text-input', `${style}`].join(' ');
  input.type = 'text';
  input.value = value;

  input.style.color = color;
  input.style.backgroundColor = backgroundColor;

  textInputWrapper.appendChild(input);

  return textInputWrapper;
};
