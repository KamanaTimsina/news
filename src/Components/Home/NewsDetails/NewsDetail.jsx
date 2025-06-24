import React, { useState } from "react";
import { FaCalendarAlt, FaUser, FaClock, FaShareAlt } from "react-icons/fa";


const Newsdetails = ({ title, image, description, commentsData,updatedDate,publishedBy }) => {
  const [comments, setComments] = useState(commentsData || []);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;

    const newComment = {
      name,
      message,
      time: new Date().toLocaleString(),
    };

    setComments([...comments, newComment]);
    setName("");
    setMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 m-5 bg-white shadow-xl rounded-lg p-5">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-red-500" />
            <span>{updatedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-red-500" />
            <span>Published by {publishedBy}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center text-red-600 text-sm gap-2 cursor-pointer hover:text-red-700 transition mr-5">
          <FaShareAlt title="Share"/><span>Share</span>
          </div>
        </div>
      </div>

      <img
        src={image}
        alt="Koshi Province News"
        className="w-full h-64 sm:h-96 object-cover rounded shadow-md"
      />

      <p className="text-base sm:text-lg text-gray-800">
        {description}
      </p>

      <div className="space-y-6 mt-10">
        <h2 className="text-xl font-semibold text-gray-900">Comments</h2>

        <div className="space-y-4">
          {[...comments].reverse().map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold text-sm">{comment.name}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 sm:mt-0">
                  <FaClock className="text-red-400" />
                  <span>{comment.time}</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-2">{comment.message}</p>
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
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition w-full sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsdetails;