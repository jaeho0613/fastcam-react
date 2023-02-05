/**
 * @description
 * @author
 * @since 2023-02-5, 일, 18:0
 */
import {useForm} from "react-hook-form";
import {useState} from "react";

interface FormValue {
  name: string;
  password: number;
}

function HookUseForm() {
  const {handleSubmit, register} = useForm<FormValue>();
  const [result, setResult] = useState('')

  const onSubmit = (data: FormValue) => setResult(JSON.stringify(data));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type={'text'} placeholder={"User name"} {...register('name')}/>
        <input type={'password'} placeholder={'password'} {...register('password')}/>
        <input type={'submit'}/>
        <p>{result}</p>
      </form>
    </>
  )
}

export default HookUseForm;