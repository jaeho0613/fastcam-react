/**
 * @description
 * @author
 * @since 2023-02-5, 일, 18:17
 */
import {useForm} from "react-hook-form";
import {useState} from "react";

interface FormValue {
  age: number
}

function HookFormValidation() {
  const {register, handleSubmit, formState: {errors}} = useForm<FormValue>();
  const [result, setResult] = useState('');

  const onSubmit = (data: FormValue) => {
    setResult(JSON.stringify(data));
  }

  return (
    <>
      <h4>Hook Form 벨리데이션 처리</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type={'number'}
          placeholder={'Age'}
          {...register('age', {required: true, min: 17, max:40})}
        />
        {
          errors.age?.type === 'required' && (
            <span>Age is Required</span>
          )
        }
        {
          errors.age?.type === 'min' && (
            <span>Age is Min 17</span>
          )
        }
        {
          errors.age?.type === 'max' && (
            <span>Age is Max 40</span>
          )
        }
        <input type={'submit'}/>
        <p>{result}</p>
      </form>
    </>
  )
}

export default HookFormValidation;
