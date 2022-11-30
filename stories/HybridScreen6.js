import './hybridscreen6.css';
import { createButton } from './Button';
import { createTextInput } from "./TextInput";

export const createScreen = ({heading}) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const wrapper = document.createElement('div');
    const buttonWrapper = document.createElement('div');

    wrapper.className = 'wrapper';
    buttonWrapper.className = 'button--wrapper';

    const textField = createTextInput({
        value: 'E-mail Address'
    })

    const continueButton = createButton({
        size: 'large',
        label: 'Continue',
        primary: true,
    });

    h1.innerText = heading;
    wrapper.appendChild(h1);
    wrapper.appendChild(textField);
    buttonWrapper.appendChild(continueButton);
    wrapper.appendChild(buttonWrapper);
    main.appendChild(wrapper);

    return main
};