import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize
        key={props.currentSize}
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor
        key={props.currentColor}
        colors={props.colors}
        preparedColorName={props.preparedColorName}
        setCurrentColor={props.setCurrentColor}
        currentColor={props.currentColor}
      />
      <Button className={styles.button} key={props.basePrice}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.object.isRequired,
  preparedColorName: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default ProductForm;
