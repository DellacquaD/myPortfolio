import React, { useState, useRef, useEffect } from "react";
import LoadSpinner from "../../loadSpinner/LoadSpinner";
import { mountScene, cleanUpScene } from "./Script";

const Background = ({ isLoaded }) => {
  const mountRef = useRef(null);
  const [isMounted, setIsMounted] = useState(null);

  useEffect(() => {
    if (isLoaded && mountRef.current && isMounted === null) {
      console.log("entre en este if");
      setIsMounted(true);
      mountScene(mountRef);
    }

    return () => {
      if (isMounted) {
        console.log("entre en el otro if");
        cleanUpScene();
      }
    };
  }, [isLoaded, mountRef, isMounted]);

  return (
    <>
      {!isLoaded ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            display: "grid",
            placeContent: "center",
            zIndex: 50,
            background: "black",
          }}
        >
          <LoadSpinner />
        </div>
      ) : (
        <div
          ref={mountRef}
          style={{ width: "100vw", height: "100vh", position: "fixed" }}
        ></div>
      )}
    </>
  );
};

export default Background;
