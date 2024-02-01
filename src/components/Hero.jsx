import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <div className="h-[500px]">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl leading-loose text-white">
            <span className="underline decoration-wavy">Otabek Abdiraimov</span>{' '}
            is a <b className="text-[#C778DD]">Frontend Developer</b>
          </h1>
          <p className="text-zinc-400 text-[17px] w-[500px]">
            He crafts responsive websites where technologies meet creativity!!!
          </p>
          <Button title={'Contact Me'} />
        </div>
        <div className='bg-[url("/heroImgBg.svg")] bg-no-repeat'>
          <img src="/heroImg.png" alt="Man" />
          <div className="text-white p-2 flex gap-5 items-center justify-center border-solid border-2 border-white">
            <p className="w-5 h-5 bg-[#C778DD]"></p>
            <p className="text-[18px]">
              Currently working on <b>Portfolio</b>
            </p>
          </div>
        </div>
      </div>
      <div className="m-auto w-[700px]">
        <div className="p-4 mt-20 border-solid border-2 border-white text-white">
          <h3 className="text-3xl">
            With great power comes great electricity bill
          </h3>
        </div>
        <div className='ms-[500px]'>
          <p className="w-[200px] p-4 text-center text-2xl border-solid border-2 border-white text-white">
            - Dr. Who
          </p>
        </div>
      </div>
    </div>
  );
}
