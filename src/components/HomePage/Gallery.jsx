import "./Gallery.css";
import CircularGallery from "../CircularGallery";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchGallery, setGallery } from "../../features/Gallery/GallerySlice";
import Loading from "../Loading";
import NotAvailable from "../NotAvailable";

const Gallery = () => {
  const dispatch = useDispatch();
  let { gallery, status } = useSelector((state) => state.gallery);
  useEffect(() => {
    if (gallery.length === 0) {
      dispatch(fetchGallery());
    }
  }, [dispatch]);

  //loading
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (status === "loading") {
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <h1 style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>
            App Ready
          </h1>
        )}
      </div>
    );
  }
  if (status === "failed") {
    return <Loading />;
  }
  // console.log("Our gallery are ", gallery.data);
  if (!gallery || gallery.length === 0) {
    return <NotAvailable item="Gallery" />;
  }

  let mygallery = gallery.data.gallery;
  return (
    <section className="section gallery-section">
      <h3 className="gallery-title">
        Our <span>Gallery</span>
      </h3>

      <div
        style={{
          height: "600px",
          position: "relative",
        }}
      >
        <CircularGallery
          gallery={mygallery}
          bend={3}
          textColor="Dodgerblue"
          borderRadius={0.05}
        />
      </div>
    </section>
  );
};

export default Gallery;
