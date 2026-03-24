'use client';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import SkillBadge from '@/components/SkillBadge';
import styles from './Skills.module.scss';
import React from 'react';

export default function Skills() {
  const skillCategories = [
    { title: 'Languages', skills: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'PHP'] },
    { title: 'Frameworks', skills: ['HTML', 'CSS', 'NodeJS', 'React JS'] },
    { title: 'Tools & Platforms', skills: ['MySQL', 'MongoDB'] },
    { title: 'Soft Skills', skills: ['Work Ethic', 'Reliable', 'Adaptive'] }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle title="My Skills" subtitle="What I Bring to the Table" />
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={styles.skillCategory}
            >
              <h3>{category.title}</h3>
              <div className={styles.skillTags}>
                {category.skills.map(skill => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
