import clsx from 'clsx';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const OptionColor = (props) => {
  return (
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
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  preparedColorName: PropTypes.func.isRequired,
};

export default OptionColor;
