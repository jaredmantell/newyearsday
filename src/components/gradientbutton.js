import React from 'react';
import styles from './GradientButton.module.css';

const GradientButton = ({ onClick, children, className }) => {
  return (
    <a className={styles[className]} href="#" data-toggle="audio" onClick={onClick}>{children}</a>
  );
};

export default GradientButton;