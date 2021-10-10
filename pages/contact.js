import React from 'react'

import Layout from '../components/layout'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

import styles from './contact.module.css'

export default function Contact() {
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

                <form className={styles.form}>
                    <div>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea placeholder="Message" name="message" />
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