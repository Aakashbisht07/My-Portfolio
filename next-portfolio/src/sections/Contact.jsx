'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import styles from './Contact.module.scss';
import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        e.target.reset();
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: false, error: result.error || 'Something went wrong' });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle title="Get In Touch" subtitle="Let's build something" />

        <div className={styles.contactContainer}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.contactInfo}
          >
            <h3>Connect with me</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className={styles.methods}>
              <div className={styles.method}>
                <div className={styles.iconBox}><Mail /></div>
                <span>aakashbisht045@gmail.com</span>
              </div>
              <div className={styles.method}>
                <div className={styles.iconBox}><Phone /></div>
                <span>+91 7668872615</span>
              </div>
              <div className={styles.method}>
                <div className={styles.iconBox}><MapPin /></div>
                <span>India</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            {status.success && <div className={styles.successAlert}>Message sent successfully! I'll be in touch.</div>}
            {status.error && <div className={styles.errorAlert}>{status.error}</div>}
            
            <div className={styles.formGroup}>
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <Button 
              type="submit" 
              variant="primary" 
              loading={status.loading}
              disabled={status.loading}
            >
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
