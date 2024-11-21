import plant from "../../assets/g003.png"

function HerbalEducation(){
    return(
        <>
            <div className="pb-20 ">
                <div className="pt-10 pb-10 flex flex-row ">
                    <div className="flex flex-col justify-center items-center p-3 w-1/2">
                        <article className="h-3/4 ">
                            <h1 className="text-2xl italic font-bold text-start pb-8">Explore the Future of Herbal Education</h1>
                            <p className="pb-5  text-start">Discover how the Virtual Herbal Garden can revolutionize your understanding of medicinal plants. See why users are enthusiastic about this platform and how it supports their educational and professional goals.</p>
                            <p className="pb-5 text-start">We’re here to answer your questions and provide support based on our commitment to excellence. Contact us for more information or to get started with your Virtual Herbal Garden experience.</p>
                        </article>
                    </div>
                    <div className="w-1/2 ">
                        <img src={plant} alt="" className="h-[500px]"/>
                    </div>
                </div>
            </div>
        </>
    );
}


export default HerbalEducation;