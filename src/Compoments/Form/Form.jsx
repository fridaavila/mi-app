import { useState, setUserData } from "react";

const Form = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, SetErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // name ---> min 5 caracteres
  //email ---> contenga un @
  // password ---> que no contenga espacios en blanco

  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDACIONES
    if (userData.name.length < 5) {
      setError(true);
      SetErrorMessage("el nombre debe tener minimo 5 caracteres");
      return;
    }

    const incluye = userData.email.includes("@");
    if (!incluye) {
      setError(true);
      SetErrorMessage("El email debe incluir un @");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;
    if (!passwordIsValid || userData.password < 8) {
      setError(true);
      SetErrorMessage(
        "la contrasena no debe tener espacios y minimo 8 caracteres"
      );
      return;
    }

    // INSTRUCCION
    console.log(userData);
  };

  return (
    <div>
      <h1>Este es el formulario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          placeholder="Ingrese su password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default Form;
