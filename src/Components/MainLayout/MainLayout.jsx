import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import CopyRight from "../footer/CopyRight";
import Translator from "../Translator/Translotor";

function MainLayout() {
    return (
        <>  
            <Navbar />
            <Outlet /> 
            <CopyRight />
        </>
    );
}

export default MainLayout;
