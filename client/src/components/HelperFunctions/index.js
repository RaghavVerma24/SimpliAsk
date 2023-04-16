import { v4 as uuid } from 'uuid';

export function scrollFunction(id) {
    let e = document.getElementById(id);
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start'
    });
}

export function generateID() {
  return uuid();
}