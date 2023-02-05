/**
 * @description
 * @author
 * @since 2023-02-5, 일, 17:36
 */
import {useForm, FormProvider, SubmitHandler, useFormContext} from "react-hook-form";
import {useState} from "react";


function NestedInput() {
  const {register} = useFormContext<DepthFormValue>();

  return (
    <input placeholder={'User name'} {...register('age')}/>
  )
}


interface DepthFormHookProps {}
interface DepthFormValue {
  age: number;
}
function DepthFormHook(props: DepthFormHookProps) {
  const methods = useForm<DepthFormValue>({
    defaultValues: {
      age: 0
    }
  });
  const [result, setResult] = useState('');

  const onSubmit = (data: DepthFormValue) => {
    setResult(JSON.stringify(data));
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => onSubmit(data))}>
        <NestedInput />
        <input type={'submit'} />
        <p>{result}</p>
      </form>
    </FormProvider>
  )
}

export default DepthFormHook;