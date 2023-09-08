import { useEffect, useState } from "react";
import { useRut } from "./useRut";

export const useForm = ( initialForm = {}) => {

  console.log('useForm');
  const [formState, setFormState] = useState( initialForm )

  const {onTestRut} = useRut(formState, setFormState);

  
  const onResetForm = () => {
    setFormState( initialForm );
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    if ( name === 'rut' && value.length >= 13 ) return;
    
    setFormState({
      ...formState,
      [ name ]: value,
    });
  }

  

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onTestRut,
  }
  
}
