function getUserList() {
  var $userList = document.querySelector('#user-list');
  console.log($userList);
  var userRequest = new XMLHttpRequest();
  userRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  userRequest.responseType = 'json';
  userRequest.addEventListener('load', function () {
    console.log(userRequest.status);
    console.log(userRequest.response);
    appendUsers(userRequest.response, $userList);
  });
  userRequest.send();
}

getUserList();

function appendUsers(obj, userList) {
  for (const key in obj) {
    var liElement = createElement('li', { textContent: obj[key].name });
    console.log(liElement);
    userList.appendChild(liElement);
  }

}

// Source: Tim Davis. Testing out his createElement function
function createElement(tagName, properties, attributes) {
  var $element = document.createElement(tagName);
  for (var prop in properties) {
    $element[prop] = properties[prop];
  }

  for (var name in attributes) {
    $element.setAttribute(name, attributes[name]);
  }
  return $element;
}
