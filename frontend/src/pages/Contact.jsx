import { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios('/api/contact/add', formData);
      toast.success('✨ Message sent! Thanks for reaching out.', {
        position: 'bottom-left',
        autoClose: 2000,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Oops! Something went wrong.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 my-10 max-w-xl mx-auto rounded-xl shadow-2xl bg-white transition-all duration-300 poppins">
        <h2 className="text-3xl font-extrabold text-blue-600 mb-2">Let's Connect</h2>
        <p className="text-sm text-gray-500 mb-6 dark:text-gray-400">
          🚀 Have a question, suggestion, or just want to say hi? Drop us a message below — we'd love to hear from you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent text-sm px-2 py-3 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent text-sm px-2 py-3 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 bg-transparent text-sm px-2 py-3 outline-none resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-medium py-2 rounded-lg shadow-md"
          >
            ✉️ Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
