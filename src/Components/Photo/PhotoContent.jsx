import React from "react";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import PhotoComments from "./PhotoComments";

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  function handleOutSideClick(event) {
    if (event.target === event.currentTarget) {
      event.preventDefault();
      window.history.back();
    }
  }

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <div className={styles.tittleUser}>
            <button className={styles.exitBtn} onClick={handleOutSideClick}>
              x
            </button>
            <p className={styles.author}>
              <Link to={`/perfil/${photo.author}`}>
                @{photo.author}
              </Link>
              <span className={styles.visualizacoes}>
                {photo.acessos}
              </span>
            </p>
          </div>

          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>
              {photo.title}
            </Link>
          </h1>
          <ul className={styles.attributes}>
            <li>
              {photo.peso} kg
            </li>
            <li>
              {photo.idade} anos
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
