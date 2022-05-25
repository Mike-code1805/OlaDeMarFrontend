import PropTypes from 'prop-types';
import { useToggle } from 'src/components/hooks/useToggle';
import { classNames } from 'src/components/utils/classNames';
import VisibleIcon    from 'src/components/shared/icons/VisibleIcon';
import VisibleOffIcon from 'src/components/shared/icons/VisibleOffIcon';
import styles from './styles.module.scss';

const Input = ( props ) => {
  const { name, Icon, type, label, value, placeholder, onChange, className } = props;
  const { open, handleToggle } = useToggle();

  return (
    <div 
      className={classNames({ 
        [styles['input']]: true,
        [className]: !!className
      })}
    >
      <div className={styles['input__icon']}>{ Icon }</div>
      <div className={styles['input__content']}>
        <label 
          className={styles['input__label']}
        >{ label }</label>
        <input 
          className={styles['input__value']}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
          value={value}
          name={name}
          type={
            type === 'password' 
              ? open 
                  ? 'text'
                  : 'password'
              : type
          }
        />
        { type === 'password' && (
          <button 
            onClick={handleToggle}
            className={styles['input__toggle']}
          >{ open ? <VisibleOffIcon /> : <VisibleIcon /> }</button>
        )}
      </div>
    </div>
  )
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  Icon: PropTypes.node.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input;