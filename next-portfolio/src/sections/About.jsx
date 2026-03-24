'use client';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Get to know me" />
        
        <div className={styles.aboutContent}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.aboutText}
          >
            <p>
              Hello! I'm <strong>Aakash Bisht</strong>, a passionate and dedicated Computer Science engineering 
              student at Lovely Professional University, India. I have a strong foundation in modern 
              web development, algorithms, and data structures.
            </p>
            <p>
              My journey in tech involves continuous learning and applying new skills. I strive to write 
              clean, efficient, and scalable code. Whether it's building interactive web applications or 
              analyzing data for predictions, I enjoy turning complex challenges into simple, beautiful, 
              and intuitive designs.
            </p>
            
            <div className={styles.aboutDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailTitle}>Degree</span>
                <span className={styles.detailValue}>B.Tech CSE</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailTitle}>Email</span>
                <span className={styles.detailValue}>aakashbisht045@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailTitle}>Location</span>
                <span className={styles.detailValue}>India</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Button href="/AakashCV.pdf" variant="primary" target="_blank">
                View Resume
              </Button>
              <Button href="/AakashCV.pdf" download variant="secondary">
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
