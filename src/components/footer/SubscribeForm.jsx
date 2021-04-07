import React, { useState } from 'react';

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Submitting name ${name}`);
  };

  return (
    <div className='newsLetterForm'>
      <form onSubmit={() => handleSubmit}>
        <input
          className='input_newsLetter'
          placeholder='Name'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className='input_newsLetter'
          placeholder='Email'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input className='submit_newsLetter' type='submit' value='Subscribe' />
      </form>

      <div className='footer-divide-line'></div>
    </div>
  );
};

export default SubscribeForm;
