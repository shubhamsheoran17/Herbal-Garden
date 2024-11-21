import React from 'react';
import Image3D from '../3DTemplate/Image3D';


const PopUp3D = ({ onClose }) => {
    return (
        <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-1/2 h-1/2 bg-yellow-200 border border-gray-300 shadow-lg rounded-lg
                    p-4 z-50 flex items-center justify-center flex-col"
        >
            <div className="w-full h-full">
                <Image3D source="https://sketchfab.com/models/7e77e41b88084da09a894280ed75be51/embed" />
            </div>
            <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
                Close
            </button>
        </div>
    );
};

export default PopUp3D;
