import { useEffect } from "react";

function Translator() {
    useEffect(() => {
        // Ensure only one instance of the script and widget
        if (!window.googleTranslateElementInit) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        // Define the callback function for the Google Translate initialization
        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
            { pageLanguage: "en" },
            "google_translate_element"
            );
        };
        }

        // Cleanup script if the component unmounts
        return () => {
        const script = document.getElementById("google-translate-script");
        if (script) {
            document.body.removeChild(script);
        }
        };
    }, []);

    return <div id="google_translate_element" ></div>;
}

export default Translator;
