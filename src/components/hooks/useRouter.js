import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


export const useRouter = () => {
  const navigate = useNavigate();

  const back  = useCallback(() => { navigate(-1) }, [navigate])

  const gotoHome         = useCallback(() => { navigate('/') }, [navigate])
  const gotoExplore      = useCallback(() => { navigate('/explore') }, [navigate])
  const gotoNew          = useCallback(() => { navigate('/news') }, [navigate])
  const gotoCheckOut     = useCallback(() => { navigate('/checkout ') }, [navigate])

  const gotoLogin     = useCallback(() => { navigate('/auth/login') }, [navigate])
  const gotoRecover   = useCallback(() => { navigate('/auth/recover') }, [navigate])
  const gotoRegister  = useCallback(() => { navigate('/auth/register') }, [navigate])

  return {
    back,

    gotoExplore,
    gotoCheckOut,
    gotoHome,
    gotoNew,
    gotoLogin,
    gotoRecover,
    gotoRegister,
  }
}