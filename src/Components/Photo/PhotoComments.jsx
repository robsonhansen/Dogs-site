import React from "react";
import { UserContext } from "../../UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = props => {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSectionRef = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(
    () => {
      commentsSectionRef.current.scrollTop = commentsSectionRef.current.scrollHeight;
    },
    [comments]
  );

  return (
    <section className={styles.commentsContainer}>
      <div className={`${styles.divComments} ${props.single ? styles.single : ""}`}>
        <ul ref={commentsSectionRef} className={`${styles.comments} ${props.single ? styles.single : ""}`}>
          {comments.map(comment =>
            <li key={comment.comment_ID}>
              <b>
                {comment.comment_author}:{" "}
              </b>
              <span>
                {comment.comment_content}
              </span>
            </li>
          )}
        </ul>
      </div>
      <div>
        {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments} />}
      </div>
    </section>
  );
};

export default PhotoComments;
