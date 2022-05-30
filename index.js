import UI from './modules/InterfaceFunction.js';
import {
  title, author, listLink, addLink, addForm, contactLink, date,
} from './modules/Selector.js';
import renderSection from './modules/RenderSection.js';
import dateTime from './modules/Luxon.js';

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (title.value.trim !== '' && author.value.trim !== '') {
    UI.saveBook(title.value, author.value);
    title.value = '';
    author.value = '';
  }
});

listLink.addEventListener('click', () => {
  renderSection('listBook');
});

addLink.addEventListener('click', () => {
  renderSection('addBook');
});
contactLink.addEventListener('click', () => {
  renderSection('contact-section');
});
window.onload = () => {
  renderSection('listBook');
};
date.textContent = dateTime;

UI.displayBooks();