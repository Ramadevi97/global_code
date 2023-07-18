import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store';

const UserForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      age,
      email,
    };

    dispatch(setUser(user));

    // Reset form fields
    setName('');
    setAge(0);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Form</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.valueAsNumber)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <button type="submit">Set User</button>
    </form>
  );
};

export default UserForm;
