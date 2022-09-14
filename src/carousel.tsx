import React, { useState } from 'react'
import ArrowLeft from './assets/arrow_left.svg'
import ArrowRight from './assets/arrow_right.svg'

interface Product {
  name: string;
  price: string;
}

const Carousel = () => {
  const products: Product[] = [
    { name: 'Dress 1', price: '$800' },
    { name: 'Dress 2', price: '$800' },
    { name: 'Dress 3', price: '$800' },
    { name: 'Dress 4', price: '$800' },
    { name: 'Dress 5', price: '$800' },
    { name: 'Dress 6', price: '$800' },
    { name: 'Dress 7', price: '$800' },
    { name: 'Dress 8', price: '$800' },
  ]
  const [k, setK] = useState(0);

  const onClickPrev = () => {
    if (k === 0) setK(-4); // when first element(Dress 1) takes the first place in carousel
    else setK(k + 1);
  }

  const onClickNext = () => {
    if (k === -4) setK(0); // when last element(Dress 8) takes the last place in carousel
    else setK(k - 1);
  }

  const listStyle = () => {
    return {
      transform: `translate(${216 * k}px, 0)`, // 216 = 200(width of product image) + 16(column gap)
      transitionProperty: 'transform',
      transitionTimingFunction: 'ease-in-out',
      transitionDuration: '0.5s'
    }
  }

  return (
    <div className='product_list_container'>
      <ArrowLeft onClick={onClickPrev} />
      <div className='product_list'>
        <div className='inner_list' style={listStyle()}>
          {products.map((p: Product, i: number) => (
            <div className='product' key={i}>
              <img src="https://www.johnnywas.com/media/catalog/product/cache/e827a3bf21814344a7ecf8de79d925ba/l/3/l30621-8_mti_6.jpg"
                width={200} alt="product image" />
              <span className='product_name'>{p.name}</span>
              <span className='product_price'>{p.price}</span>
            </div>
          ))}
        </div>
      </div>
      <ArrowRight onClick={onClickNext} />
    </div>
  )
}

export default Carousel;
