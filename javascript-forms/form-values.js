function handleSubmission(event) {
  event.preventDefault();
  var formObject = {};
  formObject.name = $contactForm.elements.name.value;
  formObject.email = $contactForm.elements.email.value;
  formObject.message = $contactForm.elements.message.value;
  // console.log($contactForm.elements.email.value);
  console.log(formObject);
  $contactForm.reset();
}

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleSubmission);
