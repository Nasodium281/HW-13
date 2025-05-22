import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  // นำค่าที่ได้จาก input มาเก็บใน state แล้วนำมาบวกกัน แสดงผลใน console
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [sum, setSum] = useState<number>(0);

  function onNum1Change(event){
    const value = +event.target.value;
    setNum1(value)
  }
  function onNum2Change(event){
    const value = +event.target.value;
    setNum2(value)
  }
  function onFormSubmit(event){
    event.preventDefault();
    const sum = num1 + num2;
    setSum(sum)
    console.log("Sum: ", sum);
  }
  return (
    <div>
        {sum}
      <form onSubmit={onFormSubmit}>
        
        <input type="text" placeholder="num1" onChange={onNum1Change}/>
        <input type="text" placeholder="num2" onChange={onNum2Change}/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;