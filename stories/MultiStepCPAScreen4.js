import './hybridscreen4.css';
import { createButton } from './Button';
import { createSelect } from './Select';

export const createScreen = ({heading}) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const wrapper = document.createElement('div');
    const buttonWrapper = document.createElement('div');

    wrapper.className = 'wrapper';
    buttonWrapper.className = 'button--wrapper';

    const selectField = createSelect({
        label: 'Select One...'
    })

    const continueButton = createButton({
        size: 'large',
        label: 'Continue',
        primary: false,
    });

    h1.innerText = heading;
    wrapper.appendChild(h1);
    wrapper.appendChild(selectField);
    buttonWrapper.appendChild(continueButton);
    wrapper.appendChild(buttonWrapper);
    main.appendChild(wrapper);

    return main
};