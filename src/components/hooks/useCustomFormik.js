import { useState } from "react";
import { useFormik } from "formik";
import { validator } from "src/components/utils/validators";
import * as Yup from 'yup';

const getValidationSchema = (keys = []) => {
  return keys.reduce((schema, key) => {
    schema[key] = validator[key];
    return schema;
  }, {});
}


export const useCustomFormik = (
  values = {}, 
  callback = async () => {}
) => {
  const [errors, setErrors] = useState({});
  const keys = Object.keys(values);

  const formik = useFormik({
    initialValues: values,
    validationSchema: Yup.object(getValidationSchema(keys)),
    onSubmit: async (args) => {
      const { data, errors } = await callback(args);
      setErrors( errors );
      console.log(data, errors);
    }
  })

  const handleChange = (e) => {
    formik.handleChange (e);
    errors[e.target.name] = '';
  }

  const customFormik = {}
  customFormik.values = formik.values;
  customFormik.handleSubmit = formik.handleSubmit;
  customFormik.handleChange = handleChange;
  customFormik.errors = keys.reduce((customErrors, key) => {
    customErrors[key] = formik.errors[key] || errors[key];
    return customErrors;
  }, {})

  return customFormik;
}