import React from "react";
import { AppBar, AppBarMenuItem, SmallVerticalDivider } from "aq_components";

export default function TopSection(){
    return (
        <div className="bg-qpink">
        <section title="about me" className="container mx-auto py-8">
            <AppBar title={'Ali Qanbari'} actions={<>
                <AppBarMenuItem name="Blog"/>
                <AppBarMenuItem name="Projects"/>
                <AppBarMenuItem name="Presentations"/>
                <SmallVerticalDivider />
                <AppBarMenuItem name="Download CV"/>
            </>} />
            <div className="flex flex-col lg:flex-row lg:space-x-32 xl:space-x-64 mt-16 lg:mt-24 mb-24">
                <div className="flex flex-col self-center">
                    <img className="h-48 w-48 lg:h-64 lg:w-64 xl:h-96 xl:w-96" src="/profile-pic.webp" />
                </div>
                <div className="flex flex-col self-center text-center lg:text-left mt-8 lg:w-128">
                    <h1 className="text-4xl xl:text-5xl font-bold">Full Stack Developer</h1>
                        <div className="text-lg xl:text-xl align-text-bottom py-4" style={{color: '#2E3A59'}}>
                            <svg className="inline fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425 4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19 12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179 9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568 15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z" fill="#2E3A59" />
                            </svg>Iran, Bushehr, Bushehr
                        </div>
                    <p className="text-xl xl:text-2xl leading-9 xl:leading-10 w-128 lg:px-0">I'm a 20 year old Software Engneering Student from Iran Spacilazing in Mobile App Development &amp; Software Solution Design.</p>
                    <button className="bg-q-btn-purple shadow-md rounded-md text-white px-8 py-3 text-lg font-bold mt-4 self-center lg:self-start hover:shadow-lg hover:bg-opacity-85">Contact Me</button>
                </div>
            </div>
        </section>
        </div>
    );
}