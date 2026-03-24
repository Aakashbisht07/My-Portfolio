'use client';
import { motion } from 'framer-motion';
import styles from './SkillBadge.module.scss';

export default function SkillBadge({ skill }) {
  return (
    <motion.div
      whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
      className={styles.badge}
    >
      {skill}
    </motion.div>
  );
}
