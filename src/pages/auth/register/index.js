import { useCustomFormik } from "src/components/hooks/useCustomFormik";

import AuthLink from "src/components/shared/crossed/AuthLink";
import AuthForm from "src/components/shared/crossed/AuthForm";
import Button   from "src/components/shared/base/Button";
import Input    from "src/components/shared/base/Input";

import ProfileIcon  from "src/components/shared/icons/ProfileIcon";
import MailIcon     from "src/components/shared/icons/MailIcon";
import KeyIcon      from "src/components/shared/icons/KeyIcon";

import { useRouter } from "src/components/hooks/useRouter";

import styles from './styles.module.scss';

const Register = () => {
  const { gotoLogin, gotoHome } = useRouter();
  const formik = useCustomFormik({ email: '', password: '', name: '', lastname: '' }, () => {});

  return (
    <AuthForm 
      title="Crear una cuenta"
      description="Por favor crea una cuenta para usar nuestro servicio"
      onSubmit={formik.handleSubmit}
      className={styles['register-form']}
    >
      <Input 
        name="email" 
        Icon={<MailIcon />}
        label="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="example@email.com"
        className={styles['register-form__input']}
      />
      <Input 
        type='password'
        name="password" 
        Icon={<KeyIcon />}
        label="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="••••••••"
        className={styles['register-form__input']}
      />
      <Input 
        name="name" 
        Icon={<ProfileIcon />}
        label="Nombres"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="John"
        className={styles['register-form__input']}
      />
      <Input 
        name="lastname" 
        Icon={<ProfileIcon />}
        label="Apellidos"
        value={formik.values.lastname}
        onChange={formik.handleChange}
        placeholder="Doe"
        className={styles['register-form__input']}
      />
      <Button 
        text='Crear cuenta'
        onClick={() => {}} 
        className={styles['register-form__button']}
      />
      <AuthLink 
        normalText={`¿Ya tienes una cuenta? `}
        linkText='Ingresa aquí'
        onClick={gotoLogin}
      />
      <AuthLink
        normalText={`Regresar al `}
        linkText='Inicio'
        onClick={gotoHome}
      />
    </AuthForm>
  )
}

export default Register;