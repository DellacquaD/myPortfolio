import React, { useState, useRef, useEffect } from 'react';
import LoadSpinner from '../../loadSpinner/LoadSpinner';
import { mountScene, cleanUpScene } from './Script';

const Background = ({ isLoaded }) => {
  const mountRef = useRef(null);
  const [isMounted, setIsMounted] = useState(null);

  useEffect(() => {
    console.log('entre en este if');
    if (isLoaded && mountRef.current && isMounted === null) {
      setIsMounted(true);
      mountScene(mountRef);
    }

    return () => {
      console.log('entre en el otro if');
      if (isMounted) {
        cleanUpScene();
      }
    }
  }, [isLoaded, mountRef, isMounted]);

  return (
    <>
      {!isLoaded ? <LoadSpinner /> : <div ref={mountRef} style={{ width: '100vw', height: '100vh', position: 'fixed' }}></div> }
    </>
  );
};

export default Background;
