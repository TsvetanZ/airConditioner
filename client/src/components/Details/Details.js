import {  useEffect, useReducer } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { airServiceFactory } from "../../services/airService";
import { useService } from "../../hooks/useService";
import * as commentService from "../../services/commentService";
// import { Comments } from "../Comments/Comments";
import { useAuthContext } from "../../contexts/AuthContext";
import { AddComment } from "./addComment/AddComment";
import { serviceReducer } from "../../reducers/serviceReducer";
import { useAirServiceContext } from "../../contexts/AirServiceContext";
import './Details.css';




export const Details = () => {
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  //const [username, setUsername] = useState("");
  //const [comment, setComment] = useState("");
  const { serviceId } = useParams(); //console.log('IDSER:',serviceId) work
  const { deleteAirService } = useAirServiceContext();//????????????????????
  
  const navigate = useNavigate();
  const [service, dispatch] = useReducer(serviceReducer, {}); // this change const [service, setServiceAsk] = useState({});
  const airService = useService(airServiceFactory);

  useEffect(() => {
    Promise.all ([
      airService.getOne(serviceId),
      commentService.getAll(serviceId),
    ])
   
    .then(([serviceData, comments]) => {
      const serviceState = {
        ...serviceData,
        comments,
      };
      dispatch({type: 'FETCH SERVICE', payload: serviceState});

      // dispatch({  //setServiceAsk({
      //   ...serviceData, comments});
    });

    // airService.getOne(serviceId).then((result) => {
    //   //console.log(result); // see kakwo e izliza !!!
    //   setServiceAsk(result);
    //   // return commentService.getAll(serviceId);
    // });
    // .then((result) => {
    //     setComments(result);
    // })
  }, [serviceId]); 

  const onCommentSubmit = async (values) => {
    
    const response =await commentService.create(serviceId, values.comment);
   // console.log('HHH:',response);

    dispatch({
      type:'COMMENT_ADD',
      payload: response,
      userEmail,
    });

  // THIS function is changed fron ../../reducers/serviceReducer";
  //  setServiceAsk (state => ({
  //   ...state, 
  //   comments: [
  //     ...state.comments,
  //     {
  //       ...response,
  //       author: {
  //         email: userEmail,
  //       }
  //     }
  //   ]
  //  }));


    // const result = await airService.addComments(serviceId, {
    //   username,
    //   comment,
    // });

    // setServiceAsk((state) => ({
    //   ...state,
    //   comment: { ...state.comment, [result._id]: result },
    // }));

    // setComment(""); // по този начин ги зачиставаме или занулираме 
    // setUsername(""); This maka in useForm with "setValues(initialValues)"
  };

  const isOwner = service._ownerId === userId; // console.log(isOwner);

  const onDeleteClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    const message = confirm(`Are you sure you want to delete ${service.title}`);

    if(message) {

       await airService.delete(service._id);
       deleteAirService(service._id)
       navigate('/service');
    }
   
  }

  return (
    <section id="game-details">
      <h1>Service Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img
            className="game-img"
            src={service.imageUrl}
            alt={service.title}
          />
          <h1>{service.title}</h1>
          <p className="levels">Category:{service.category}</p>

          <h3>Room</h3>
          <p className="text">Height: {service.height} m</p>

          <p className="text">Width: {service.width} m</p>
          <p className="text">Length: {service.length} m</p>


        </div>
        <p className="text">Note: {service.summary}</p>
      </div>

      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {service.comments && service.comments.map((x) => (
              <li key={x._id} className="form-control border-white p-3">
                <p>
                   {x.author.email} : {x.comment}
                </p>
              </li>
            ))}
        </ul>
       
        {/* { !service.comments.length && (<p className="no-comment">No comments.</p>)} */}
      </div>

    

      {isOwner && (
        <div className="buttons">
          <Link to={`/service/${service._id}/edit`}  className="btn submit btn btn-primary px-4">
            Edit
          </Link>
          <button className="btn submit btn btn-primary px-4" onClick={onDeleteClick}>Delete</button>
        </div>
      )}

          {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit}/>}

    </section>
  );
};
