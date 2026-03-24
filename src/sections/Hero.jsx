'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Button from '@/components/Button';
import styles from './Hero.module.scss';
import React from 'react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className={`${styles.hero} section`}>
      <div className="container">
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className={styles.greeting}>Hello, I'm</motion.p>
          <motion.h1 variants={itemVariants} className={styles.name}>Aakash Bisht</motion.h1>
          <motion.h2 variants={itemVariants} className={styles.role}>Software Developer</motion.h2>
          <motion.p variants={itemVariants} className={styles.bio}>
            I build premium, interactive web applications and scalable software solutions. 
            With a passion for clean code and modern design, I turn complex problems into elegant interfaces.
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.buttons}>
            <Button href="#projects" variant="primary">View Work</Button>
            <Button href="#contact" variant="secondary">Contact Me</Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className={styles.socials}>
            <a href="https://github.com/Aakashbisht07" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/aakash-bisht-9528522a3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aakashbisht045@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
