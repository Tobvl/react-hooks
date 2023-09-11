import { useCounter, useFetch } from '../hooks'
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

  // Si la data tiene un valor, entonces extrae el primer elemento del arreglo
  // el !undefined es true y !!undefined es falso
  // si !!data es true, la desestructura, sino, no hace nada
  const { author, quote } = !!data && data[0];
  
  return (
    
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />
      
      {
        isLoading
          ? <LoadingQuote/> 
          : <Quote quote={quote} author={author}/>
      }
      
      <button 
        className="btn btn-primary" 
        disabled = { isLoading }
        onClick={() => increment()}>
        Next Quote
      </button>
      {counter}
    </>

  )
}
