// import hafizShab from "../../assets/images/hafiz.jpg";
import Courses from "../../assets/images/Gallery/entry test.jpg";
import styles from "../../components/HomePage/About.module.css";

const AboutCourses = () => {
  return (
    <section className="section about ">
      <h3>
        Our <span> Courses</span>
      </h3>
      <div style={{ padding: "16px 32px" }} className={styles.main}>
        <p>
          <span className="xlarge bold">
            Glamour Institute of Science and Technology has more than 1,000
            students and 15,000+ alumni with a wide variety of interests, ages
            and backgrounds.
          </span>
          <br />
          <span>
            We offer a wide range of courses designed to cater to the diverse
            needs of our students. From foundational courses in science and
            technology to specialized programs in emerging fields, our
            curriculum is crafted to provide both theoretical knowledge and
            practical skills. Our experienced instructors are dedicated to
            fostering an engaging learning environment that encourages
            innovation and critical thinking.
          </span>
        </p>
        <img
          src={Courses}
          className={styles.image}
          alt="Hafiz Abdul Qadir Bux"
        />
      </div>
    </section>
  );
};

export default AboutCourses;
