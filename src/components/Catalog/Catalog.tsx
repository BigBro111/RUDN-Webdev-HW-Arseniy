import React from 'react'
import styles from './Catalog.module.css'
import ProductCard from '../ProductCard/ProductCard'
import type { Product } from '../../types'

import cake1 from '../../assets/img/cakes/cake1.jpg'
import cake2 from '../../assets/img/cakes/cake2.jpg'
import cake3 from '../../assets/img/cakes/cake3.jpg'
import cake4 from '../../assets/img/cakes/cake4.jpg'
import cake6 from '../../assets/img/cakes/cake6.jpg'
import cake9 from '../../assets/img/cakes/cake9.jpg'
import cake10 from '../../assets/img/cakes/cake10.jpg'
import cake11 from '../../assets/img/cakes/cake11.jpg'
import cake12 from '../../assets/img/cakes/cake12.jpg'

const products: Product[] = [
  { id: 'p1', title: 'Кремовый замок', description: 'Нежный крем любого цвета на выбор, ванильная основа', price: 150, img: cake10 },
  { id: 'p2', title: 'Малиновый рай', description: 'Воздушный крем, темная основа и ягода малины', price: 150, img: cake9 },
  { id: 'p3', title: 'Фейерверк', description: 'Разноцветный крем, с бисквитной основой', price: 150, img: cake6 },
  { id: 'p4', title: 'Шоколадный мир', description: 'Ореховая стружка, нежный крем и шоколадная основа', price: 150, img: cake12 },
  { id: 'p5', title: 'Слезы дракона', description: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, img: cake4 },
  { id: 'p6', title: 'Летняя фантазия', description: 'Украшения в форме сердец, для любимого человека', price: 150, img: cake3 },
  { id: 'p7', title: 'Мыс безумия', description: 'Разноцветная основа, стружка и нежный крем', price: 150, img: cake11 },
  { id: 'p8', title: 'Облачная сказка', description: 'Светлая основа, нежный крем со стружкой сверху', price: 150, img: cake2 },
  { id: 'p9', title: 'Темный рыцарь', description: 'Темная основа, нежный крем и вкусные шарики', price: 150, img: cake1 },
]

const Catalog: React.FC = () => {
  return (
    <section className={styles.catalogSection}>
      <div className={styles.container}>
        <h1 className={styles.catalogTitle}>Для любых событий и дорогих вам людей</h1>
        <div className={styles.catalogGrid}>
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Catalog
