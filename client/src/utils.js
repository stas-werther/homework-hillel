import { fetchOptions, apiUrl } from './constants';
import { chain } from 'lodash';

const prepareUrl = (postFix) => `${apiUrl}${postFix}`;
const responseToJson = (response) => response.json();

export const get = (url = '/') =>
  fetch(prepareUrl(url), fetchOptions('get')).then(responseToJson);

export const addClasses = (el, classes = []) => {
  const newElement = el.cloneNode();
  newElement.classList.add(...classes);
  return newElement;
};

export const appendChildren = (el, children = []) => {
  const newElement = el.cloneNode();
  children.forEach((child) => {
    if (child !== null && typeof child !== 'object') {
      newElement.append(document.createTextNode(child));
    } else if (child !== null) {
      newElement.append(child);
    }
  });
  return newElement;
};

export const element = (
  tagName,
  { children = [], classNames = [], listeners = {}, ...additionalProps }
) =>
  chain(document.createElement(tagName))
    .thru((el) => addClasses(el, classNames))
    .thru((el) => appendChildren(el, children))
    .tap((el) => {
      Object.entries(listeners).forEach(([listener, callback]) => {
        el.addEventListener(listener, callback);
      });
    })
    .value();

export const div = (props) => element('div', props);
export const a = (props) => element('a', props);
export const img = (props) => element('img', props);
export const span = (props) => element('span', props);