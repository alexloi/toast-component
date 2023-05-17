import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [notifications, setNotifications] = React.useState([]);
  
  const removeNotifications = (removeId) => {
    const newNotifications = notifications.filter( ({id}) => (id !== removeId) );
    setNotifications(newNotifications);
  };

  const addNotifications = ({variant, message}) => {
    const newNotifications = [ 
      ...notifications, 
      { 
        id: crypto.randomUUID(),
        variant, 
        message 
      } 
    ];
    setNotifications(newNotifications);
  }

  const clearNotifications = () => {
    setNotifications([]);
  }
  
  return (
    <ToastContext.Provider value={{
      notifications,
      addNotifications,
      removeNotifications,
      clearNotifications
    }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;