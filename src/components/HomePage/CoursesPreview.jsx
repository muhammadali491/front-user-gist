import "./CoursesPreview.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoCloseCircle } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses, setCourses } from "../../features/Courses/CoursesSlice";
import Loading from "../Loading";
import NotAvailable from "../NotAvailable";

const CoursesPreview = () => {
  const [selected, setSelected] = useState(null);

  const dispatch = useDispatch();

  let { courses, status } = useSelector((state) => state.courses);
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
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
  if (!courses || courses.length === 0) {
    return <NotAvailable item="Courses" />;
  }

  courses = courses.data.courses;

  let style = {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "auto",
  };
  return (
    <section className=" courses-preview-section ">
      <h2 className="section-heading">
        Explore Our <span>Courses</span>
      </h2>
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
        <div className="courses-grid " style={style}>
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="course-card " key={index}>
                <div className="course-image-wrapper">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="overlay-info">
                    <h3>{course.title}</h3>
                    <p>By {course.instructor}</p>
                  </div>
                </div>
                <div className="course-content">
                  <h4>{course.subtitle}</h4>
                  <p>{course.intro}</p>
                </div>
                <div className="course-footer">
                  <span className="course-duration">{course.duration}</span>
                  <button
                    onClick={() => setSelected(course)}
                    className="enroll-btn"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {/* Modal */}
      {selected && (
        <div
          className="gallery-modal"
          style={{ zIndex: "9999" }}
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
              src={selected.image}
              alt={selected.title}
            />
            <div className="modal-text">
              <h3>{selected.title}</h3>
              <p>
                <strong>Instructor:</strong> {selected.instructor}
              </p>
              <p>
                <strong>Subtitle:</strong> {selected.subtitle}
              </p>
              <p>
                <strong>Description:</strong> {selected.description}
              </p>
              <p>
                <strong>Duration:</strong> {selected.duration}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CoursesPreview;
