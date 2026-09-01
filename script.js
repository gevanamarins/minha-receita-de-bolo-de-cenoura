const servingsValue = document.getElementById('servingsValue');
const increaseButton = document.getElementById('increaseServings');
const decreaseButton = document.getElementById('decreaseServings');
const toggleInfoButton = document.getElementById('toggleInfo');
const secretTip = document.getElementById('secretTip');
const currentYear = document.getElementById('year');

let servings = 12;

function updateServings(nextServings) {
  servings = Math.min(20, Math.max(6, nextServings));
  servingsValue.textContent = `${servings} fatias`;
}

increaseButton.addEventListener('click', () => {
  updateServings(servings + 2);
});

decreaseButton.addEventListener('click', () => {
  updateServings(servings - 2);
});

toggleInfoButton.addEventListener('click', () => {
  const isHidden = secretTip.hasAttribute('hidden');

  if (isHidden) {
    secretTip.removeAttribute('hidden');
    toggleInfoButton.textContent = 'Ocultar dica';
    return;
  }

  secretTip.setAttribute('hidden', 'true');
  toggleInfoButton.textContent = 'Dica da casa';
});

currentYear.textContent = new Date().getFullYear();
