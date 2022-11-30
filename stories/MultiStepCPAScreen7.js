import './multistepcpascreen7.css';
import { createButton } from './Button';

export const createScreen = ({
     loading_text1,
     loading_text2,
     loading_text3,
     completed = false,
    }) => {
    const main = document.createElement('main');
    const loading1 = document.createElement('h2');
    const loading2 = document.createElement('h2');
    const loading3 = document.createElement('h2');
    const wrapper = document.createElement('div');
    const buttonWrapper = document.createElement('div');

    main.className = 'loading-wrapper';
    wrapper.className = 'wrapper';
    loading1.className = 'loading l1';
    loading2.className = 'loading l2 hide';
    loading3.className = 'loading l3 hide';
    buttonWrapper.className = 'button--wrapper';

    completed = completed ? 'complete' : 'loading';

    const continueButton = createButton({
        size: 'large',
        label: 'Continue',
        primary: false,
    });

    const loadingIcons = `<svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg><svg class="check hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`

    loading1.innerText = loading_text1;
    loading2.innerText = loading_text2;
    loading3.innerText = loading_text3;

    loading1.className = ['l1', `${completed}`].join(' ');

    loading1.insertAdjacentHTML('afterbegin', loadingIcons);
    loading2.insertAdjacentHTML('afterbegin', loadingIcons);
    loading3.insertAdjacentHTML('afterbegin', loadingIcons);

    wrapper.appendChild(loading1);
    wrapper.appendChild(loading2);
    wrapper.appendChild(loading3);
    buttonWrapper.appendChild(continueButton);
    wrapper.appendChild(buttonWrapper);
    main.appendChild(wrapper);

    return main
};