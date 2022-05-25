import { useCustomFormik } from "src/components/hooks/useCustomFormik";
import { useRouter } from "src/components/hooks/useRouter";

import AuthLink from "src/components/shared/crossed/AuthLink";
import AuthForm from "src/components/shared/crossed/AuthForm";

import MailIcon from "src/components/shared/icons/MailIcon";
import Button   from "src/components/shared/base/Button";
import Input    from "src/components/shared/base/Input";

import styles from './styles.module.scss';

const Recover = () => {
  const { gotoLogin, gotoHome } = useRouter();
  const formik = useCustomFormik({ email: '' }, () => {});

  return (
    <AuthForm 
      title="Recuperar cuenta"
      description="Por favor ingresa tu correo para continuar"
      onSubmit={formik.handleSubmit}
      className={styles['recover-form']}
    >
      <Input 
        name="email" 
        Icon={<MailIcon />}
        label="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="example@email.com"
        className={styles['recover-form__input']}
      />
      <Button 
        text='Continuar'
        onClick={() => {}} 
        className={styles['recover-form__button']}
      />
      <AuthLink
        normalText={`¿Recordaste tu contraseña? `}
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

export default Recover;