import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

const LoadingScreen = ({ started, setStarted }) => {
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 500);
    }
  }, [progress, total, loaded, item]);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity duration-1000 pointer-events-none
flex items-center justify-center bg-black 
${started ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-4xl md:text-7xl font-bold text-white relative">
        <div
          className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        >
          SJ Olsen
        </div>
        <div className="opacity-40">SJ Olsen</div>
        <h3 className="text-4xl md:text-3xl text-red-200 text-center m-2">
          3D Portfolio
        </h3>
      </div>
    </div>
  );
};

export default LoadingScreen;
