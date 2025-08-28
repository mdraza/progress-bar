import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animProgress, setAnimProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimProgress(progress);
    }, 100);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(${animProgress - 100}%)`,
          color: progress < 5 ? "#333" : "#ffffff",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
