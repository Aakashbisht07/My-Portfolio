'use client';
import { motion } from 'framer-motion';
import styles from './SectionTitle.module.scss';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className={styles.container}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.subtitle}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={styles.title}
      >
        {title}
      </motion.h2>
    </div>
  );
}
