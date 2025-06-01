import '../styles/ContactForm.css';
import ScrollAnimado from '../components/ScrollAnimado';
import Nube from '../assets/NubeJinx.png';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");

    emailjs
      .sendForm("service_lk", "template_lk", form.current, "yCxAdI-is7HSKFY0K")
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
        }
      );
  };
  return (
    <div className='contactColor'>
    <section className="contact">
      <div className="divTitulo">
        <ScrollAnimado direction="right" offsetY={0.9} >
            <img src={Nube} alt="Nube" className="nubeTitulo"/>
          </ScrollAnimado>
          <ScrollAnimado direction="right" delay={0.2}>
            <h1 className="titulo">Contacto</h1>
          </ScrollAnimado>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Ingrese su Nombre.-" required />
        <input type="email" name="user_email" placeholder="Inserte su Correo.-" required />
        <input type="text" name="user_subject" placeholder="Nombre su Proyecto / Empresa.-" />
        <textarea name="message" placeholder="Explique su proyecto.-" rows="5" required />
        <button type="submit">Enviar Propuesta!</button>
        {status === "success" && <p className="success-msg">¡Correo enviado con éxito! :D</p>}
        {status === "error" && <p className="error-msg">Hubo un error :c - Intenta nuevamente.</p>}
      </form>
    </section>
    </div>
  );
}
export default ContactForm;
