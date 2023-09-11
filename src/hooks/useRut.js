import { useEffect } from "react";

export const useRut = ( formState, setFormState ) => {

  const rut = formState.rut;
  
  const rut_to_number = (rut) => {
    const rut_to_number = rut.replace(/[^kK\d]/g,'');
    return rut_to_number;
  };

  
  
  const onFormatRut = () => {
      
    
    if (rut_to_number(rut).length >= 8 && rut_to_number(rut).length <= 13 ) {
      
      if (rut_to_number(rut).length === 8){
        setFormState({
          ...formState,
          rut: `${rut_to_number(rut).slice(0,1)}.${rut_to_number(rut).slice(1,4)}.${rut_to_number(rut).slice(4,7)}-${rut_to_number(rut).slice(7)}`, 
        })
      
      // rut de 9 dígitos
      }else{
        setFormState({
          ...formState,
          rut: `${rut_to_number(rut).slice(0,2)}.${rut_to_number(rut).slice(2,5)}.${rut_to_number(rut).slice(5,8)}-${rut_to_number(rut).slice(8)}`, 
        })
      }
    }
  }

  const onRutChange = () => {
    // console.log('rut cambio (onRutChange)');
  }
  
  useEffect(() => {
    onRutChange();
    onFormatRut();
    // console.log('rut cambio (useEffect)');
  
  }, [rut]);


  return {
    rut,
    onFormatRut,
  }
}
