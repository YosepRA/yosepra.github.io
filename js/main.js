function eltAttr(el, attributes, ...children) {
  let dom = document.createElement(el);
  // Assign attributes to dom.
  if (attributes) {
    for (const attr of Object.keys(attributes)) {
      dom.setAttribute(attr, attributes[attr]);
    }
  }
  // Append children elements to dom.
  if (children.length > 0) {
    for (const child of children) {
      if (typeof child === 'string') dom.appendChild(document.createTextNode(child));
      else dom.appendChild(child);
    }
  }
  return dom;
}

function eltProps(el, props, ...children) {
  let dom = document.createElement(el);
  if (props) dom = Object.assign(dom, props);
  if (children.length > 0) {
    for (const child of children) {
      if (typeof child === 'string') dom.appendChild(document.createTextNode(child));
      else dom.appendChild(child);
    }
  }
  return dom;
}

function docReady(cb) {
  if (document.readyState !== 'loading') cb();
  else document.addEventListener('DOMContentLoaded', cb);
}

function underConstruction(el) {
  alert(`I'm sorry. '${el}' is under construction.`);
}

window.addEventListener('load', () => {
  let menuToggle = document.querySelector('.mainNav-menuToggle');
  menuToggle.addEventListener('click', () => menuToggle.classList.toggle('show'));
});
