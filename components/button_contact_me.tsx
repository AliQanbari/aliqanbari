
export default function ContactMeButton() {
    const mailto = 'mailto:aliqanbari.ir@gmail.com';

    return (
        <a href={mailto} className=" inline-block bg-q-purple shadow-md rounded-md text-white px-8 py-3 text-lg font-bold mt-4 self-center lg:self-start hover:shadow-lg hover:bg-opacity-85">Contact Me</a>
    );
};
