import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const StatItem = ({ end, title, descr }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="boxItem" ref={ref}>
      <div
        className="stm-stats__content center"
        style={{ textAlign: "center" }}
      >
        <div className="stm-stats__value">
          <span
            className="stats__value-number"
            style={{ fontSize: 48, color: "#002147" }}
          >
            {inView ? <CountUp end={end} duration={2} /> : "0"}+
          </span>
        </div>
        <div
          className="stm-stats__title"
          style={{ fontSize: 15, color: "#002147" }}
        >
          {title}
        </div>
        <div
          className="stm-stats__descr"
          style={{ fontSize: 13, color: "#808080" }}
        >
          {descr}
        </div>
      </div>
    </div>
  );
};

export default StatItem;
