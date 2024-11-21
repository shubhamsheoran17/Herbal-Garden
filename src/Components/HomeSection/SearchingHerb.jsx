import ImageCarousel from "../ImageCaraousel/ImageCaraousel";
import SearchBar from "../SearchBar/SearchBar";

function SearchingHerb(){
    return(
        <>  
            <div className="flex justify-center items-center p-10 pt-24">
                <p className="font-medium text-center text-xl p-5">  Ayurveda is also called the “science of longevity” because it offers a complete system to live a long healthy life. It offers programs to rejuvenate the body through diet and nutrition. It offers treatment methods to cure many common diseases such as food allergies, which have few modern treatments.</p>
            </div>
            <div className="pt-24 ">
                <h1 className="font-extrabold italic text-3xl pb-10">Some amazing herb</h1>
            </div>
            <ImageCarousel />
        </>
    );
}

export default SearchingHerb;