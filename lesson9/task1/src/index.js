// file path: src/index.js

import printProfile from "./renderProfile";

const userData = {
  name: "Tom",
  age: 17,
};

const profile = {
  ...userData,
  company: "Gromcode",
};

printProfile(profile);

const number = 17;

if (number === 18) {
  // eslint-disable-next-line no-alert
  alert("yes"); // eslint-disable-line no-alert
}
