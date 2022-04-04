
export default interface StudentProject {
    title : string,
    link?: string,
    slides: string[],
}

export const studentProjects = [
    {
        title: "App Moon",
        link: "https://appmoon.netlify.app/",
        slides: [
            "projects/appmoon/1.png",
            "projects/appmoon/2.png",
            "projects/appmoon/3.png",
            "projects/appmoon/4.png",
            "projects/appmoon/5.png",
            "projects/appmoon/6.png",
            "projects/appmoon/7.png",
            "projects/appmoon/8.png",
        ],
    },
    {
        title: "Iran Gard",
        link: "http://irangardapp.ir/",
        slides: [
            "projects/irangard/1.png",
            "projects/irangard/2.png",
            "projects/irangard/3.png",
            "projects/irangard/4.png",
            "projects/irangard/5.png",
            "projects/irangard/6.png",
        ],
    },
    {
        title: "Kalame Mobin",
        link: "https://www.kalamemobin.ir/",
        slides: [
            "projects/kalamemobin/1.png",
            "projects/kalamemobin/2.png",
            "projects/kalamemobin/3.png",
            "projects/kalamemobin/4.png",
            "projects/kalamemobin/5.png",
            "projects/kalamemobin/6.png",
            "projects/kalamemobin/7.png",
            "projects/kalamemobin/8.png",
        ],
    },
    {
        title: "App Store",
        link: "https://pgu.appsapp.ir/",
        slides: [
            "projects/appstore/1.png"
        ],
    }
];