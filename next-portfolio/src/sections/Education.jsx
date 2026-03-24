'use client';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import styles from './Education.module.scss';
import React from 'react';

export default function Education() {
  const education = [
    { date: 'Aug 2023 - Present', title: 'B.Tech Computer Science', subtitle: 'Lovely Professional University Punjab, India | CGPA: 6.5' },
    { date: 'Apr 2021 - Mar 2022', title: 'Intermediate (76%)', subtitle: 'T.C.G Public School Kotdwar, Uttarakhand' },
    { date: 'Apr 2019 - Mar 2020', title: 'Matriculation (71%)', subtitle: 'D.A.V Public School Kotdwar, Uttarakhand' }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionTitle title="Education" subtitle="My Academic Background" />
        <div className={styles.timeline}>
          {education.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={styles.timelineItem}
            >
              <span className={styles.date}>{item.date}</span>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
