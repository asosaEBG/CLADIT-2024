const postData = (api, body) => {
  return new Promise((resolve, reject) => {
    // Using Fetch API
    fetch(process.env.REACT_APP_FORMS + api, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-cache",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          reject({
            mensaje: "ERROR: " + response.statusText,
            codigo: 0,
            status: response.status,
          });
        }
      })
      .then((data) => {
        resolve({ mensaje: "Ok", codigo: 1, data: data });
      })
      .catch((err) => {
        console.log(err);
        reject({
          mensaje: "ERROR: " + err,
          codigo: 2,
        });
      });
  });
};

const getDataAuth = (api, TokenType, Token) => {
  return new Promise((resolve, reject) => {
    // Using Fetch API
    fetch(process.env.REACT_APP_FORMS + api, {
      cache: "no-cache",
      headers: {
        Authorization: TokenType + " " + Token,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({
            mensaje: "ERROR: " + response.statusText,
            codigo: 0,
            status: response.status,
          });
        }
      })
      .then((data) => {
        if (data.status == 401) {
          window.location.href = process.env.REACT_APP_REDIRECT_ENDPOINT;
        } else if (data.status == 500) {
          reject({
            mensaje: "ERROR: " + data.statusText,
            codigo: 0,
            status: data.status,
          });
        } else {
          resolve({ mensaje: "Ok", codigo: 1, data: data });
        }
      })
      .catch((err) => {
        console.log(err);
        reject({
          mensaje: "ERROR: " + err,
          codigo: 2,
        });
      });
  });
};
const getData = (api) => {
  return new Promise((resolve, reject) => {
    // Using Fetch API
    fetch(process.env.REACT_APP_FORMS + api, {
      cache: "no-cache",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({
            mensaje: "ERROR: " + response.statusText,
            codigo: 0,
            status: response.status,
          });
        }
      })
      .then((data) => {
        if (data.status == 401) {
          window.location.href = process.env.REACT_APP_REDIRECT_ENDPOINT;
        } else if (data.status == 500) {
          reject({
            mensaje: "ERROR: " + data.statusText,
            codigo: 0,
            status: data.status,
          });
        } else {
          resolve({ mensaje: "Ok", codigo: 1, data: data });
        }
      })
      .catch((err) => {
        console.log(err);
        reject({
          mensaje: "ERROR: " + err,
          codigo: 2,
        });
      });
  });
};

const postDataAuth = (api, TokenType, Token, body) => {
  return new Promise((resolve, reject) => {
    // Using Fetch API
    fetch(process.env.REACT_APP_FORMS + api, {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: TokenType + " " + Token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({
            mensaje: "ERROR: " + response.statusText,
            codigo: 0,
            status: response.status,
          });
        }
      })
      .then((data) => {
        if (data.status == 401) {
          window.location.href = process.env.REACT_APP_REDIRECT_ENDPOINT;
        } else if (data.status == 500) {
          reject({
            mensaje: "ERROR: " + data.statusText,
            codigo: 0,
            status: data.status,
          });
        } else {
          resolve({ mensaje: "Ok", codigo: 1, data: data });
        }
      })
      .catch((err) => {
        reject({
          mensaje: "ERROR: " + err,
          codigo: 2,
        });
      });
  });
};
const deleteDataAuth = (api, TokenType, Token, body) => {
  return new Promise((resolve, reject) => {
    // Using Fetch API
    fetch(process.env.REACT_APP_FORMS + api, {
      cache: "no-cache",
      method: "DELETE",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: TokenType + " " + Token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({
            mensaje: "ERROR: " + response.statusText,
            codigo: 0,
            status: response.status,
          });
        }
      })
      .then((data) => {
        if (data.status == 401) {
          window.location.href = process.env.REACT_APP_REDIRECT_ENDPOINT;
        } else if (data.status == 500) {
          reject({
            mensaje: "ERROR: " + data.statusText,
            codigo: 0,
            status: data.status,
          });
        } else {
          resolve({ mensaje: "Ok", codigo: 1, data: data });
        }
      })
      .catch((err) => {
        reject({
          mensaje: "ERROR: " + err,
          codigo: 2,
        });
      });
  });
};
const putDataAuth = (api, TokenType, Token, body) => {
  return new Promise((resolve, reject) => {
    // Using Fetch API
    fetch(process.env.REACT_APP_FORMS + api, {
      cache: "no-cache",
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: TokenType + " " + Token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({
            mensaje: "ERROR: " + response.statusText,
            codigo: 0,
            status: response.status,
          });
        }
      })
      .then((data) => {
        if (data.status == 401) {
          window.location.href = process.env.REACT_APP_REDIRECT_ENDPOINT;
        } else if (data.status == 500) {
          reject({
            mensaje: "ERROR: " + data.statusText,
            codigo: 0,
            status: data.status,
          });
        } else {
          resolve({ mensaje: "Ok", codigo: 1, data: data });
        }
      })
      .catch((err) => {
        reject({
          mensaje: "ERROR: " + err,
          codigo: 2,
        });
      });
  });
};
const putData = (api, body) => {
  return new Promise((resolve, reject) => {
    // Using Fetch API
    fetch(process.env.REACT_APP_FORMS + api, {
      cache: "no-cache",
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({
            mensaje: "ERROR: " + response.statusText,
            codigo: 0,
            status: response.status,
          });
        }
      })
      .then((data) => {
        if (data.status == 401) {
          window.location.href = process.env.REACT_APP_REDIRECT_ENDPOINT;
        } else if (data.status == 500) {
          reject({
            mensaje: "ERROR: " + data.statusText,
            codigo: 0,
            status: data.status,
          });
        } else {
          resolve({ mensaje: "Ok", codigo: 1, data: data });
        }
      })
      .catch((err) => {
        reject({
          mensaje: "ERROR: " + err,
          codigo: 2,
        });
      });
  });
};

module.exports = {
  postData,
  getDataAuth,
  postDataAuth,
  deleteDataAuth,
  putDataAuth,
  getData,
  putData,
};
