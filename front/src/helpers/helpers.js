const XLSX = require("xlsx");
var Buffer = require("buffer/").Buffer;
const { v4 } = require("uuid");

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
const parseExcelBase64 = (base64String) => {
  const binaryString = Buffer.from(base64String, "base64").toString("binary");
  const arrayBuffer = new ArrayBuffer(binaryString.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < binaryString.length; i++) {
    uint8Array[i] = binaryString.charCodeAt(i);
  }
  const workbook = XLSX.read(uint8Array, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });
  const header = jsonData[0];
  jsonData.shift();
  const arrayOfObjects = jsonData.map((row) =>
    header.reduce((acc, key, index) => ({ ...acc, [key]: row[index] }), {})
  );
  return arrayOfObjects;
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
const arrayToExcel = (dataArray) => {
  // Create a new worksheet
  const ws = XLSX.utils.json_to_sheet(dataArray);

  // Create a new workbook
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");

  // Generate a unique identifier for the file name
  const fileId = v4();

  // Create a binary string from the workbook
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  // Convert the binary string to a Blob
  const blob = new Blob([s2ab(wbout)], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a File from the Blob
  const file = new File([blob], `${fileId}.xlsx`, {
    type: blob.type,
  });

  // Create a download link
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = file.name;

  // Append the link to the document and trigger a click event
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link from the document
  document.body.removeChild(link);
};
function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
}
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
  arrayToExcel,
  chunkArray,
  fileToBase64,
  generateRandomPassword,
  getBase64,
  parseExcelBase64,
  shuffleArray,
  classifyByField,
};
