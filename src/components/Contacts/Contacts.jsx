import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


import 'bootstrap/dist/css/bootstrap.min.css'
import './Contacts.css'

export default function Contacts() {


  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  function sendEmail(even){
    //отключить перезагрузку страницы
    even.preventDefault();
    // console.log(form.current);
    emailjs
    .sendForm('service_gncsuwg', 'template_rtd3t79', form.current, {
      publicKey: 'CAL79PXfsrlyE5Rb2',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setSuccess(true)
      },
      (error) => {
        console.log('FAILED...', error.text);
        setFail(true);
      },
    );

  }
  return (
    <>
    
    <div className="contacts">

      <h1 className='contacts__title'>Send me a message</h1>

      <form ref={form} onSubmit={sendEmail} className='form' action="#">

        <div  className='email'>
            <label className='email__text' htmlFor="">Введите Вашу почту: </label>
            <input name='email' className=' form-control email__inp' type="email" placeholder='test@gmail.ru' />
        </div>

        <div className="message">
          <label className = "message__text"  htmlFor="">Введите Ваше сообщение: </label>
          <textarea name='message' className='message__inp form-control' ></textarea>
        </div>

        <button className='submit__btn btn btn-secondary rounded-pill px-3' type='submit'>Отправить</button>
       
      </form>

      { success &&  (<p>Сообщение успешно отправлено</p>)}
      {   fail  && (<p>Произошла ощибка отправки данных</p>)}


     
    </div>

    </>
  )
}
