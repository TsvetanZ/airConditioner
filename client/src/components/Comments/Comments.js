import { useEffect, useState } from "react";

import * as commentService from '../../services/commentService';

import { useParams } from "react-router-dom";
import { Comment } from "./Coment/Comment";



export const Comments = () => {
  const {serviceId} = useParams ();

  //console.log('COMENT:',serviceId);
  const [comments, setComents] = useState (['']);

  useEffect (()=> {
    commentService.getAll(serviceId)
      .then(result => {
        setComents(result)
      })


  }, [serviceId])

    return (
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
          <h5
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Testimonial
          </h5>
          <h1 className="display-5 mb-0">What People Say About Our Services</h1>
         </div>
        
          {comments.map(x =>
          <Comment key={x._id} {...x}   /> 
          )}


          {comments.length === 0 && <p>No comments</p>}
        
        
      </div>
    </div>
    );
};