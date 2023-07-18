import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserForm from './UserForm';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Global State Application</h1>
        <UserForm />
        <UserDetails />
      </div>
    </Provider>
  );
};

export default App;
