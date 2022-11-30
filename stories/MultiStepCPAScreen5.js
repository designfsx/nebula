import './multistepcpascreen5.css';
import { createButton } from './Button';

export const createScreen = ({
     heading,
     options = ['Petite', 'Average', 'Athletic', 'BBW', 'Big Tits', 'Big Ass'],
    }) => {
    const main = document.createElement('main');
    const h1 = document.createElement('h1');
    const wrapper = document.createElement('div');
    const buttonWrapper = document.createElement('div');

    wrapper.className = 'wrapper';
    buttonWrapper.className = 'button--wrapper';

    let optItem = options.map(function(option, i) {
       return `<li class="opt-${i}"><span>${option}</span></li>`;
    }).join('');

    const optionsList = `<ul class="options_list">${optItem}</ul>`;

    const continueButton = createButton({
        size: 'large',
        label: 'Continue',
        primary: true,
    });

    h1.innerText = heading;
    wrapper.appendChild(h1);
    wrapper.insertAdjacentHTML('beforeend', optionsList);
    buttonWrapper.appendChild(continueButton);
    wrapper.appendChild(buttonWrapper);
    main.appendChild(wrapper);

    return main
};