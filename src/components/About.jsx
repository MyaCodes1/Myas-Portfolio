import React from 'react';
import imgprofile from '/imgprofile.png';

function About() {
    return (
        <section id='about' className='min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6'>


            <article data-aos="fade-left"
                data-aos-delay="500"
                className="relative max-w-2xl mx-auto text-center">

                <div className="absolute z-0 w-40 h-40 sm:w-60 smH-60 bg-[#112240] rounded-full blur-3xl opacity-50
    -top-5 left-10"></div>

                <div className="absolute z-0 w-72 h-72 bg-[#64FFDA] rounded-full blur-3xl opacity-20 -top-10 left-1/2 -translate-x-1/2"></div>

                <header className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ">
                        About Me
                    </h1>
                </header>



                <p className="text-base sm:text-lg md:text-x1 text-gray-300 mb-6 sm:mb-8 leading-relaxed text-center">
                    I am working towards becoming a software developer or AI engineer who builds technology that helps people. I find coding genuinely fun, especially when there’s a real end product to work towards. Outside of tech, I’m usually snowboarding, hiking or planning my next trip somewhere new. I’m also passionate about increasing representation for women in tech. I am an Amazon Engineer Scholar and a member of rewriting the code and I hope to one day build a community that makes tech feel more accessible and welcoming for women.
                </p>



            </article>




        </section>
    );
}

export default About;