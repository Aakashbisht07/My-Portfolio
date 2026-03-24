'use client';
import { motion } from 'framer-motion';
import styles from './Button.module.scss';
import Link from 'next/link';

export default function Button({ children, href, variant = 'primary', onClick, download, loading, disabled, type = 'button' }) {
  const content = (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      className={`${styles.btn} ${styles[variant]} ${loading ? styles.loading : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? (
        <span className={styles.spinner}></span>
      ) : children}
    </motion.button>
  );

  if (href) {
    if (download || href.startsWith('http')) {
      return <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" download={download}>{content}</a>;
    }
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
