import React, {createContext, useState} from 'react';

export const ModalContext = createContext([false, () => {
}]);

function ModalProvider({children}) {
  const [show, setShow] = useState(false);

  return (
    <ModalContext.Provider value={[show, setShow]}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;