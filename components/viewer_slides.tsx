"use client";

import dynamic from 'next/dynamic';
import { useState } from 'react';

const ReactViewer = dynamic(
    () => import('react-viewer'),
    { ssr: false }
);

type SlidesViewerProps = {
    slides: string[]
};

export default function SlidesViewer({ slides }: SlidesViewerProps) {
    const [open, setOpen] = useState(false);
    const images = slides.map((link) => { return { src: link }; });
    return <>
        <img className="cursor-pointer" onClick={() => setOpen(true)} src={slides[0]} />
        <ReactViewer 
        visible={open}
         onClose={() => setOpen(false)} 
         images={images} zoomable={false} 
         rotatable={false} 
         scalable={false} 
         downloadable={false} 
         noImgDetails={true}   
         drag={false}
         noNavbar={true}
         loop={false}/>
    </>;
}