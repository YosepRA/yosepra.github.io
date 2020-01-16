function copyContact(event) {
  let el = event.target;
  if (el.tagName !== 'BUTTON') return;
  let contactContainer = el.closest('.contact');

  // Copy mechanism.
  copyText(el.previousElementSibling.textContent);

  // Disable interface.
  el.disabled = true;
  contactContainer.classList.add('copied');

  // Reset interface.
  setTimeout(() => {
    el.disabled = false;
    contactContainer.classList.remove('copied');
  }, 2000);
}

function copyText(text) {
  let tempInput = document.createElement('input');
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

function init() {
  let contactsInfo = document.querySelector('.contacts-info');
  contactsInfo.addEventListener('click', copyContact);
}

docReady(init);
