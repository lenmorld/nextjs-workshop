import React, { useState } from 'react'

import Layout from '../components/layout'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

import styles from './contact.module.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        switch(e.target.name) {
            case 'name':
                setName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'message':
                setMessage(e.target.value)
                break
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await fetch("/api/contactus", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                message: message,
            }),
        });
    
        alert("Your message has been submitted. Thank you!");

        // reset fields for a new submission
        setName("");
        setEmail("");
        setMessage("");
    };


    return (
        <Layout>
            <h1>Contact</h1>

            <div className={styles.container}>
                <ul className={styles.list}>
                    <li>
                        <FaMapMarkerAlt />
                        <span>Montreal, CA</span>
                    </li>
                    <li>
                        <FaPhoneAlt />
                        <span>514 123 1234</span>
                    </li>
                    <li>
                        <FaEnvelope />
                        <span>yourname@example.com</span>
                    </li>
                </ul>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Email" value={email} onChange={handleChange} />
                    </div>
                    <div>
                        <textarea placeholder="Message" name="message" value={message} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>

   

        </Layout>
    )
}