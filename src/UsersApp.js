import React, { useState } from 'react';
import { ToastContext } from './components/ui/ToastContext';
import { AppRouter } from './router/AppRouter';

export const UsersApp = () => {

  const [toastIsOpen, setToastIsOpen] = useState(false);
  
  return (
    <ToastContext.Provider value={{toastIsOpen, setToastIsOpen}}>
      <AppRouter />
    </ToastContext.Provider>
  )
}
