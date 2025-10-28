import React from 'react'
import { myProjects } from '../constants'

const Projects = () => {
  const currentProject = myProjects[0];
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

          </div>
        </div>
    </section>
  )
}

export default Projects
