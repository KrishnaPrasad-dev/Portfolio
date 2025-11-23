import { useState } from 'react';
import Globe from 'react-globe.gl';


import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
    navigator.clipboard.writeText('itzmekrishna.257@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.jpg" alt="grid-1" className="w-full rounded-xl sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Krishna Prasad</p>
              <p className="grid-subtext">
                I have a deep love for coding, and it is my true passion that drives me to constantly learn, create, and solve problems through programming.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/mern.png" alt="grid-2" scale={1.1} className="rounded-7xl w-full sm:h-[276px] h-fit object-contain " />


            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
               I am learning the MERN stack, specializing in JavaScript. I work with MongoDB, Express, React, and Node.js to build full-stack web applications. My focus is on mastering JavaScript fundamentals for developing dynamic, scalable frontend and backend solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in India, And open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam   containerClass="w-full sm:w-3/4 inline-flex h-[30%]  mt-10 animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000_45%,#4D4B4B_55%,#000)] bg-[length:250%_100%] px-6 py-2 text-xl font-medium text-gray-300" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Coding isn’t just a skill for me—it’s something I genuinely enjoy. I love the process of solving problems, bringing ideas to life, and continuously learning through code.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="flex flex-row justify-center" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className='h-8' />
                <p className="lg:text-2xl mb-8 md:text-xl font-medium text-gray_gradient text-white">itzmekrishna.257@gmail.com</p>
                 </div>
                <div className="text-indigo-300 flex justify-center  flex-row gap-4 font-medium text-lg md:text-xl">

  {/* GitHub */}
  <a
    href="https://github.com/KrishnaPrasad-dev"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 bg-gray-400 h-11 px-3 rounded-md border shadow-sm"
  >
    <img src="assets/github.png" alt="github" className="h-7 w-7" />
    <p className="text-black">Github</p>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/krishnaprasad-webdev"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2 bg-gray-400 h-11 px-3 rounded-md border shadow-sm"
  >
    <img src="assets/linkedin.png" alt="linkedin" className="h-7 w-7" />
    <p className="text-black">Linkedin</p>
  </a>

</div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
