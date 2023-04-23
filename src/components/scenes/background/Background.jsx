import React from 'react'
import { useRef, useEffect } from 'react'
import { mountScene, cleanUpScene } from './Script'

const Background = () => {
    const mountRef = useRef(null)

    useEffect(() => {
        mountScene(mountRef)
        //Clean up scene
        return () => {
            cleanUpScene()
        }
    }, [])


  return (
    <div 
        className="contenedor3D"
        ref={mountRef}
        style={{
        width: '100vw', 
        height: '100vh',
        position: 'fixed'
      }}
    >        
    </div>
  )
}

export default Background