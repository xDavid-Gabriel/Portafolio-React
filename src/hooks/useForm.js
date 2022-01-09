import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [erros, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(erros).length === 0) {
      // alert("Enviando Formulario");
      navigate("/gracias");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/davidbetalleluz31@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
        });
    } else {
      return;
    }
  };

  return {
    form,
    erros,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
