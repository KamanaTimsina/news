import React, { useEffect, useState } from "react";

const Converter = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/(ne|en)/);
    if (match) {
      setLanguage(match[1]);
    }

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ne",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame.skiptranslate, 
      .goog-te-gadget, 
      .goog-te-combo, 
      #google_translate_element {
        display: none !important;
      }
      body {
        top: 0px !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ne" : "en";
    setLanguage(newLang);

    document.cookie = `googtrans=/en/${newLang};path="/"`;
    document.cookie = `googtrans=/en/${newLang};domain=${window.location.hostname};path=/`;

    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = newLang;
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      <div className="fixed top-6 right-6 z-50 ">
        <button
          onClick={toggleLanguage}
          className="bg-gray-100 border-2 border-red-700 text-black  px-4 py-2 rounded-lg shadow-md hover:bg-blue-00 transition text-sm sm:text-base"
        >
          {language === "en" ? "नेपाली" : "English"}
        </button>
      </div>

      <div id="google_translate_element"></div>
    </>
  );
};

export default Converter;