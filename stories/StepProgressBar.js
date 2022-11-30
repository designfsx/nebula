import './stepprogressbar.css';

export const createStepProgressBar = ({
    steps = ['Match Type', 'Date of Birth', 'Email Address', 'Create Account'],
    borderRadius = 'rounded'
}) => {
  const stepProgressBar = document.createElement('div');
  stepProgressBar.className = 'step-progress__wrapper';

  let stepItems = steps.map(function(step, i) {
    return `
        <div class="stepprogress--item">
          <div class="step-item__counter counter--${borderRadius}">${i+1}</div>
          <div class="step-item__title">${step}</div>
        </div>
    `;
  }).join('');

  stepProgressBar.insertAdjacentHTML('beforeend', stepItems);

  return stepProgressBar;
};
