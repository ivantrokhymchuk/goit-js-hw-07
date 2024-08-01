const fieldEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onFieldInput = () => {
  const trimmedValue = fieldEl.value.trim();
  outputEl.textContent = trimmedValue ? trimmedValue : 'Anonymous';
};

fieldEl.addEventListener('input', onFieldInput);
