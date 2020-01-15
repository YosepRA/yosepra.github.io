function elt(el, attributes, ...children) {
  let dom = document.createElement(el);
  // Assign attributes to dom.
  for (const attr of Object.keys(attributes)) {
    dom.setAttribute(attr, attributes[attr]);
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
