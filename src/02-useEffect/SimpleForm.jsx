import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Tbvl',
    email: 'cristobal@tbvl.cl',
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    
    setFormState({
      ...formState,
      [ name ]: value,
    }) 
  }

  // dependencias: [] cuando el componente se renderiza se llama el useEffect
  useEffect(() => {
    // console.log('useEffect called');
  }, []);

  useEffect(() => {
    // console.log('formState se cambió');
  }, [ formState ]);

  useEffect(() => {
    // console.log('email se cambió');
  }, [ email ]);

  
  
  return (
    <>
    
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange = { onInputChange } />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value= { email }
        onChange = { onInputChange } />

      {
        username === 'Tbvl2' && <Message/>
      }
    </>
  )
}
