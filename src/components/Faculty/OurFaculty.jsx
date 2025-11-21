import { useDispatch, useSelector } from "react-redux";
import "../HomePage/CoursesPreview.css";
import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5"; // ✅ Import the icon
import { fetchFaculty } from "../../features/Faculty/FacultySlice";
import Loading from "../Loading";
import NotAvailable from "../NotAvailable";

const OurFaculty = () => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  let { faculty, status } = useSelector((state) => state.faculty);
  useEffect(() => {
    console.log(faculty.length);
    if (faculty.length === 0) {
      dispatch(fetchFaculty());
    }
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") {
    return <Loading />;
  }
  if (!faculty || faculty.length === 0) {
    return <NotAvailable item="faculty" />;
  }

  faculty = faculty.data.faculty;

  return (
    <section className="courses-preview-section">
      <div className="swiper-slide">
        {faculty.map((facultyMember, index) => (
          <div
            key={index}
            className="faculty-card"
            onClick={() => setSelected(facultyMember)}
          >
            <img src={facultyMember.imgSrc} alt={facultyMember.name} />
            <h4>{facultyMember.name}</h4>
            <p>{facultyMember.position}</p>
          </div>
        ))}
      </div>

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

export default OurFaculty;
