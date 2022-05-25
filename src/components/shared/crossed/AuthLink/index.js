import PropTypes from 'prop-types';
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const AuthLink = ( props ) => {
  const { normalText, linkText, onClick, className } = props; 

  return (
    <div className={
      classNames({ 
        [styles['auth-link']]: true,
        [className]: !!className
      })
    }>
      <span 
        className={styles['auth-link__text']}
      >{ normalText }</span>
      <button
        onClick={onClick}
        className={styles['auth-link__link']}
      >{ linkText }</button>
    </div>
  )
}

AuthLink.propTypes = {
  normalText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AuthLink;