import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Box, Button, Modal, Typography } from '@mui/material';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const recaptchaRef = React.createRef<ReCAPTCHA>();
  const [captchaVisibility, setCaptchaVisibility] = React.useState(false);
  const handleClose = () => setCaptchaVisibility(false);
  const [formData, setFormData] = useState({
    fromName: '',
    message: '',
    replyTo: '',
  });
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '40px auto 0px auto',
    width: '40%',
    minHeight: 300
  } as const;
  const captchaModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  function isEmailValid(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }

  function onFormFieldChange(e: (React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>)) {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  async function onCaptchaCompleted(value: (string | null)) {
    const params = {
      ...formData,
      'g-recaptcha-response': value,
    };

    try {
      if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID) {
        throw new Error('Email message can\'t be sent because of internal configuration error.');
      }

      if (!isEmailValid(formData.replyTo)) {
        throw new Error(`Email '${formData.replyTo}' is invalid`);
      }

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        params,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setCaptchaVisibility(false);
      setFormData({
        fromName: '',
        message: '',
        replyTo: '',
      });
      alert('Message was successfully sent.');
    } catch (error) {
      console.log(error);
      alert(error);
    }

    recaptchaRef?.current?.reset();
  }

  async function onSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setCaptchaVisibility(true);
  };

  return (
    <>
      <h2>Contact</h2>
      <form onSubmit={onSubmit} style={formStyle}>
        <input
          type='text'
          name='fromName'
          placeholder='Your name:'
          value={formData.fromName}
          onChange={onFormFieldChange}
        />
        <input
          type='text'
          name='replyTo'
          placeholder='Your email:'
          value={formData.replyTo}
          onChange={onFormFieldChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your message:'
          rows={10}
          value={formData.message}
          onChange={onFormFieldChange}
          required
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
          <Button type='submit' variant='contained' style={{ width: 140 }}>Send email</Button>
        </div>
      </form>
      <Modal
        open={captchaVisibility}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={captchaModalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please solve the captcha to continue:
          </Typography>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
            onChange={onCaptchaCompleted}
            onExpired={() => recaptchaRef?.current?.reset()}
            theme='light'
            style={{ marginTop: 20 }}
          />
        </Box>
      </Modal>
    </>
  )
}
