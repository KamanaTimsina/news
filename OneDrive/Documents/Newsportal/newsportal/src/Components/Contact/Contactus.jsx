import React from "react";
import Adv from "../../assets/Images/Contactus/Adventures.jpg"; // Sample image

const dontMissItems = [
  {
    image: Adv,
    title: "Balanced Lifestyle for Better Well-being",
    category: "Lifestyle",
  },
  {
    image: Adv,
    title: "Exploring the Joy of Nature Adventures",
    category: "Travel",
  },
];

const mostViewedItems = [
  {
    image: Adv,
    title: "10 Best Hiking Trails in the Region",
  },
  {
    image: Adv,
    title: "Secrets to a Peaceful Mindset in Daily Life",
  },
];

const contactDetails = [
  { label: "Address", value: "Itahari-8, Sunsari" },
  { label: "Phone", value: "(+977-9876543210)" },
  { label: "Social", value: "Follow us on Facebook, Instagram" },
  { label: "Email", value: "abc@gmail.com" },
];

const Contactus = () => {
  return (
    <div className="w-full px-4 py-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      <div className="md:w-2/3 w-full flex flex-col gap-6">
        <div className="bg-white p-6 rounded shadow-md space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Contact Us</h2>
            <p className="text-black text-lg">
              Feel free to reach out by filling the form below. We’d love to hear from you!
            </p>
          </div>

          <form className="space-y-4 w-full">
            {["Your Name", "Your Email", "Subject"].map((label, index) => (
              <div key={index} className="flex flex-col space-y-2">
                <label className="text-base font-medium text-black">{label}</label>
                <input
                  type={label.includes("Email") ? "email" : "text"}
                  placeholder={label}
                  className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
            ))}

            <div className="flex flex-col space-y-2">
              <label className="text-base font-medium text-black">Your Message</label>
              <textarea
                rows="4"
                placeholder="Type your message..."
                className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white text-base px-6 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded shadow-md space-y-4">
          <h3 className="text-xl border-l-4 border-red-500 pl-4 mb-4 font-bold">Our Location</h3>
          <div className="w-full h-64 rounded overflow-hidden shadow-md">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1237365915367!2d85.324074!3d27.707942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f0e8df3fb%3A0x4f9ff8b3a3e9d634!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {contactDetails.map((item, index) => (
              <div key={index} className="text-sm text-black">
                <span className="font-semibold text-red-500 text-lg">{item.label}:</span> {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-1/3 w-full flex flex-col space-y-5">
        <div className="bg-gray-50 p-4 rounded shadow-md">
          <h3 className="text-xl border-l-4 border-red-500 pl-4 mb-4 font-bold">Don't Miss</h3>
          <div className="space-y-6">
            {dontMissItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded"
                />
                <span className="text-xs text-white bg-red-500 px-2 py-1 rounded">
                  {item.category}
                </span>
                <h4 className="text-md font-semibold text-black">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded shadow-md">
          <h3 className="text-xl border-l-4 border-red-500 pl-4 font-bold">Most Viewed</h3>
          <div className="space-y-4 m-2">
            {mostViewedItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded shadow-sm overflow-hidden flex flex-col items-center text-center space-y-2 p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h4 className="text-md font-semibold text-black">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
