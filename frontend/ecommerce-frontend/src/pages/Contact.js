import React,{useState} from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    Subject: "",
    Message: "",
    Email: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
  };
  const handleReset =()=>{
    setFormData({
        Email:"",
        Subject:"",
        Message:"",
    });
  };
  return (
    <div className="flex justify-center py-10 bg-gray-50">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
          Contact Us
        </h2>
        <hr className="my-4 border-gray-300" />
        <div className="grid grid-cols-2 gap-6">
            <label className="text-right pr-4 font-medium flex items-center">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
            required
          />
          <label className="text-right pr-4 font-medium flex items-center">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.Subject}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
            required
          />

          <label className="text-right pr-4 font-medium flex items-center">
            Message
          </label>
          <textarea 
            name="message"
            value={formData.Message}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:outline-green-500"
            required
          />
        </div>
         <div className="flex mt-8 text-center justify-center gap-4">
          <button
            type="reset"
            onClick={handleReset}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
