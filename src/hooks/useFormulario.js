import { useState } from "react";

export const useFormulario = (initState = {}) => {
  const [inputs, setInputs] = useState(initState);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setInputs({ ...inputs, [name]: type === "checkbox" ? checked : value });
  };

  const resetInput = () => {
    setInputs(initState);
  };

  return [inputs, handleChange, resetInput];
};
