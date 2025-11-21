import "./Loading.css"; // Don't forget to create this CSS file

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="row">
      <div className="col" style={{ padding: "16px 32px" }}>
        <Skeleton height={300} count={1} />
        <Skeleton height={30} count={1} />
      </div>
      <div className="col hide-small" style={{ padding: "16px 32px" }}>
        <Skeleton height={300} count={1} />
        <Skeleton height={30} count={1} />
      </div>
      <div
        className="col hide-small hide-medium"
        style={{ padding: "16px 32px" }}
      >
        <Skeleton height={300} count={1} />
        <Skeleton height={30} count={1} />
      </div>
    </div>
  );
};

export default Loading;
