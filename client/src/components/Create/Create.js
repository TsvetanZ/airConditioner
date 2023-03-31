import { useState } from "react"

export const Create = ({
  onCreateServiceSubmit
}) => {
  const [values, setValues] = useState({
    title: '',
    category:'',
    width: '',
    height: '',
    length: '',
    imageUrl: '',
    summary: '',
  });

  const onChangeHandler = (e) => {
      setValues(state => ({...state, [e.target.name]: e.target.value}))
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateServiceSubmit(values);

  }
  
    return (
     
  <section id="create-page" className="auth">
  <form id="create" onSubmit={onSubmit}>
    <div className="container">
      <h1>Create Service</h1>

      <label htmlFor="leg-title">Name air conditioner:</label>
      <select value={values.title} onChange={onChangeHandler} id="title" name="title">
              <option value="gree">Gree</option>
              <option value="panasonic">Panasonic</option>
              <option value="mitsubishi">Mitsubishi</option>
              <option value="lg">LG</option>
              <option value="daikin">Daikin</option>
      </select> 

      <label htmlFor="category">Category:</label>
      <select value={values.category} onChange={onChangeHandler} id="category" name="category"  >
      <option value="gree">Gree</option>
              <option value="wall-mounted">Wall mounted air conditioner</option>
              <option value="floor">Floor air conditioner</option>
              <option value="ceiling">Ceiling air conditioner</option>
              <option value="multipleSplit">Multiple Split Systems</option>
      </select>
        <div className="roomSize">
          <h6>Room size</h6>
          <p>Enter the values in meters</p>
          <label htmlFor="width">Width:</label>
          <input value={values.width} onChange={onChangeHandler} type="number" id="width" name="width" placeholder={4} />

          <label htmlFor="height">Higth:</label>
          <input value={values.height} onChange={onChangeHandler} type="number" id="height" name="height" placeholder={2.8} />

          <label htmlFor="lenght">Length:</label>
          <input value={values.length} onChange={onChangeHandler} type="number" id="length" name="length" placeholder={2.8} />

        </div>
         
      <label htmlFor="game-img">Image:</label>
      <input value={values.imageUrl} onChange={onChangeHandler}
        type="text"
        id="imageUrl"
        name="imageUrl"
        placeholder="Upload a photo..."
      />
      <label htmlFor="summary">Address:</label>
      <textarea value={values.summary} onChange={onChangeHandler} name="summary" id="summary" defaultValue={""} />
      <input 
        className="btn submit"
        type="submit"
        defaultValue="Create Game"
      />    </div>
  </form>
</section>   
    )
}