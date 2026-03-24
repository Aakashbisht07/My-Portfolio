'use client';
import styles from './Footer.module.scss';
import React from 'react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Aakash Bisht. All rights reserved.</p>
    </footer>
  );
}
