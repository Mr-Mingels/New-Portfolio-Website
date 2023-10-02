import React, { useState, useEffect, useRef } from 'react'
import Transition from './Transition';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    const [name, setName] = useState({
        value: '',
        placeholder: 'Name'
    })
    const [redNamePlaceHolder, setRedNamePlaceHolder] = useState(false)
    const [email, setEmail] = useState({
        value: '',
        placeholder: 'Email'
    })
    const [redEmailPlaceHolder, setRedEmailPlaceHolder] = useState(false)
    const [subject, setSubject] = useState({
        value: '',
        placeholder: 'Subject'
    })
    const [redSubjectPlaceHolder, setRedSubjectPlaceHolder] = useState(false)
    const [message, setMessage] = useState({
        value: '',
        placeholder: 'Message'
    })
    const [redMessagePlaceHolder, setRedMessagePlaceHolder] = useState(false)
    const [loader, setLoader] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalTxt, setModalTxt] = useState('Message Sent!')
    const form = useRef<HTMLFormElement>(null);
    const hasAnimatedButton = useRef(false);
    
      useEffect(() => {
        if(name.value !== '') {
            setRedNamePlaceHolder(false)
            setName({ ...name, placeholder: 'Name' })
        }
      },[name.value])
      
      useEffect(() => {
        if (email.value !== '') {
            setRedEmailPlaceHolder(false)
            setEmail({ ...email, placeholder: 'Email' })
        }
      }, [email.value])
    
      useEffect(() => {
        if (subject.value !== '') {
            setRedSubjectPlaceHolder(false)
            setSubject({ ...subject, placeholder: 'Subject' })
        }
      }, [subject.value])
    
      useEffect(() => {
        if (message.value !== '') {
            setRedMessagePlaceHolder(false)
            setMessage({ ...message, placeholder: 'Message' })
        }
      }, [message.value])
    
      const sendEmail = async (e: any) => {
        e.preventDefault();
        setLoader(true)
        if (name.value === '') {
            setRedNamePlaceHolder(true)
            setName({ ...name, placeholder: 'Please Fill Out This Field' })
        }
        if (email.value === '') {
            setRedEmailPlaceHolder(true)
            setEmail({ ...email, placeholder: 'Please Fill Out This Field' })
        }
        if (subject.value === '') {
            setRedSubjectPlaceHolder(true)
            setSubject({ ...subject, placeholder: 'Please Fill Out This Field' })
        }
        if (message.value === '') {
            setRedMessagePlaceHolder(true)
            setMessage({ ...message, placeholder: 'Please Fill Out This Field' })
        }
        if (name.value === '' || email.value === '' || subject.value === '' || message.value === ''){
            setLoader(false)
            return;
        }
        if (form.current) {
            console.log(form.current)
            try {
              const result = await emailjs.sendForm('service_jga4lmc', 'template_ad07c07', form.current, 'kS_vyrWbg598t75I-');
              console.log(result.text);
              e.target.reset();
              setRedNamePlaceHolder(false)
              setName({ ...name, value: '', placeholder: 'Name' })
              setRedEmailPlaceHolder(false)
              setEmail({ ...email, value: '', placeholder: 'Email' })
              setRedSubjectPlaceHolder(false)
              setSubject({ ...subject, value: '', placeholder: 'Subject' })
              setRedMessagePlaceHolder(false)
              setMessage({ ...message, value: '', placeholder: 'Message' })
              setModalTxt('Message Sent!')
              setModalOpen(true)
              setLoader(false);
              setTimeout(() => {
                setModalOpen(false)
              }, 4000);
            } catch (error) {
              console.log(error);
              e.target.reset();
              setModalTxt('Unknown Error.')
              setModalOpen(true)
              setLoader(false);
              setTimeout(() => {
                setModalOpen(false)
              }, 4000);
            }
          } else {
            setLoader(false);
          }
      };

      const closeModal = () => {
        setModalOpen(false)
      }


  return (
    <div className='contactWrapper'>
        {modalOpen && (
            <motion.div className='contactModalWrapper'
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}>
                <span className='modalTxt'>{modalTxt}</span>
                <FontAwesomeIcon className='modalIcon' icon={faX} onClick={() => closeModal()}/>
            </motion.div>
        )}
        <div className='contactContent'>
            <motion.h3 className='contactTitle'
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}>Let's connect</motion.h3>
            <form className='contactFormWrapper' ref={form} onSubmit={sendEmail}>
                <div className='userInfoInputsWrapper'>
                    <motion.input type='text' placeholder={name.placeholder} className={`formInput name ${redNamePlaceHolder ? 'red' : ''}`} 
                    value={name.value} name="user_name" onChange={(e) => setName({ ...name, value: e.target.value})}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}/>
                    <motion.input type='email' placeholder={email.placeholder} className={`formInput email ${redEmailPlaceHolder ? 'red' : ''}`}
                    value={email.value} name="user_email" onChange={(e) => setEmail({ ...email, value: e.target.value})} 
                    initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}/>
                </div>
                <motion.input type='text' placeholder={subject.placeholder} className={`formInput subject ${redSubjectPlaceHolder ? 'red' : ''}`}
                value={subject.value} name="subject" onChange={(e) => setSubject({ ...subject, value: e.target.value})}
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}/>
                <motion.textarea placeholder={message.placeholder} className={`formInput message ${redMessagePlaceHolder ? 'red' : ''}`}
                value={message.value} name="message" onChange={(e) => setMessage({ ...message, value: e.target.value})} 
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}/>
                {loader ? (
                    <button type='button' className='formBtn loading'><span className="submitLoader"></span></button>
                ) : (
                    <motion.button type='submit' className='formBtn'
                    initial={{ x: hasAnimatedButton.current ? 0 : -600, opacity: hasAnimatedButton.current ? 1 : 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 3, ease: 'easeInOut' }}
                    onUpdate={() => { hasAnimatedButton.current = true; }}
                    >Send</motion.button>
                )}
            </form>
        </div>
    </div>
  )
}

export default Transition(Contact);
