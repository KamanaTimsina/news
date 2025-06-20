import React, { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import Gadgets from "../../assets/Images/Breakingdetails/Gadgets.jpg";

const Breakingdetails = ({ title, image, description, commentsData }) => {
  const [comments, setComments] = useState(commentsData || []);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;

    setComments([...comments, { name, message }]);
    setName("");
    setMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Koshi Province government brings budget of Rs 35.87 billion
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-8 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-red-500" />
          <span>Updated: June 18, 2025</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-red-500" />
          <span>Published by News Desk</span>
        </div>
      </div>

      <img
        src={Gadgets}
        alt="Koshi Province News"
        className="w-full h-64 sm:h-96 object-cover rounded shadow-md"
      />

      <p className="text-base sm:text-lg text-gray-800">
        Biratnagar. The Koshi Province government has presented a budget of 35
        billion 87 million 99 million for the upcoming fiscal year 2082/83.
        Minister for Economic Affairs and Planning Ram Bahadur Magar presented
        the estimate on Sunday. In the budget, 18 billion 67 million 33 million
        has been allocated for current expenditure and 17 billion 10 million for
        capital expenditure. 100 million has been allocated for financial
        management.
        <br />
        <br />
        The budget for next year is 1.17 percent higher than the current fiscal
        year. The government had prepared a budget of Rs 35.27 billion and 9.3
        million for the current fiscal year.
      </p>

      <div className="space-y-6 mt-10">
        <h2 className="text-xl font-semibold text-gray-900">Comments</h2>

        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
              <p className="font-semibold text-sm">{comment.name}</p>
              <p className="text-sm text-gray-700">{comment.message}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            rows="4"
            placeholder="Write a comment..."
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Breakingdetails;
