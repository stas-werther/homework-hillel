import { fetchOptions, apiUrl } from './constants';
import { chain } from 'lodash';


const prepareUrl = (postFix:string) => `${apiUrl}${postFix}`;
const responseToJson = (response:any) => response.json();

export const get = (url = '/') =>
  fetch(prepareUrl(url), fetchOptions('get')).then(responseToJson);

export const addClasses = (el:any, classes = []) => {
  const newElement = el.cloneNode();
  newElement.classList.add(...classes);
  return newElement;
};

export const appendChildren = (el:any, children = []) => {
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
  tagName:string,
  { children = [], classNames = [], listeners = {}, ...additionalProps }
) =>
  chain(document.createElement(tagName))
    .thru((el:Object) => addClasses(el, classNames))
    .thru((el:any) => appendChildren(el, children))
    .tap((el:any) => {
      Object.entries(listeners).forEach(([listener, callback]) => {
        el.addEventListener(listener, callback);
      });
    })
    .value();

export const div = (props:Object) => element('div', props);
export const a = (props:Object) => element('a', props);
export const img = (props:Object) => element('img', props);
export const span = (props:Object) => element('span', props);