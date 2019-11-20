const setUserAction = userObj => ({
  type: 'SET_USER',
  payload: userObj
});

const persistUserFromAPI = () => dispatch => {
  fetch('http://localhost:3000/persist', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + localStorage.token
    }
  })
    .then(r => r.json())
    .then(userObj => {
      dispatch(setUserAction(userObj));
    });
};

const loginUserToAPI = userCredentials => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userCredentials)
  };
  fetch('http://localhost:3000/login', config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.token = data.token;
    });
};

const createNewUserToAPI = userInfo => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  };
  fetch('http://localhost:3000/users', config)
    .then(r => r.json())
    .then(data => {
      dispatch(setUserAction(data.user));
      localStorage.token = data.token;
    });
};

export default {
  persistUserFromAPI,
  loginUserToAPI,
  createNewUserToAPI
};
