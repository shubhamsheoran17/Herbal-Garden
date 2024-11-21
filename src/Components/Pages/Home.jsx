import React, { useRef, useEffect } from "react";
import ExploreHerbs from "../HomeSection/ExploreHerbs";
import HerbalEducation from "../HomeSection/HerbalEducation";
import UsersEntry from "../StaticData/UsersEntry";
import Footer from "../footer/Footer";
import SearchingHerb from "../HomeSection/SearchingHerb";
import store from "../../Zustand/State"

function Home() {

    const {setSectionRefs} = store();

    const searchingHerbRef = useRef(null);
    const exploreHerbsRef = useRef(null);
    const herbalEducationRef = useRef(null);
    const usersEntryRef = useRef(null);

    useEffect(() => {
        setSectionRefs({
            searchingHerbRef,
            exploreHerbsRef,
            herbalEducationRef,
            usersEntryRef,
        });
    }, [setSectionRefs]);

    return (
        <div className="flex flex-col justify-center ">
            <div ref={searchingHerbRef}><SearchingHerb /></div>
            <div ref={exploreHerbsRef}><ExploreHerbs /></div>
            <div ref={herbalEducationRef}><HerbalEducation /></div>
            <div ref={usersEntryRef}><UsersEntry /></div>
            <Footer />
        </div>
    );
}

export default Home;
