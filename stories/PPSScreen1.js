import './ppsscreen1.css';
import { createButton } from './Button';

export const createScreen = ({
    heading = 'Find your fuck buddy now.'
    }) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const button = createButton({
        size: 'large',
        label: 'Get Started',
        primary: true,
    })

    h1.innerText = heading;
    main.appendChild(h1);
    main.appendChild(button);

    return main
};