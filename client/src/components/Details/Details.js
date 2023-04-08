import {  useEffect, useState, useReducer } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { airServiceFactory } from "../../services/airService";
import { useService } from "../../hooks/useService";
import * as commentService from "../../services/commentService";
// import { Comments } from "../Comments/Comments";
import { useAuthContext } from "../../contexts/AuthContext";
import { AddComment } from "./addComment/AddComment";

//const serviceReducer = (value) => {

//}

export const Details = () => {
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  //const [username, setUsername] = useState("");
  //const [comment, setComment] = useState("");
  const { serviceId } = useParams(); //console.log('IDSER:',serviceId) work
  
  const navigate = useNavigate();
  //const [state, dispatch] = useReducer(serviceReducer, {})

  
  const [service, setServiceAsk] = useState({});
  const airService = useService(airServiceFactory);

  useEffect(() => {
    Promise.all ([
      airService.getOne(serviceId),
      commentService.getAll(serviceId),
    ])

    .then(([serviceData, comments]) => {
      //dispatch('Pesho');
      setServiceAsk({
        ...serviceData, comments});
    })

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

   setServiceAsk (state => ({
    ...state, 
    comments: [
      ...state.comments,
      {
        ...response,
        author: {
          email: userEmail,
        }
      }
    ]
   }));


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
    //confirm("Do you sure delete!");
    await airService.delete(service._id);
// to delete from state
    navigate('/service');

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
          <span className="levels">{service.category}</span>
          <p className="type">
            {service.height},{service.width},{service.length}
          </p>
        </div>
        <p className="text"> {service.summary}</p>
      </div>

      <div className="details-comments">
        <h2>Comments:</h2>
        <ul>
          {service.comments && service.comments.map((x) => (
              <li key={x._id} className="comment">
                <p>
                  Content: {x.author.email} : {x.comment}
                </p>
              </li>
            ))}
        </ul>
       
        {/* { !service.comments.length && (<p className="no-comment">No comments.</p>)} */}
      </div>

    

      {isOwner && (
        <div className="buttons">
          <Link to={`/service/${service._id}/edit`} className="button">
            Edit
          </Link>
          <button className="button" onClick={onDeleteClick}>Delete</button>
        </div>
      )}

          {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit}/>}

    </section>
  );
};
