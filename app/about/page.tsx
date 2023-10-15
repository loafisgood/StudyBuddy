import React from 'react';

const About = () => {
  return (
    <div className="text-black bg-white min-h-screen flex flex-col items-center border border-gray-400 p-8 rounded-lg shadow-lg">
      <div className='align-start flex flex-col space-y-4 text-start'>
        <img src="/studylogo.png" alt="StuddyBuddy Logo" width="400" height="400" />
        <hr></hr>
        <p>
          Since popular tools such as Quizlet have gotten increasingly
          inaccessible, our team has worked to develop StuddyBuddy, your
          personalized study companion. StuddyBuddy ensures a smooth and
          educational experience for a diverse group of individuals. StuddyBuddy
          harnesses the power of AI to unlock new insights across industries, thus
          paving the way for a future powered by intelligent machines.
        </p>
      </div>
    </div>
  );
};

export default About;

