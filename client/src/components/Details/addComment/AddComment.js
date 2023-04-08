import { useForm } from "../../../hooks/useForm";
//import { Link } from "react-router-dom";
import './Comments.css'

export const AddComment = ({
    onCommentSubmit
}) => {

    const {values, changeHandler, onSubmit} = useForm({
        comment:'',
      },onCommentSubmit);

    return (

        // {/* <!-- Bonus -->
        //     <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
      <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form"  method='POST' onSubmit={onSubmit}>
   
        <textarea
          value={values.comment}
          onChange={changeHandler}
          name="comment"
          placeholder="Comment......"
        ></textarea>
        <input className="submit btn btn-primary px-4" type="submit" value="Add Comment" />
      </form>

      {/* <Link
      to={`/service/${serviceId}/coments`}
      className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
        /> */}
                
    </article>

    );
};