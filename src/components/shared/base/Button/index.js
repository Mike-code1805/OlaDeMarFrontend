import PropTypes from 'prop-types';
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const Button = ( props ) => {
  const { text, onClick, type, variant, className } = props;

  return (
    <button
      onClick={onClick}
      className={classNames({ 
        [styles['button']]: true,
        [styles[`button--${variant}`]]: !!variant,
        [className]: !!className
      })}
      type={type}
    >{ text }</button>
  )
}

Button.defaultProps = {
  type: 'button',
  variant: '',
  className: '',
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
}

export default Button;