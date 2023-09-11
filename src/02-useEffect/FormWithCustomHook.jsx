// import { useEffect } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

  const { formState, onResetForm, onInputChange, validateRut, username, email, rut } = useForm({
    username: 'test',
    rut: '12.123.123-1',
    email: 'email@test.cl',
    password: ''
  });

  const onValidateRut = (rut) => {
    if (validateRut(rut)){
      console.log('rut valido');
      return;
    }
    console.log('rut invalido');
  }
  // lo de abajo se reemplaza por el retorno del spread del formulario en el hook
  // const { username, email, password } = formState;

  return (
    <>
    
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <form>      
        <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange = { onInputChange } />

        <input 
          type="text"
          className="form-control mt-2"
          placeholder="12.345.678-9"
          name="rut"
          value={ rut }
          onChange = { onInputChange } />

        <input 
          type="email"
          className="form-control mt-2"
          placeholder="email@email.com"
          name="email"
          value= { email }
          onChange = { onInputChange } />

      </form>

      <button onClick= { onResetForm } className="btn btn-primary mt-3">Reset</button>
      <button onClick= { onValidateRut(formState.rut) } className="btn btn-primary mt-3">Validate RUT</button>

      
      {
        username === 'testuser2' && <Message/>
      }
    </>
  )
}
