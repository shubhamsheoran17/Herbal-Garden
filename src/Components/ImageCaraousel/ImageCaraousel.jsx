import React, { useState } from 'react';
import HerbsTemplate from '../HerbsTemplate/HerbsTemplate';
import SearchBar from '../SearchBar/SearchBar'; // Ensure correct path
import HerbsInformation from '../HerbsInformation/HerbsInformation';

function ImageCarousel() {
    const [filteredTrees, setFilteredTrees] = useState([]);

    const defaultTrees = HerbsInformation();

    const handleSearch = (results) => {
        setFilteredTrees(results);
    };

    const treesToDisplay = filteredTrees.length > 0 ? filteredTrees : defaultTrees;

    return (
        <>
            <div className='flex justify-center items-center'>
                <SearchBar onSearch={handleSearch} />
            </div>   

            <div className="carousel rounded-box mt-12 bg-amber-100 flex flex-row justify-between items-start space-x-6 p-6 shadow-lg w-full mb-48">
                {treesToDisplay.map((tree, index) => (
                <div key={index} 
                    className={`carousel-item rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center ${
                        treesToDisplay.length === 1 ? 'w-full h-[350px] max-h-[350px]' : 'w-full sm:w-1/3 h-[350px] max-h-[350px]'
                    }`}      
                >          
                        <HerbsTemplate
                        name={tree[0]}
                        nickName={tree[1]}
                        terrain={tree[2]}
                        uses={tree[3]}
                        description={tree[4]}
                    />
                </div>
                ))}
            </div>
        </>
    );
}

export default ImageCarousel;
