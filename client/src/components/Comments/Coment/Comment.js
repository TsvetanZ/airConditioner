export const Comment = ({ username, comment }) => {
  return (
    <div className="owl-carousel testimonial-carousel">
      <div className="text-center">
        {/* <img
          className="img-fluid mx-auto rounded-circle"
          src="img/testimonial-2.jpg"
          style={{ width: 100, height: 100 }}
        /> */}
        <div className="testimonial-text bg-light rounded p-4 mt-n5">
          <p className="mt-5">{comment}</p>
          <h4 className="text-truncate">{username}</h4>
          <i>Profession</i>
        </div>
      </div>
    </div>
  );
};
