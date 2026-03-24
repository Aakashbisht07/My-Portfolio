'use client';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import styles from './Education.module.scss';
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { 
      date: 'Jan - Apr 2025', 
      title: 'Cloud Computing', 
      subtitle: 'NPTEL Online Certification',
      certificateUrl: 'https://drive.google.com/file/d/18h-6mn7FYLt-cnhwZZsgfcPfVsI6A6ic/view?usp=sharing' 
    },
    { 
      date: 'Oct 2024', 
      title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional', 
      subtitle: 'Oracle Cloud',
      certificateUrl: 'https://drive.google.com/file/d/1Sjts9HiMLuOCHEYRguq6an1B_RrzzCAJ/view?usp=sharing' 
    },
    { 
      date: 'Oct 2024', 
      title: 'The Bits and Bytes of Computer Networking', 
      subtitle: 'Google / Coursera',
      certificateUrl: 'https://drive.google.com/file/d/1Qz5kipxScV7yga8mWZ5W30VG-BM2C-Ti/view?usp=sharing' 
    },
    { 
      date: 'Oct 2024', 
      title: 'Introduction to Hardware and Operating Systems', 
      subtitle: 'IBM / Coursera',
      certificateUrl: 'https://drive.google.com/file/d/1VQYPl7jhtUC5plm98b_tKfVvXzfoDfjv/view?usp=sharing' 
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle title="Certifications" subtitle="Professional Training" />
        <div className={styles.timeline}>
          {certifications.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={styles.timelineItem}
            >
              <div className={styles.timelineContent}>
                <span className={styles.date}>{item.date}</span>
                <h4>{item.title}</h4>
                {item.subtitle && <p>{item.subtitle}</p>}
                <a 
                  href={item.certificateUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.certificateBtn}
                >
                  <ExternalLink size={16} /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
