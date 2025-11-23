import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
// Import both: default (DOM loader) and named Canvas-safe Html loader
import CanvasLoader, { CanvasLoaderHtml } from '../components/Loading';
import DemoComputer from '../components/DemoComputer';
const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex]= useState(0)
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
      setSelectedProjectIndex((prevIndex) =>{
        if(direction === "previous"){
          return prevIndex === 0 ? projectCount -1 :prevIndex -1;
        } else{
          return prevIndex === projectCount -1 ? 0: prevIndex + 1;
        }
      })
  }

  return (
    <section className='c-space my-20'>
        <p className='head-text'>My Work</p>

        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
          <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadowblack-200'>
            <div className='absolute top-0 right-0'>
                <img src={currentProject.spotlight}  alt="spotlight"  className=' w-full h-96 object-cover rounded-xl'/>
            </div>

            <div className='p-3 backgrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
              <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
            </div>

            <div className='flex flex-col gap-5 text-white-600 my-5'>
                <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                <p className='animatedText'>{currentProject.desc}</p>
                <p className='animatedText'>{currentProject.subdesc}</p>
            </div>

            <div className='flex items-center justify-between flex-wrap gap-5'>
              <div className='flex items-center gap-3'>
                {currentProject.tags.map((tag, index) =>(
                  <div key={index} className='tech-logo'>
                    <img src={tag.path} alt="tag.name" />
                  </div>
                ))}
              </div>

              <a href={currentProject.href} target='_blank' rel='noreferrer'>
                 <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl'>
                      Check Live Site  <img src="/assets/arrow-up.png" className='ml-3 w-3 h-3' alt="ar-up" />
                    </span>
                 </button>
              </a>
            </div>

            <div className='flex justify-between items-center mt-7'>
                <button className='arrow-btn ' onClick={()=> handleNavigation('previous')}>
                  <img src="/assets/left-arrow.png" alt="left arrow" className='w-4 h-4' />
                </button>

                <button className='arrow-btn ' onClick={()=> handleNavigation('next')}>
                  <img src="/assets/right-arrow.png" alt="right arrow" className='w-4 h-4' />
                </button>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D preview */}
          <div className='border border-black-200 bg-black-100 rounded-lg h-96 md:h-full'>
            <Canvas>
              <ambientLight intensity={3} />
              <directionalLight position={[10, 10, -55]} intensity={4} />
              <directionalLight position={[-10, -10, -15]} intensity={2} />
              <Center>
                {/* Use Canvas-safe HTML loader as Suspense fallback (this is rendered inside Canvas) */}
                <Suspense fallback={<CanvasLoaderHtml />}>
                  <group scale={2} position={[-0.3,-3,0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer  texture={currentProject.texture} />
                  </group>
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false}/>
            </Canvas>
          </div>
        </div>
    </section>
  )
}
export default Projects
