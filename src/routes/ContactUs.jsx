import "./ContactUs.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { createRef, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addMessage } from "../features/Message/MessageSlice";

const ContactUs = () => {
  let { status } = useSelector((state) => state.message);
  // making reference to take form data
  let nameRef = useRef();
  let phoneRef = useRef();
  let subjectRef = useRef();
  let messageRef = useRef();
  const dispatch = useDispatch();

  // clear form after submitting
  const clearForm = () => {
    nameRef.current.value = "";
    phoneRef.current.value = "";
    subjectRef.current.value = "";
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
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
    console.log("form data is ready ", formData);
    dispatch(addMessage(formData))
      .unwrap()
      .then(() => {
        Swal.close();
        alert.success();
        console.log("the status is ", status);
        console.log("Message was successfull to sent");
        clearForm();
      })
      .catch((err) => {
        Swal.close();
        alert.error();
        console.error("Failed to send message:", err);
      });
  };
  // handle alerts
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
        text: "Your message has been sent successfully",
        confirmButtonText: "OK",
      }),
    error: () =>
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Failed to send a message, check , All Field must be filled",
        confirmButtonText: "OK",
      }),
  };

  return (
    <section className="contact-section container row">
      <div className="contact-info col">
        <h2>Contact Information</h2>
        <p>
          If you have any questions or need assistance, feel free to get in
          touch with us using the following contact details. <br />{" "}
          <b>Click Mail to Message and Phone to Call</b>
        </p>
        <div className="icons">
          <a
            className="hover-text-red"
            href="mailto:info@glamourinstitute.com"
            title="Email"
          >
            <MdEmail />
          </a>
          <a className="hover-text-red" href="tel:+923237537015" title="Phone">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
      <div className="contact-form col">
        <h2>Get In Touch</h2>
        <form action="#" method="post">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              ref={nameRef}
              type="text"
              className="input"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Phone</label>
            <input
              type="tel"
              id="Phone"
              ref={phoneRef}
              name="Phone"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              ref={subjectRef}
              placeholder="Subject"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              ref={messageRef}
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="submit-btn hover-red"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
