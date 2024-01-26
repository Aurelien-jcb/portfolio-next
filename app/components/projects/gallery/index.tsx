// Gallery.tsx
import styles from "./styles.module.scss";

const Gallery: React.FC = () => {
  return (
    <main>
      <div className={styles.projectGallery}>
        <div
          className={`${styles.gallery} ${styles.galleryContainer}`}
          id="gallery"
        >
          <h1>Détails d`un projet</h1>
          {/* <div
            className={styles.galleryItem}
            style={{
              backgroundImage: "url(https://picsum.photos/1000/1000?random=64)",
            }}
          ></div> */}
          {/* Ajoutez les autres éléments de la galerie ici */}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
