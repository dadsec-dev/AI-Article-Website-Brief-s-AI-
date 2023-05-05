import React from 'react';
import {logo} from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='brief' className='w-28 object-contain'/>

            <button type='button' onClick={() => window.open("https://github.com/dadsec-dev/AI-Article-Website-Brief-s-AI-")} className='black_btn'>
                Github
            </button>
        </nav>


        <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/> <span className='orange_gradient'>The Power Of AI</span></h1>
        <h2 className='desc'>
        Say goodbye to information overload and hello to clarity with BRIEFAI, the AI-powered article summarizer that transforms lengthy articles into bite-sized summaries. Whether you're a busy professional, a student, or just someone who loves to stay informed, BRIEFAI makes it easy to get the gist of any article in seconds.
        </h2>
    </header>
  )
}

export default Hero