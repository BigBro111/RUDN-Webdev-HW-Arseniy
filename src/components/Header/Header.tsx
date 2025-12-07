import React from 'react'
import styles from './Header.module.css'

import icon from "../../assets/icon.svg";
import vector from "../../assets/Vector.svg"

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>Сладкий сундук</div>
        <div className={styles.contacts}>
          <div className={styles.address}>
            <img src={icon} alt="" />
             <div className={styles.addressContainer}>

            <div className={styles.addressLine}>г. Санкт-Петербург,</div>
            <div className={styles.addressLine}>ул. Куйбышева 31</div>
             </div>

          </div>
          <div className={styles.contactInfo}>
             <div className={styles.address}>

              



             <img src={vector

             } alt="" />

              <div className={styles.addressContainer}>

            <div className={styles.phone}>8 (812) 844-95-49</div>
            <div className={styles.workingHours}>Ежедневно с 9:00 до 20:00</div>
              </div>
             </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
