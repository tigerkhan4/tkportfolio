import styles from './ContactStyles.module.css';
import React from 'react';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Send Me a Message!</h1>
        <form action ="https://formspree.io/f/mpwpzdpj" method= "post">
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Name" 
                required/>
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder="Email" 
                required/>
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <input 
                type="text" 
                name="message" 
                id="message" 
                placeholder="Leave your message here!" 
                required/>
            </div>
            <input className="hover btn" 
            type="submit" 
            value= "submit"
            />
        </form>
    </section>
  );

}

export default Contact;
