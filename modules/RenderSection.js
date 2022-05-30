import {
  bookListing, bookReg, contact, listLink, addLink, contactLink,
} from './Selector.js';

export default function renderSection(page) {
  switch (page) {
    case 'listBook':
      bookListing.style.display = 'flex';
      bookReg.style.display = 'none';
      contact.style.display = 'none';
      listLink.style.color = 'blue';
      addLink.style.color = 'black';
      contactLink.style.color = 'black';
      break;
    case 'addBook':
      bookListing.style.display = 'none';
      bookReg.style.display = 'flex';
      contact.style.display = 'none';
      listLink.style.color = 'black';
      addLink.style.color = 'blue';
      contactLink.style.color = 'black';

      break;

    case 'contact-section':
      bookListing.style.display = 'none';
      bookReg.style.display = 'none';
      contact.style.display = 'flex';
      listLink.style.color = 'black';
      addLink.style.color = 'black';
      contactLink.style.color = 'blue';
      break;

    default:
      bookListing.style.display = 'flex';
      bookReg.style.display = 'none';
      contact.style.display = 'none';
      listLink.style.color = 'blue';
      addLink.style.color = 'black';
      contactLink.style.color = 'black';
      break;
  }
}