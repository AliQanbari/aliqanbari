import React from "react";
import { Carousel } from "react-responsive-carousel";
import Application from "../lib/Application";
import ApplicationCard from "./card_application";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type ApplicationsSectionProps = {
  applications: Application[]
}

export default function ApplicationsSection({ applications }: ApplicationsSectionProps) {
  return (
    <section title="applications">
      <div className="pb-16 pt-8 bg-q-purple-light">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">My Apps</h2>
          <div className="flex flex-wrap justify-center">
            {/* {applications.map(app => <ApplicationCard {...app} />)} */}
            <div>
              <Carousel infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} width={'80%'}>
                  <a href="https://cafebazaar.ir/app/ir.aligator.prayer.time">
                    <img className="rounded-md lg:rounded-2xl" src="pt-poster.webp" />
                  </a>
                  <a href="https://cafebazaar.ir/app/ir.aligator.memebox">
                    <img className="rounded-md lg:rounded-2xl" src="mb-poster.webp" />
                  </a>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
