import PropTypes from 'prop-types';
import { classNames } from 'src/components/utils/classNames';
import styles from './styles.module.scss';

const AuthForm = ( props ) => {
  const { title, description, children, onSubmit, className } = props; 

  return (
    <div className={
      classNames({ 
        [styles['auth-form']]: true,
        [className]: !!className
      })
    }>
      <h1 className={styles['auth-form__title']}>{ title }</h1>
      <h3 className={styles['auth-form__description']}>{ description }</h3>
      <form
        onSubmit={onSubmit} 
        className={styles['auth-form__content']}
      >{ children }</form>
    </div>
  )
}

AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default AuthForm;