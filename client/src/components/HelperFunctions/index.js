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

export function dateCheck(from,to,check) {

  let fDate,lDate,cDate;
  fDate = Date.parse(from);
  lDate = Date.parse(to);
  cDate = Date.parse(check);

  if((cDate <= lDate && cDate >= fDate)) {
      return true;
  }
  return false;
}