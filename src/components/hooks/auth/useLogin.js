import { useState } from "react";

export const useLogin = () => {

  const [loading, setLoading] = useState(false)

  const action = ( params ) => {
    try {
      return { 
        data: { user: true },
        errors: {}
      }
    } catch {
      return {
        data: null,
        errors: { 
          email: 'Email no válido',
          password: 'Password no válido'
        }
      }
    }
  }

  return [action, { loading }]
} 