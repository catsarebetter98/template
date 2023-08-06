import React from 'react'
import { Container } from './Container'

const EmailComponent = ({subject}) => {
  const handleEmailClick = () => {
    // Add your logic to send an email here
    window.location.href = 'mailto:hidekazushidara@gmail.com?subject=' + subject;
  };

  return (
    <a
      className="text-indigo-800 rounded-lg cursor-pointer bg-white p-3 ml-4 inline-block transition-all hover:scale-105 hover:no-underline"
      onClick={handleEmailClick}
    >
      Work with me
    </a>
  );
};

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <div className='flex flex-row items-center'>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            {title}
          </h1>
          <EmailComponent subject={"Interested in Consulting Services"}/>
          
        </div>
        <p className="mt-6 text-base text-zinc-400 text-xl">
          {intro}
        </p>
      </header>
    
      <div className="mt-16 sm:mt-20">{children}</div>
      
    </Container>
  )
}
