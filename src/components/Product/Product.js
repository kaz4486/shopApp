import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);
  //const [additionalPrice, setAdditionalPrice] = useState('');

  const preparedColorName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  /*const finalPrice = (basic, additional) => {
    return basic + additional;
  };*/

  useMemo(() => {
    return setCurrentPrice(props.basePrice + currentSize.additionalPrice);
  }, [props.basePrice, currentSize.additionalPrice]);

  //(props.basePrice, currentSize.additionalPrice)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Summary
        =======
        name: ${props.title}
        price: ${currentPrice}
        size: ${currentSize.name} 
        color: ${currentColor}`
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage key={props.name} {...props} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: ${currentPrice}$</span>
        </header>
        <ProductForm
          key={props.title}
          handleSubmit={handleSubmit}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          preparedColorName={preparedColorName}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          colors={props.colors}
          sizes={props.sizes}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
