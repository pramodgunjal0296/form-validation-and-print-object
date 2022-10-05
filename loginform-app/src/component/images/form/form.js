import React from "react";
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import './form.css'



const FormApp = () => {
 

  const Schema = yup.object().shape({
    fullName: yup.string().required("Your FullName is Required!"),
    password: yup.string().min(4).max(20).required(),
  });
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(Schema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
  <>
  
  <div className="form-design">
    <form onSubmit={handleSubmit(onSubmit)}>
         
        <h1>Welcome</h1>
        <h4 style={{color:'gray'}}>Log in to your account to continue </h4>
        
      <input
        type="text"
       
        placeholder="awesome@user.com"
        {...register("fullName")}
      /> 
      <p>{errors.fullName?.message}</p>
      
      <input
        type="password"
        placeholder="........"
        {...register("password")}
      />
       <p >{errors.password?.message}</p>

       <a style={{marginLeft:200}} href="#"> Forgot your password</a>
       <br/>
      

      <button type="Submit">Login</button>
      <h5 style={{color:'white', marginLeft:200}}>Didn't have an account ? Signup ?</h5>
    </form>
    </div>
    </>
  );
};

export default FormApp;
