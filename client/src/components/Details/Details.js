import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as airService from "../../services/airService";
import * as commentService from '../../services/commentService'
// import { Comments } from "../Comments/Comments";

export const Details = () => {
    const [username, setUsername] = useState ('');
    //const [comment, setComment] = useState ('') ;
    const [comments, setComments] = useState(['']);

  const { serviceId } = useParams();
   console.log('details:',serviceId);
  const [service, setServiceAsk] = useState({});

  useEffect(() => {
    airService.getOne(serviceId)
        .then((result) => {
             setServiceAsk(result);

     // return commentService.getAll(serviceId);
    })

    // .then((result) => {
    //     setComments(result);
    // })
  }, [serviceId]);

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    await commentService.create({
        serviceId,
        username,
        comments,
    });

  
 const result = await airService.addComments ({serviceId },
    username,
    comments,
)

setServiceAsk(state => ({...state, comments:{...state.comments, [result._id]:result}}))

setComments(''); // по този начин ги зачиставаме или занулираме
setUsername('');
        };



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
                        {/* <!-- list all comments for current game (If any) --> */}
                        {service.comments && Object.values(comments).map(x => ( 
                        <li key={x._id} className="comment">
                            <p>Content: {x.username} : {x.comment}</p>
                        </li>
                            ))}


                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

      {/* <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={onCommentSubmit}>

            <input type="text" name="username" placeholder="George" value={username} onChange={ (e) => setUsername(e.target.value)}/>

          <textarea value={comments} onChange={ (e) => setComments(e.target.value)} name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>

      <Link
        to={`/service/${serviceId}/coments`}
        className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
      />
    </section>
  );
};
