import './cpascreen2.css';
import Logo from './assets/logo.svg';

export const createScreen = ({
     tagline = ''
   }) => {
  const main = document.createElement('main');

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  const logo = `<img src=${Logo}>`;

  const h2 = document.createElement('h2');
  h2.innerText = tagline;

  wrapper.appendChild(h2);

  const iframe = `
    <iframe src="https://bbrcomp.registersafely.com/routes/?a_aid=bbrv4col3&a_bid=bbrv4col3&clr2=000&test_flag=1" border="0"><iframe>
  `;

  wrapper.insertAdjacentHTML('afterbegin', logo);

  wrapper.insertAdjacentHTML('beforeend', iframe);
  main.appendChild(wrapper);

  return main;
};
