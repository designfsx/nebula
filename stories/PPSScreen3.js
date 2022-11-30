import './ppsscreen2.css';
import { createButton } from './Button';
import { createSelect } from './Select';
import {createStepProgressBar} from "./StepProgressBar";

export const createScreen = ({heading}) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const wrapper = document.createElement('div');
    const fieldsWrapper = document.createElement('div');
    const buttonWrapper = document.createElement('div');

    wrapper.className = 'wrapper';
    buttonWrapper.className = 'button--wrapper';
    fieldsWrapper.className = 'field--wrapper';

    const selectField1 = createSelect({
        label: 'Month'
    });

    const selectField2 = createSelect({
        label: 'Day'
    });

    const selectField3 = createSelect({
        label: 'Year'
    });

    const stepProgressBar = createStepProgressBar({

    });

    const continueButton = createButton({
        size: 'large',
        label: 'Next',
        primary: true,
    });

    h1.innerText = heading;
    wrapper.appendChild(stepProgressBar);
    wrapper.appendChild(h1);
    fieldsWrapper.appendChild(selectField1);
    fieldsWrapper.appendChild(selectField2);
    fieldsWrapper.appendChild(selectField3);
    buttonWrapper.appendChild(continueButton);
    wrapper.appendChild(fieldsWrapper);
    wrapper.appendChild(buttonWrapper);
    main.appendChild(wrapper);

    return main
};