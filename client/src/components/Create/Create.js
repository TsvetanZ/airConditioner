//import { useState } from "react";

import { useAirServiceContext } from "../../contexts/AirServiceContext";
import { useForm } from "../../hooks/useForm";

export const Create = () => {
// export const Create = ({ onCreateServiceSubmit }) => {
  const { onCreateServiceSubmit } = useAirServiceContext();
  const {values, changeHandler, onSubmit} = useForm({
    title: '',
    category:'',
    width: '',
    height: '',
    length: '',
    imageUrl: '',
    summary: '',
  }, onCreateServiceSubmit);

  // const onChangeHandler = (e) => {
  //     setValues(state => ({...state, [e.target.name]: e.target.value}))
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   onCreateServiceSubmit(values);
  // }
  
    return (
     
  <section id="create-page" className="auth">
  <form id="create" method="POST" onSubmit={onSubmit}>
    <div className="container">
      <h1>Create Service</h1>

      <label htmlFor="leg-title">Name air conditioner:</label>
      <select value={values.title} onChange={changeHandler} id="title" name="title">
              <option value="Gree">Gree</option>
              <option value="Panasonic">Panasonic</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="LG">LG</option>
              <option value="Daikin">Daikin</option>
      </select> 

      <label htmlFor="category">Category:</label>
      <select value={values.category} onChange={changeHandler} id="category" name="category"  >
              <option value="Wall-mounted">Wall mounted air conditioner</option>
              <option value="Floor">Floor air conditioner</option>
              <option value="Ceiling">Ceiling air conditioner</option>
              <option value="Multiple Split Systems">Multiple Split Systems</option>
      </select>
        <div className="roomSize">
          <h3>Room size</h3>
          <p>Enter the values in meters</p>
          <label htmlFor="width">Width:</label>
          <input value={values.width} onChange={changeHandler} type="number" id="width" name="width" placeholder={4} />

          <label htmlFor="height">Higth:</label>
          <input value={values.height} onChange={changeHandler} type="number" id="height" name="height" placeholder={2.8} />

          <label htmlFor="lenght">Length:</label>
          <input value={values.length} onChange={changeHandler} type="number" id="length" name="length" placeholder={2.8} />

        </div>
         
      <label htmlFor="game-img">Image:</label>
      <input value={values.imageUrl} onChange={changeHandler}
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />
        {/* <div className="adress">
          <h4>Adresse</h4>
        <label htmlFor="leg-title">City/Towm:</label>
      <input type="text" id="title" name="city" defaultValue="" />
        </div> */}

      <label htmlFor="summary">Note:</label>
      <textarea value={values.summary} onChange={changeHandler} name="summary" id="summary" defaulValue={""} />


      <input className="btn submit" type="submit" value="Create Game"/>  
    </div>
  </form>
</section>   
    )
}