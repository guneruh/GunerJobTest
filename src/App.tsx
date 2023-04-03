import React from 'react';
import HeaderButton from "./common/HeaderButton";
import gunerfoto from './assets/gunerfoto.jpg'

function App() {
  return (
    <div className="flex p-4 flex-col h-screen bg-gradient-to-b from-indigo-200 to-indigo-500">
      <div
        className="p-4 flex w-full rounded-md h-fit justify-center space-x-16 flex-row bg-gradient-to-t from-indigo-500 to-indigo-900">
        <HeaderButton text={'About me'}/>
        <HeaderButton text={'Projects'}/>
        <HeaderButton text={'Skills'}/>
        <HeaderButton text={'Contact'}/>
      </div>

      <div className="flex flex-col mt-4 space-y-4">
        <div className="text-violet-950 text-4xl">About Me</div>
        <div className="text-violet-950 text-2xl">
          <p>I am Guner, I am natural from Mexico but i lived in Spain since 2003. Back in 2018 I came to the UK and
            studied Web and Software development as PC modding, gaming and fixing bugs have been always been one of my
            passions.
            I consider myself as a person who loves to create and being perfectionist with anything i do. </p>
        </div>
        <img className="border border-4 border-indigo-900 self-center w-1/3" src={gunerfoto}/>

        <div className="text-violet-950 text-2xl">
          <p> I would say my strongest traits are being creative, hardworker, cheerful and I always try to find a
            solution to anything, never giving up. To sum up, I am continuously improving my skills and learning which
            is one of passions, there is never enough to learn. This is my personal portfolio where I will be
            uploading all my projects and skills I learn. My contact details are in the Contact section and I hope to
            hear from you soon! </p>
        </div>

      </div>
    </div>
  );
}

export default App;
