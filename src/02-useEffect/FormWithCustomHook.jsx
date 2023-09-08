// import { useEffect } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

  const { onResetForm, onInputChange, onTestRut, username, email, password, rut } = useForm({
    username: 'Tbvl',
    rut: '20.848.321-8',
    email: 'cristobal@tbvl.cl',
    password: ''
  });
  // lo de abajo se reemplaza por el retorno del spread del formulario en el hook
  // const { username, email, password } = formState;

  return (
    <>
    
      <h1>Formulario con Custom Hook</h1>
      <hr />

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

      <input 
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value= { password }
        onChange = { onInputChange } />

      <button onClick= { onResetForm } className="btn btn-primary mt-3">Reset</button>
      <button onClick= { onTestRut } className="btn btn-primary mt-3">Formatear Rut</button>

      
      {
        username === 'Tbvl2' && <Message/>
      }
    </>
  )
}
