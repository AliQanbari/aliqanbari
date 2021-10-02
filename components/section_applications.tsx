import React from "react";
import Application from "../lib/Application";
import ApplicationCard from "./card_application";

type ApplicationsSectionProps = {
    applications : Application[]
}

export default function ApplicationsSection({applications} : ApplicationsSectionProps) {
    return (
        <section title="applications">
        <div className="pb-16 pt-8 bg-q-purple-light">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-8">Applications</h2>
            <div className="flex flex-wrap justify-center">
              {applications.map(app => <ApplicationCard {...app} />)}
            </div>
          </div>
        </div>
      </section>
    );
};
