import React from 'react';

const Footer = ({subscription=true, terms_and_conditions=true, feedback=true}) => {
    return (
      <>
          <footer className="text-gray-400"  aria-labelledby="footer-heading">
              {
                  <div className='flex flex-row justify-center items-center'>
                    <div className='m-2 text-gray-400'><a href="/">Home</a></div>
                    <div className='m-2 text-gray-400'><a href="/latest">Latest article</a></div>
                    <div className='m-2 text-gray-400'><a href="/feelingswheel">Feelings Wheel</a></div>
                  </div >
                }
              {
                  terms_and_conditions &&
                  <div className="mt-1 border-t border-white py-8">
                      <p className="text-base text-black text-center">Made with ❤️ by <a href="https://www.hshidara.com/links?ref=productmanagers.hshidara.com" className='underline'>Hide Shidara</a></p>
                  </div>
              }
          </footer>
      </>
    )
  }
  
  export default Footer;