import React, { useState } from 'react';
import plantImage from "../../assets/plant.jpeg";
import PopUp3D from "../PopUp3D/PopUp3D"; // Ensure this is the correct path

function HerbsTemplate({ name, nickName, terrain, uses, description }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(true);
    };

    const handleClosePopUp = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full rounded-md h-auto bg-amber-100 p-5">
                <div className="pb-4">
                    <img
                        onClick={handleClick}
                        className="rounded-3xl h-[80px] w-[80px]"
                        src={plantImage}
                        alt="Plant"
                    />
                </div>
                <div>
                    <h1 className="font-black text-2xl pb-2">{name}</h1>
                    <h2 className="font-medium">{nickName}</h2>
                </div>
                <div>
                    <p><span className="font-bold">Terrain:</span> {terrain}</p>
                    <p><span className="font-bold">Parts Used:</span> {uses}</p>
                    <p><span className="font-bold">Description:</span> {description}</p>
                </div>
            </div>
            {isVisible && <PopUp3D onClose={handleClosePopUp} />}
        </>
    );
}

export default HerbsTemplate;
