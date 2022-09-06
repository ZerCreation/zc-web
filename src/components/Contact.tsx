import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';

export default function Contact() {
  const [toSend, setToSend] = useState({
    fromName: '',
    message: '',
    replyTo: '',
  });
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 'auto',
    width: '40%',
    minHeight: 300
  } as const;

  function isEmailValid(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  function onChange(e: (React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>)) {
    setToSend({ ...toSend, [e.currentTarget.name]: e.currentTarget.value });
  };

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID) {
        throw new Error('Email message can\'t be sent because of internal configuration error.');
      }

      if (!isEmailValid(toSend.replyTo)) {
        throw new Error(`Email '${toSend.replyTo}' is invalid`);
      }

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      alert('Message was successfully sent.');
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <h2>Contact</h2>
      <form onSubmit={onSubmit} style={formStyle}>
        <input
          type='text'
          name='fromName'
          placeholder='Your name:'
          value={toSend.fromName}
          onChange={onChange}
        />
        <input
          type='text'
          name='replyTo'
          placeholder='Your email:'
          value={toSend.replyTo}
          onChange={onChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your message:'
          rows={10}
          value={toSend.message}
          onChange={onChange}
          required
        />
        Captcha
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type='submit' variant='contained' style={{ width: 140 }}>Send email</Button>
        </div>
      </form>
    </>
  )
}
