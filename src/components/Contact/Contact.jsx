import { useEffect, useRef, useState } from 'react';
import { contactVariants } from '../../helpers/motionTextVariants';
import './Contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [formErrors, setFormErrors] = useState({
      name: false,
      email: false,
      message: false
    });
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [error, setError] = useState(false);
  const inView = useInView(ref, { margin: "-100px" });
  const [sendReq, setSendReq] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault();
    setSendReq(true);
  
    try {
      // Get form fields
      const formData = new FormData(formRef.current);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
      // Email validation using regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setFormErrors({ ...formErrors, email: true });
        return; // Exit function early if email is invalid
      } else {
        setFormErrors({ ...formErrors, email: false });
      }
  
      // Validate form fields
      if (!name) {
        setFormErrors({ ...formErrors, name: true });
        return;
      } else {
        setFormErrors({ ...formErrors, name: false });
      }
  
      if (!message) {
        setFormErrors({ ...formErrors, message: true });
        return;
      } else {
        setFormErrors({ ...formErrors, message: false });
      }
  
      // If form is valid, send email
      await emailjs.sendForm('service_ay5lngr', 'template_3f1ezka', formRef.current, {
        publicKey: 'hCSB1dSK195accZfA',
      });
  
      // Handle success
      setSuccess(true);
      setSendReq(false);
    } catch (error) {
      // Handle error
      console.error('Email sending failed:', error);
      setFailed(true);
      setSendReq(false);
    }
  };
  
  useEffect(() => {
    // Handle success state
    if (success) {
      formRef.current.reset();
      // Show success toast
      showToast('Submitted Successfully', 'success');
    } else if (failed) {
      formRef.current.reset();
      showToast('Failed to send email. Please try again later.', 'error');
    }
  }, [success, failed]);
  

    const showToast = (message, type) => {
      toast(message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          type: type // 'success' or 'error'
      });
    };
  
  return (
    <motion.div ref={ref} className='contact' variants={contactVariants} initial="initial" whileInView="animate" >
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        <ToastContainer />
        <motion.div className="textContainer" variants={contactVariants}>
            <motion.h1 variants={contactVariants}>Let's connect together</motion.h1>
            <motion.div className="conItem" variants={contactVariants}>
                <h2>Email</h2>
                <div className="social-links">
                  <a href="mailto:sakthivel.ganesan@hotmail.com" target='_blank'>
                      <img src="/email.png" className='mail' alt="" />
                      <span>sakthivel.ganesan@hotmail.com</span>
                  </a>
                </div>
            </motion.div>
            <motion.div className="conItem" variants={contactVariants}>
                <h2>Phone</h2>
                <div className="social-links">
                  <a href="tel:+919965397566" target='_blank'>
                      <img src="/phone.png" className='phone' alt="" />
                      <span>+91 9965397566</span>
                  </a>
                </div>
            </motion.div>
            <motion.div className="conItem" variants={contactVariants}>
                <h2>Address</h2>
                <div className="social-links">
                  <a href="https://maps.app.goo.gl/UE5r5gCXshr59Lz87" target='_blank'>
                      <img src="/home.png" className='home' alt="" />
                      <span>Tiruchirappalli, Tamil Nadu, India</span>
                  </a>
                </div>
            </motion.div>
            <motion.div className="conItem" variants={contactVariants}>
              <h2>Social Links</h2>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/sakthivel-g/" target='_blank'>
                  <img src="/linkedin_white.png" alt="" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/sakt-hi" target='_blank'>
                  <img src="/github_white.png" className='github' alt="" />
                  <span>Github</span>
                </a>
                <a href="https://dribbble.com/sakthi_svg" target='_blank'>
                  <img src="/dribbble_white.png" className='github' alt="" />
                  <span>Dribbble</span>
                </a>
              </div>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}} >
                <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
                    <motion.path
                    strokeWidth={0.2}
                    fill="none"
                    initial={{pathLength:0}}
                    animate={inView && {pathLength:1}}
                    transition={{duration:3}}
                    d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                    M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                    C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                    c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                    c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                    c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                    c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                    c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                    c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                    c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                    c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                    l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                    C32.666,7.326,25.339,0,16.333,0z"
                    />
                </svg>
            </motion.div>
            <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}}>
              <input type="text" name="name" id="" placeholder='Name' required />
              {formErrors.name && <p style={{ color: "lightGray" }}>Please enter your name</p>}
              <input type="email" name="email" id="" placeholder='Email' required />
              {formErrors.email && <p style={{ color: "red" }}>Please enter a valid email address</p>}
              <textarea name="message" id="" style={{ outline: formErrors.message ? "1px solid red" : "" }} rows={8} placeholder='Message'></textarea>
              {formErrors.message && <p style={{ color: "#FF6347"}}>Please enter your message</p>}
              {sendReq ? <button><div class="loader"></div></button> : <button>Submit</button>}
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact