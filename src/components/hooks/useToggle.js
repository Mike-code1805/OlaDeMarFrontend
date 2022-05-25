import { useCallback, useState } from 'react';

export const useToggle = (state = false) => {
  const [open, setOpen] = useState(state);

  const handleOpen = useCallback(() => { setOpen(true) }, [])
  const handleClose = useCallback(() => { setOpen(false) }, [])
  const handleToggle = useCallback(() => { setOpen(!open) }, [open])
  
  return { open, handleOpen, handleToggle, handleClose }
} 