import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { airServiceFactory } from "../../services/airService";

export const Edit = ({
  onServiceEditSubmit,
}) => {
  const {serviceId} = useParams();
  const airService = useService(airServiceFactory);
  const { values, changeHandler, onSubmit, changeValues} = useForm({
      _id: '',
      title:'',
      category:'',
      width:'',
      height:'',
      length:'',
      imageUrl: '',
      summary: '',

  },onServiceEditSubmit );

  useEffect (() => {
    airService.getOne(serviceId)
    .then(result => {
      changeValues(result);
    });
  }, [serviceId]);


    return (
      <section id="edit-page" className="auth">
          <form id="edit" method="post" onSubmit={onSubmit}>
            <div className="container">
            <h1>Edit Service Request</h1>
                  <label htmlFor="leg-title">Name air conditioner:</label>
                   <select id="title" name="title" value={values.title} onChange={changeHandler}>
                           <option value="Gree">Gree</option>
                           <option value="Panasonic">Panasonic</option>
                           <option value="Mitsubishi">Mitsubishi</option>
                           <option value="Lg">LG</option>
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
                      <input type="number" id="width" name="width" value={values.width} onChange={changeHandler} />

                      <label htmlFor="height">Higth:</label>
                      <input type="number" id="height" name="height" value={values.height} onChange={changeHandler}  />

                      <label htmlFor="lenght">Length:</label>
                      <input type="number" id="length" name="length" value={values.length} onChange={changeHandler} />
                    </div>

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler}
                      type="text"
                      id="imageUrl"
                      name="imageUrl"
                    />

                    <label htmlFor="summary">Note:</label>
                    <textarea value={values.summary} onChange={changeHandler} name="summary" id="summary" defaulValue={""} />

                    <input className="btn submit" type="submit" value="Edit Service" />
            </div>
          </form>
      </section>


    );
};


//   <section id="edit-page" className="auth">
//   <form id="edit">
//     <div className="container">
//       <h1>Edit Game</h1>
//       <label htmlFor="leg-title">Legendary title:</label>
//       <input type="text" id="title" name="title" defaultValue="" />
//       <label htmlFor="category">Category:</label>
//       <input type="text" id="category" name="category" defaultValue="" />
//       <label htmlFor="levels">MaxLevel:</label>
//       <input
//         type="number"
//         id="maxLevel"
//         name="maxLevel"
//         min={1}
//         defaultValue=""
//       />
//       <label htmlFor="game-img">Image:</label>
//       <input type="text" id="imageUrl" name="imageUrl" defaultValue="" />
//       <label htmlFor="summary">Summary:</label>
//       <textarea name="summary" id="summary" defaultValue={""} />
//       <input className="btn submit" type="submit" defaultValue="Edit Game" />
//     </div>
//   </form>
// </section>