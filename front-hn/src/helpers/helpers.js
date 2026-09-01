

const chunkArray = (array, chunkSize) => {
  if (chunkSize <= 0) {
    return array;
  } else {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
};

const fileToBase64 = (fileUrl) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result.split(",")[1]);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = function () {
      reject(new Error("Failed to fetch the file."));
    };
    xhr.open("GET", fileUrl);
    xhr.send();
  });
};
const generateRandomPassword = () => {
  const specialChars = "!@#$%^&*()-_=+";
  const numbers = "0123456789";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const requiredSpecialChars = 2;
  const requiredNumbers = 3;
  const totalLength = 12;
  const charset = specialChars + numbers + lowercaseChars + uppercaseChars;
  let password = "";
  for (let i = 0; i < requiredSpecialChars; i++) {
    const randomIndex = Math.floor(Math.random() * specialChars.length);
    password += specialChars.charAt(randomIndex);
  }
  for (let i = 0; i < requiredNumbers; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    password += numbers.charAt(randomIndex);
  }
  const randomLowercaseIndex = Math.floor(
    Math.random() * lowercaseChars.length
  );
  password += lowercaseChars.charAt(randomLowercaseIndex);
  const randomUppercaseIndex = Math.floor(
    Math.random() * uppercaseChars.length
  );
  password += uppercaseChars.charAt(randomUppercaseIndex);
  while (password.length < totalLength) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  password = shuffleString(password);
  return password;
};

const shuffleString = (string) => {
  const array = string.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
};
const getBase64 = (file, onLoadCallback) => {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const shuffleArray = (arr) => {
  // Clone the array to avoid modifying the original array
  const shuffledArray = [...arr];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};


const classifyByField = (arrayOfObjects, fieldName) => {
  const classifiedData = {};
  arrayOfObjects.forEach((obj) => {
    const fieldValue = obj[fieldName];
    if (!classifiedData[fieldValue]) {
      classifiedData[fieldValue] = [];
    }
    classifiedData[fieldValue].push(obj);
  });
  const resultArray = Object.values(classifiedData);
  return resultArray;
};
module.exports = {
  chunkArray,
  fileToBase64,
  generateRandomPassword,
  getBase64,
  shuffleArray,
  classifyByField,
};
