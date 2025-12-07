import React, { useState } from 'react'
import styles from './ProductCard.module.css'
import type { Product } from '../../types'


type Props = {
  product: Product
  onOrderClick?: () => void
}

const ProductCard: React.FC<Props> = ({ product, onOrderClick }) => {
  const [qty, setQty] = useState(0)

  const inc = () => setQty(q => q + 1)
  const dec = () => setQty(q => Math.max(0, q - 1))

  return (
    <div className={styles.productCard}>
      <img src={product.img} alt={product.title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span className={styles.price}>{product.price} ₽/шт.</span>

        {qty === 0 ? (
          <button className={styles.btn} onClick={onOrderClick ?? (() => setQty(1))}>Заказать</button>
        ) : (
          <div className={styles.counter}>
            <button onClick={dec} className={styles.counterBtn}>-</button>
            <div className={styles.qty}>{qty}</div>
            <button onClick={inc} className={styles.counterBtn}>+</button>
            <div className={styles.total}>Итого: {qty * product.price} ₽</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
