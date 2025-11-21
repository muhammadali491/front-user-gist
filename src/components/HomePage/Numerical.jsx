import "./Numericals.css";
import StatItem from "./StatItem";

const Numberical = () => {
  return (
    <section className="section">
      <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-has-fill">
        <div className="vc_column-inner vc_custom_1470899428550">
          <div className="wpb_wrapper">
            <div
              className="stm-separator stm-clearfix vc_custom_1473070289623"
              style={{ width: 40, marginLeft: "auto", marginRight: "auto" }}
            >
              <div
                className="stm-separator__line"
                style={{
                  borderBottomWidth: 1,
                  borderBottomStyle: "solid",
                  borderBottomColor: "#8c1515",
                }}
              />
            </div>

            <div className="myBox">
              <StatItem
                end={32}
                title="Programs Offered"
                descr="in Information Technology"
              />
              <StatItem
                end={1500}
                title="Certified Students"
                descr="Successfully trained"
              />
              <StatItem
                end={5}
                title="Expert Instructors & Trainers"
                descr="Professional Trainers"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numberical;
