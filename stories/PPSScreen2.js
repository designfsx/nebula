import './ppsscreen3.css';
import { createButton } from './Button';
import { createSelect } from './Select';
import {createStepProgressBar} from "./StepProgressBar";

export const createScreen = ({heading}) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const wrapper = document.createElement('div');
    const buttonWrapper = document.createElement('div');

    wrapper.className = 'wrapper';
    buttonWrapper.className = 'button--wrapper';

    const selectField = createSelect({
        label: 'Man seeking a woman'
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
    wrapper.appendChild(selectField);
    buttonWrapper.appendChild(continueButton);
    wrapper.appendChild(buttonWrapper);
    main.appendChild(wrapper);

    return main
};