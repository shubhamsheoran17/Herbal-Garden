import Footer from "../footer/Footer";

function TermsCondition(){
    console.log("terms");
    return(
        <> 
            <div className="flex flex-col justify-center items-center w-full mb-96 pt-10">
                <div className="container mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4 flex justify-start mt-5">
                    <h1 className="xl:ml-30 font-black italic text-4xl">Disclamer</h1>
                </div>
                <div className="flex justify-center items-center my-12 mx-1">
                    <p className="text-start pl-10 mx-2 font-light">
                        The information provided on this website is intended for general informational purposes only. While we strive to present accurate and up-to-date content about medicinal plants, including their traditional healing uses, benefits, cultivation practices, and cultural significance, it is essential to note that this information is not a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                </div>
                <h1 className="container mt-5 mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4 flex flex-start my-2 font-bold italic text-3xl">1. Consult with a Qualified Healthcare Provider</h1>
                <p className="flex text-start pl-10 mx-8">
                    We do not guarantee specific outcomes from the use of any medicinal plants or treatments described on this website. Results may differ widely between individuals. We advise users to exercise caution and to seek professional medical advice when considering the use of herbal remedies or Ayurvedic treatments.</p>
                <h1 className="container mt-5 mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4 flex flex-start my-2 font-bold italic text-3xl">2. No Guarantees of Specific Outcomes</h1>
                <p className="flex text-start pl-10 mx-8">We do not guarantee specific outcomes from the use of any medicinal plants or treatments described on this website. Results may differ widely between individuals. We advise users to exercise caution and to seek professional medical advice when considering the use of herbal remedies or Ayurvedic treatments.</p>
                <h1 className="container mt-5 mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4 flex flex-start my-2 font-bold italic text-3xl">3. Third-Party Links and Content</h1>
                <p className="flex text-start pl-10 mx-8">This website may contain links to third-party websites for your convenience and additional information. We do not endorse or accept responsibility for the content of these external sites. Any access to and use of such linked websites is at your own risk. </p>
                <h1 className="container mt-5 mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4 flex flex-start my-2 font-bold italic text-3xl">4. Limitation of Liability</h1>
                <p className="flex text-start pl-10 mx-8">We disclaim any liability for any loss, injury, or damage, whether direct, indirect, consequential, or incidental, arising out of or in connection with the use or reliance upon the information provided on this website or any third-party content linked from this site.</p>
                <h1 className="container mt-5 mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4 flex flex-start my-2 font-bold italic text-3xl">5. Agreement to Terms</h1>
                <p className="flex text-start pl-10 mx-8">
                    By using this website, you acknowledge that you have read and understood this disclaimer and agree to be bound by its terms. If you do not agree with any part of this disclaimer, please refrain from using our website.
                </p>
                <h1 className="container mt-5 mx-auto px-4 sm:px-8 xl:max-w-6xl xl:px-4 flex flex-start my-2 font-bold italic text-3xl">6. Changes to this Disclaimer</h1>
                <p className="flex text-start pl-10 mx-8">
                    We reserve the right to modify this disclaimer at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of the updated disclaimer.
                </p>
            </div>


            
        </>
    );
}

export default TermsCondition;