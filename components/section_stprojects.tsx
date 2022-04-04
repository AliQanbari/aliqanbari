import React from "react";
import { studentProjects } from "../lib/StudentProject";
import SlidesViewer from "./viewer_slides";

export default function StudentProjectsSection() {
    return (
        <section title="studen projects">
            <div className="pb-16 pt-8 bg-q-pink">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-black mb-8">Student Projects</h2>
                    <div className="flex flex-wrap justify-center">
                        {studentProjects.map((p) => {
                            return (
                                <div className="w-72 m-2">
                                    <a href={p.link}><p className=" text-center mb-3" style={{color:'#585F7A', fontSize: '20px'}}>{p.title}</p></a>
                                    <SlidesViewer slides={p.slides} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
