import { useCustomFormik } from "src/components/hooks/useCustomFormik";
import { useRouter } from "src/components/hooks/useRouter";

import AuthLink from "src/components/shared/crossed/AuthLink";
import AuthForm from "src/components/shared/crossed/AuthForm";
import MailIcon from "src/components/shared/icons/MailIcon";
import KeyIcon  from "src/components/shared/icons/KeyIcon";
import Button   from "src/components/shared/base/Button";
import Input    from "src/components/shared/base/Input";

import styles from './styles.module.scss';
import { classNames } from "src/components/utils/classNames";

const Login = () => {
  const { gotoRegister, gotoRecover, gotoHome } = useRouter();
  const formik = useCustomFormik({ email: '', password: '' }, () => {});

  return (
    <AuthForm 
      title="¡Bienvenido!"
      description="Ingresa a tu cuenta para poder continuar"
      onSubmit={formik.handleSubmit}
      className={styles['login-form']}
    >
      <Input 
        name="email" 
        Icon={<MailIcon />}
        label="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="example@email.com"
        className={styles['login-form__input']}
      />
      <Input 
        type='password'
        name="password" 
        Icon={<KeyIcon />}
        label="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="••••••••"
        className={styles['login-form__input']}
      />
      <Button 
        text='Ingresar' 
        variant="light" 
        onClick={() => {}} 
        className={styles['login-form__button']}
      />
      <Button 
        text='Recuperar cuenta' 
        variant="link" 
        onClick={gotoRecover}
        className={styles['login-form__button']}
      />
      <Button 
        text='Crear una cuenta nueva' 
        onClick={gotoRegister}
        className={classNames({
          [styles['login-form__button']]: true,
          [styles['login-form__button--last']]: true
        })}
      />
      <AuthLink
        normalText={`Regresar al `}
        linkText='Inicio'
        onClick={gotoHome}
      />
    </AuthForm>
  )
}

export default Login;