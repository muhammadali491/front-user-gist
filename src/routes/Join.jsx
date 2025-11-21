import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addJoin } from "../features/MyJoin/MyJoinSlice";
import { fetchCourses } from "../features/Courses/CoursesSlice";

const Join = () => {
  // fetching courses

  const dispatch = useDispatch();

  let { courses, courseStatus } = useSelector((state) => state.courses);
  // fetching data
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, [dispatch]);

  let ourCourses = courses?.data?.courses || [];

  // making reference to take form data
  let nameRef = useRef();
  let phoneRef = useRef();
  let courseRef = useRef();
  let shiftRef = useRef();
  let messageRef = useRef();

  let { status } = useSelector((state) => state.join);
  // console.log(status);

  // clear form after submitting
  const clearForm = () => {
    nameRef.current.value = "";
    phoneRef.current.value = "";
    // courseRef.current.value = "";
    // shiftRef.current.value = "";
    messageRef.current.value = "";
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // collect form data
    alert.loading();
    const formData = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      course: courseRef.current.value,
      shift: shiftRef.current.value,
      message: messageRef.current.value,
    };
    console.log("form data is ready ", formData);
    dispatch(addJoin(formData))
      .unwrap()
      .then(() => {
        Swal.close();
        alert.success();
        console.log("the status is ", status);
        console.log("addmission was successfull");
        clearForm();
      })
      .catch((err) => {
        Swal.close();
        alert.error();
        console.error("Failed to update:", err);
      });
  };

  const alert = {
    loading: () =>
      Swal.fire({
        title: "Please wait...",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      }),
    success: () =>
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Admission request submitted successfully! You'll be contacted shortly",
        confirmButtonText: "OK",
      }),
    error: () =>
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Failed to make an Addmission request, check , All Field must be filled",
        confirmButtonText: "OK",
      }),
  };

  return (
    <form className="section">
      <h2 className="text-blue">Addmission Form</h2>
      <div className="row-padding">
        <div className="third padding">
          <input
            className="input border "
            name="name"
            type="text"
            ref={nameRef}
            required
            placeholder="Name"
          />
        </div>
        <div className="third padding">
          <input
            className="input border "
            type="tel"
            placeholder="Phone NO."
            name="phone"
            required
            ref={phoneRef}
          />
        </div>
        <div className="third padding">
          <select
            name="course"
            id="ourCourses"
            ref={courseRef}
            required
            className="select"
          >
            <option selected disabled>
              Choose a Course
            </option>
            {/* fetching courses from Courses in db */}
            {ourCourses.length > 0 ? (
              ourCourses.map((course, index) => (
                <option key={index} value={course.title}>
                  {course.title}
                </option>
              ))
            ) : (
              <>
                <option value="DIT">DIT</option>
                <option value="CIT">CIT</option>
              </>
            )}
          </select>
        </div>
      </div>
      <div className="row-padding">
        <div className="third padding">
          <select
            name="shift"
            ref={shiftRef}
            required
            id="shift"
            className="select"
          >
            <option selected disabled>
              Choose a Timing
            </option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
        </div>
        <div className="third padding">
          <textarea
            required
            className="input"
            name="message"
            ref={messageRef}
            id="message"
            cols="30"
            rows="10"
            placeholder="your message"
          ></textarea>
        </div>
      </div>
      <input
        type="submit"
        value={"Submit"}
        className=" button blue round"
        onClick={(e) => handleSubmit(e)}
      />
    </form>
  );
};

export default Join;
