import React from "react";

type AppBarProps = {
    title?: string,
    actions?: React.ReactNode,
    menuColor: string,
}

export default function AppBar({ title, actions, menuColor }: AppBarProps) {

    const menuIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 18H12V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill={menuColor ?? "#fff"} />
        </svg>
    );

    return (
        <div className="flex flex-row pl-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
            <div className="flex-grow"></div>
            <div className="flex flex-row mr-4 lg:hidden">{menuIcon}</div>
            <div className="flex-row hidden lg:flex xl:mr-16">
                {actions}
            </div>
        </div>
    );
}