import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';

const ProductForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map((size) => (
            <li key={size.name}>
              <button
                type='button'
                className={clsx(
                  size.name === props.currentSize.name && styles.active
                )}
                onClick={() =>
                  props.setCurrentSize({
                    name: size.name,
                    additionalPrice: size.additionalPrice,
                  })
                }
              >
                {size.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map((color) => (
            <li key={color}>
              <button
                type='button'
                className={clsx(
                  styles['color' + props.preparedColorName(color)],
                  color === props.currentColor && styles.active
                )}
                onClick={() => props.setCurrentColor(color)}
              />
            </li>
          ))}
        </ul>
      </div>
      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

export default ProductForm;
