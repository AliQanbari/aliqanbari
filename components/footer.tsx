import React from "react";
import Account from "../lib/Account";
import Application from "../lib/Application";
import Playground from "../lib/Playground";
import ContactMeButton from "./button_contact_me";

type FooterProps = {
    applications : Application[],
    playgrounds : Playground[],
    accounts : Account[],
}

export default function Footer({applications, playgrounds, accounts} : FooterProps) {
    return (
        <footer>
            <div className="bg-q-purple-dark py-8">
                <div className="container mx-auto">
                    <div className="xl:flex flex-wrap justify-center">
                        <div className="mx-16 mt-8">
                            <h5 className="text-q-purple-light font-bold text-2xl text-left">Ali Qanbari</h5>
                            <p className="text-white opacity-80 text-left">This is Ali Qanbari’s Personal Website</p>
                            <ContactMeButton />
                        </div>
                        <div className="mx-16 mt-8">
                            <h5 className="text-q-purple-light text-2xl text-left">Applications</h5>
                            {applications.map(app => <a href={app.link}><p className="text-q-pink opacity-60 hover:opacity-100 text-left my-1">{app.title}</p></a>)}
                        </div>
                        <div className="mx-16 mt-8">
                            <h5 className="text-q-purple-light text-2xl text-left">Playgrounds</h5>
                            {playgrounds.map(ply => <p className="text-q-pink opacity-60 hover:opacity-100 text-left my-1"><a href={ply.link}>{ply.title}</a></p>)}
                        </div>
                        <div className="mx-16 mt-8">
                            <h5 className="text-q-purple-light text-2xl text-left">Accounts</h5>
                            {accounts.map(ply => <a href={ply.link}><p className="my-2 text-q-pink opacity-60 hover:opacity-100 text-left"><img className="inline mr-2 pb-1" src={ply.icon} />{ply.title}</p></a>)}
                        </div>
                    </div>
                    <p className="text-center text-q-purple-muted mt-16">Copyright © {new Date().getUTCFullYear()} <a className="hover:text-q-purple-light" href="https://aligator.ir">Aligator.ir</a>, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
