import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useForm, Controller} from "react-hook-form";
import {Input} from "@mui/material";

interface Form {
  age: number;
}

function App() {
  const {handleSubmit, control, formState: {errors}} = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: Form): void=> {
    setResult(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, errors)}>
      <div className="container">
        <Controller
          name='age'
          control={control}
          defaultValue={}

        />
      </div>
    </form>
  );
}

export default App;
