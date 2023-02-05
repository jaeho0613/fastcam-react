import {useEffect, useState} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@mui/material";

/**
 * @description
 * @author
 * @since 2023-02-5, 일, 16:58
 */
interface Form {
  age: number;
}

function DefaultUseHookForm() {

  const {handleSubmit, control, formState: {errors}} = useForm<Form>();
  const [result, setResult] = useState<{ ageValue: number }>({ageValue: 0});

  const onSubmit: SubmitHandler<Form> = (data: Form) => {
    setResult(prevState => {
      return {...prevState, ageValue: data.age};
    });

    console.log("set Update Value");
    console.log(result);
  }

  useEffect(() => {
    test();
  }, [result])

  const test = () => {
    console.log("TEST Method");
    console.log(result);
  }

  return (
    <>
      <h4>00-01. 기본 react hook form</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <span>result: {result.ageValue} {typeof result.ageValue}</span>
          <br/>
          <Controller
            control={control}
            name={'age'}
            defaultValue={result.ageValue}
            rules={{required: true, min: 17, max: 44}}
            render={({field}) => <Input type={'number'} {...field}/>}
          />
          {
            errors.age?.type === 'required' && <span>Age is Required</span>
          }
          {
            errors.age?.type === 'min' && <span>Age is Min 17</span>
          }
          {
            errors.age?.type === 'max' && <span>Age is Max 44</span>
          }
        </div>
        <input type={'submit'}/>
      </form>
    </>
  )
}

export default DefaultUseHookForm;