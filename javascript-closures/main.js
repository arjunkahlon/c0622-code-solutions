const graduate = function (credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
};

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const drTitle = medicalSchool('Arjun Kahlon');
const esqTitle = lawSchool('Arjun Kahlon');

console.log(drTitle);
console.log(esqTitle);
