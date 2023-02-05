/**
 * @description
 * @author
 * @since 2023-02-5, 일, 18:8
 */
import {useForm} from "react-hook-form";

interface FormValue {
  nickname: string;
}
function HookUseForm2() {
  const {watch, register} = useForm<FormValue>();

  const watchNickName = watch('nickname', 'Easton');

  return (
    <>
      <h4>01-02: 심화 useForm 사용법</h4>
      <form>
        <input type={'text'} placeholder={'Nick Name'} {...register('nickname')} />
        <p>{watchNickName}</p>
      </form>
    </>
  )
}

export default HookUseForm2;