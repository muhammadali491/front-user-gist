import "../components/Gallery/OurGallery.css";
import React, { useEffect, useState } from "react";
import GalleryItem from "../components/Gallery/GalleryItem";
import Modal from "../components/Gallery/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallery, setGallery } from "../features/Gallery/GallerySlice";
import NotAvailable from "../components/NotAvailable";
import Loading from "../components/Loading";

const GalleryPage = () => {
  const [modalData, setModalData] = useState({
    img: "",
    desc: "",
    open: false,
  });

  const openModal = (img, desc) => {
    setModalData({ img, desc, open: true });
  };

  const closeModal = () => {
    setModalData({ ...modalData, open: false });
  };

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

  let images = gallery.data.gallery;
  return (
    <>
      <section className="section about auto padding-64">
        <h3>
          Glamour <span> Moments</span>
        </h3>

        <div className="row-padding box">
          {images.map((img, idx) => (
            <div key={idx} className="col s12 m6 l3 margin-bottom">
              <GalleryItem
                imgSrc={img.src}
                desc={img.desc}
                label={img.label}
                onClick={() => openModal(img.src, img.desc)}
              />
            </div>
          ))}
        </div>
      </section>

      <Modal
        imgSrc={modalData.img}
        desc={modalData.desc}
        isOpen={modalData.open}
        closeModal={closeModal}
      />
    </>
  );
};

export default GalleryPage;
