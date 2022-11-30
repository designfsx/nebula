import './ppsscreen5.css';
import { createButton } from './Button';
import {createTextInput} from "./TextInput";
import {createStepProgressBar} from "./StepProgressBar";

export const createScreen = ({heading}) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const wrapper = document.createElement('div');
    const buttonWrapper = document.createElement('div');
    const fieldsWrapper = document.createElement('div');

    wrapper.className = 'wrapper';
    buttonWrapper.className = 'button--wrapper';
    fieldsWrapper.className = 'field--wrapper';

    const textField1 = createTextInput({
        value: 'Username'
    });

    const textField2 = createTextInput({
        value: 'Password'
    });

    const stepProgressBar = createStepProgressBar({

    });

    const continueButton = createButton({
        size: 'large',
        label: 'Submit',
        primary: true,
    });

    h1.innerText = heading;
    wrapper.appendChild(stepProgressBar);
    wrapper.appendChild(h1);
    fieldsWrapper.appendChild(textField1);
    fieldsWrapper.appendChild(textField2);
    wrapper.appendChild(fieldsWrapper);
    buttonWrapper.appendChild(continueButton);
    wrapper.appendChild(buttonWrapper);
    main.appendChild(wrapper);

    return main
};