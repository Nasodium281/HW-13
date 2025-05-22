import React from 'react'
import { useForm } from 'react-hook-form'

type RegisterFormDataType = {
    email : string;
    password : string;
}

const Form = () => {
    const {register,handleSubmit} = useForm<RegisterFormDataType>()
    function onSubmit(data: RegisterFormDataType){
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="email" {...register("email")}/>
            <input type="password" placeholder="password" {...register("password")}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form