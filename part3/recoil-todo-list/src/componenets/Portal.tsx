import React, {ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface Props {
  selector?: string;
  children: ReactNode
}

const Portal: React.FC<Props> = ({children}) => {
  const rootElement = document.getElementById('#modal-root');

  return (
    <>
      {rootElement ? createPortal(children, rootElement) : children}
    </>
  )
}

export default Portal;