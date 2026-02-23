import React from "react";

interface ToastProps {
  text: string;
  visible: boolean;
}

const IruToast: React.FC<ToastProps> = ({ text, visible }) => {
  if (!visible) return null;
  return (
    <div className="iru-toast show">{text}</div>
  );
};

export default IruToast;
