import { useState, useCallback } from "react";

let toastTimeout: ReturnType<typeof setTimeout>;

export function useToast() {
  const [toast, setToast] = useState({ text: "", visible: false });

  const showToast = useCallback((text: string) => {
    setToast({ text, visible: true });
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => setToast({ text: "", visible: false }), 1800);
  }, []);

  return { toast, showToast };
}
