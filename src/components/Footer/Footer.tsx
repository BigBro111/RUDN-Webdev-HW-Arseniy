import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.links}>
        <a href="#" className={styles.link}>Согласие на обработку данных</a>
       
        <a href="#" className={styles.link}>Служба поддержки</a>
   
        <a href="#" className={styles.link}>Политика конфиденциальности</a>
      </div>
      <div className={styles.copyright}>
        © nazvaniesatta.ru, 2054 | Название компании или ИП ОГРН 0000000000000
      </div>
    </div>
  </footer>
);

export default Footer;