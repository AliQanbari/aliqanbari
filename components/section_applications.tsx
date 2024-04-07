"use client";
import React from "react";
import Application from "../lib/Application";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

type ApplicationsSectionProps = {
  applications: Application[]
}

export default function ApplicationsSection({ applications }: ApplicationsSectionProps) {
  const pa = applications.filter((a) => a.poster != null)
  return (
    <section title="applications">
      <div className="pb-16 pt-8 bg-q-purple-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">My Apps</h2>
          <div className="flex flex-wrap justify-center">
            <div>
              { <Carousel infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} onClickItem={(i)=>{window.open(pa[i].link);}}>
                {pa.map((a)=> <img className="rounded-md lg:rounded-2xl" src={a.poster} />)}
              </Carousel>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
