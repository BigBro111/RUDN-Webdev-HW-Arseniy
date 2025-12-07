import React from 'react'
import styles from './Gallery.module.css'

import gallery1 from '../../assets/img/gallery/gallery1.jpg'
import gallery2 from '../../assets/img/gallery/gallery2.jpg'
import gallery3 from '../../assets/img/gallery/gallery3.jpg'
import gallery4 from '../../assets/img/gallery/gallery4.jpg'
import gallery5 from '../../assets/img/gallery/gallery5.jpg'
import gallery6 from '../../assets/img/gallery/gallery6.jpg'
import gallery7 from '../../assets/img/gallery/gallery7.jpg'
import gallery8 from '../../assets/img/gallery/gallery8.jpg'
import gallery9 from '../../assets/img/gallery/gallery9.jpg'

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9
]

const Gallery: React.FC = () => {
  return (
    <section className={styles.gallerySection}>

        <div className={styles.galleryPromo}>
          <h2>Сделали более 3.000 заказов за 2 года</h2>
          <p>Посмотрите фото реальных заказов в нашем Instagram</p>
        </div>
        <div className={styles.galleryGrid}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Фото ${i + 1}`} />
          ))}
        </div>
  
    </section>
  )
}

export default Gallery
