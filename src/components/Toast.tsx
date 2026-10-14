import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-[#2d2b52] px-4 py-2.5 text-xs font-semibold text-white shadow-xl animate-bounce-once">
      <Check className="h-4 w-4 text-[#25D366]" />
      <span>{message}</span>
    </div>
  );
};
