import * as Yup from 'yup';

const email = 
  Yup
    .string()
    .email('Ingrese un correo válido.')
    .required('El correo no puede ser vacío')

const password = 
  Yup
    .string()
    .min(6, 'Debe tener mínimo 6 carácteres')
    .max(30, 'Debe tener máximo 30 carácteres')
    .required('El password no puede ser vacío')

const name = 
  Yup
    .string()
    .required('El nombre no puede ser vacío')

const lastname =  
  Yup
    .string()
    .required('El apellido no puede ser vacío')
  

export const validator = {
  email,
  password,
  name,
  lastname
}