import React from 'react';
import { createPortal } from 'react-dom';
import { PropsWithChildren } from 'react';

type ModalProps = {
  closeModal?: () => void;
  children: React.ReactNode;
};

export const ModalContainer = ({ children }: PropsWithChildren<ModalProps>) => {
  return createPortal(<>{children}</>, document.getElementById('modal') as HTMLElement);
};
