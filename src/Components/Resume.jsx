import React from 'react';
import resume from '../Images/YuvarajSR.pdf'
import cvImage from '../Images/resumeImg.png'
const Resume = () => {
  return (
    <>
      <div className='p-5' style={{backgroundColor:"white", display:"flex", justifyContent:"center"}} id='resume'>
        <div>
        <h1 className='text-center'>Resume (Click to Download)</h1>
      <div>
      <a href={resume} download="Resume"><img style={{borderColor:"black"}} className='border' width={400} src={cvImage} /></a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
