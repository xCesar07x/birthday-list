import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

// {
//   "email": "john@gmail.com",
//   "password": "john1234",
//   "first_name": "John",
//   "last_name": "Doe",
//   "birthday": "1993-10-10"
// }

const CarsForm = ({getCars, carSelected, selectCar}) => {

  const { handleSubmit, register, reset } = useForm();
  const emptyCar = {first_name: "", last_name: "", email: "", password: "", birthday: ""}

  useEffect(() => {
    if(carSelected !== null){
      reset(carSelected)
    }else{
      reset(emptyCar);
    }
     
  },[ carSelected ])

  const submit = (data) => {
    console.log(data);
    // axios.post('https://users-crud.academlo.tech/users/', data)
    // .then(() => getCars());

    if(carSelected){
      axios.put(`https://users-crud.academlo.tech/users/${carSelected.id}/`, data)
      .then(() => {
        getCars()
        selectCar(null)
      });
    }else{
      axios.post('https://users-crud.academlo.tech/users/', data)
      .then(() => {
        getCars()
        reset(emptyCar);
      })
    }
  };

  return (
    <form className="form"
      onSubmit={handleSubmit(submit)}>
        <h1>New User</h1>
      <div className="input-container">
        <label className="label-item" htmlFor="first_name">
         <svg className="svg-user" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/> </g> </svg>
          </label> {""}
        <input className="first-last" placeholder="firts name" type="text" id="first_name" {...register("first_name")} required/>


        <label className="label-item" htmlFor="last_name" >  </label>{""}
        <input  className="first-last" placeholder="last name" type="text" id="last_name" {...register("last_name")} required/>
        
      </div>
      <div className="input-container">
      
        
      </div>
      <div className="input-container">
        <label className="label-item" htmlFor="email">
        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-envelope-fill" viewBox="0 0 16 16"> <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/> </svg>
          </label> {""}
        <input className="input-email" placeholder="email" type="text" id="email" {...register("email")} required/>
      </div>
      <div className="input-container">
        <label className="label-item" htmlFor="password">
         <svg className="svg-lock" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-7 7.732V18h2v-2.268a2 2 0 1 0-2 0zM16 8V7a4 4 0 1 0-8 0v1h8z"/> </g> </svg>
          </label> {""}
        <input className="input-password" placeholder="password" type="password" id="password" {...register("password")} required/>
      </div>
      <div className="input-container" id="input-upload">
        <label className="label-item" htmlFor="birthday">
        <svg className="svg-cake" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 0 1 2.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.36a4.025 4.025 0 0 1-.972-2.182l-.022-.253L2 14v-1a3 3 0 0 1 2.824-2.995L5 10l1-.001V6h2zm11 6H5a1 1 0 0 0-.993.883L4 13v.971l.003.147A2 2 0 0 0 6 16a1.999 1.999 0 0 0 1.98-1.7l.015-.153.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134.004.147a2 2 0 0 0 3.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.012.282a2 2 0 0 0 3.99 0L20 14v-1a1 1 0 0 0-.883-.993L19 12zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 0 1-2.898-.776C5.85 2.002 7 2.5 7 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C10.85 2.002 12 2.5 12 1zm5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C15.85 2.002 17 2.5 17 1z"/> </g> </svg>
        </label> {""}
        <input className="input-birthday" type="date"  id="birthday" {...register("birthday")} required/>

        
      </div>
      <div className="conteiner-upload">
      <button className="upload-button">Upload</button>
      </div>
    </form>
  );
};

export default CarsForm;