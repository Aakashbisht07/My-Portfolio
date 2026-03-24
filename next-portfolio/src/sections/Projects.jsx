'use client';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/SectionTitle';
import styles from './Projects.module.scss';
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Zomato Restaurant Data Analysis & Prediction',
      date: 'Oct 2025',
      desc: 'Analyzed a dataset of 10,000+ restaurants, handling missing values via imputation. Conducted EDA and built a predictive ML model (78% accuracy) for customer ratings and behavior forecasting.',
      tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/Aakashbisht07/Zomato-Data-Analysis'
    },
    {
      title: 'Algo Visualizer',
      date: 'Aug 2025',
      desc: 'A tool created to visually demonstrate algorithm logic and step-by-step execution. Features include animations for sorting and traversal algorithms such as Merge Sort, Quick Sort, Bubble Sort, BFS, and DFS.',
      tags: ['React.js', 'JavaScript', 'HTML', 'Tailwind CSS'],
      github: 'https://github.com/Aakashbisht07/Algo-Visualizer'
    },
    {
      title: 'Fit Flow',
      date: 'Apr 2025',
      desc: 'A fitness platform for accessing workout plans and tracking data. Includes user authentication, secure data storage with MySQL, and dynamic workout generation based on user preferences.',
      tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
      github: 'https://github.com/Aakashbisht07/Fit-Flow'
    },
    {
      title: 'Power BI Sales Dashboard',
      date: 'Dec 2024',
      desc: 'An interactive sales dashboard built with Power BI. Features include dynamic filtering, trend analysis, and performance tracking across various sales metrics.',
      tags: ['Power BI', 'DAX', 'Data Visualization', 'Excel'],
      github: 'https://github.com/Aakashbisht07/Power-BI---Sales-Dashboard'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle title="My Projects" subtitle="Recent Work" />
        
        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className={styles.projectCard}
            >
              <h3>{project.title}</h3>
              <p className={styles.date}>{project.date}</p>
              <p className={styles.desc}>{project.desc}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.linkBtn}
                >
                  <Github size={18} /> Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
