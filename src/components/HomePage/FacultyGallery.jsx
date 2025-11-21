import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./FacultyGallery.css";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import NotAvailable from "../NotAvailable";
import { fetchFaculty } from "../../features/Faculty/FacultySlice";

const FacultyGallery = () => {
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  let { faculty, status } = useSelector((state) => state.faculty);
  useEffect(() => {
    console.log("faculty legnth is ...", faculty.length);

    if (!faculty || faculty.length === 0) {
      console.log("Dispatching fetchFaculty...");
      dispatch(fetchFaculty());
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
  if (!faculty || faculty.length === 0) {
    return <NotAvailable item="faculty" />;
  }

  faculty = faculty.data.faculty;

  return (
    <section className="section">
      <h3>
        Our <span>Faculty</span>
      </h3>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        <div className="swiper-slide">
          {faculty.map((facultyMember, index) => (
            <SwiperSlide key={index}>
              <div
                className="faculty-card"
                onClick={() => setSelected(facultyMember)}
              >
                <img src={facultyMember.imgSrc} alt={facultyMember.name} />
                <h4>{facultyMember.name}</h4>
                <p>{facultyMember.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {selected && (
        <div
          style={{ zIndex: "9999" }}
          className="gallery-modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelected(null)}>
              <IoCloseCircle size={30} />
            </button>
            <img
              className="hide-small"
              src={selected.imgSrc}
              alt={selected.name}
            />
            <div className="modal-text">
              <h3>{selected.name}</h3>
              <p>
                <strong>Position:</strong> {selected.position}
              </p>
              <p>
                <strong>Qualification:</strong> {selected.qualification}
              </p>
              <p>
                <strong>Experience:</strong> {selected.experience}
              </p>
              <p>
                <strong>About:</strong> {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FacultyGallery;
