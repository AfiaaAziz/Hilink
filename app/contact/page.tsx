// File: app/contact/page.tsx

"use client"; // This is CRITICAL for making the form interactive

import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const ContactUsPage = () => {
  // --- STATE MANAGEMENT ---
  // Store the values of the input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // Store the form's state (loading, success, error)
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // --- FORM SUBMISSION LOGIC ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop the page from reloading
    setLoading(true);
    setResponseMessage('');

    // Send the form data to our API endpoint
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await res.json();

    // Handle the response from the API
    if (res.ok) {
      setResponseMessage("Success! Your message has been sent.");
      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setResponseMessage(`Error: ${result.error || 'Something went wrong.'}`);
    }

    setLoading(false); // Stop the loading state
  };

  // --- JSX / COMPONENT RENDER ---
  return (
    <section className="max-container padding-container py-10 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="bold-52">Get in Touch</h2>
        <p className="regular-16 text-gray-30 mt-4">
          We'd love to hear from you. Whether you have a question about features, trials, or anything else, our team is ready to answer all your questions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="regular-16 text-gray-50 mb-2 block">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full p-4 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-50 transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="regular-16 text-gray-50 mb-2 block">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                className="w-full p-4 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-50 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="regular-16 text-gray-50 mb-2 block">Your Message</label>
              <textarea
                id="message"
                rows={6}
                placeholder="Let us know how we can help!"
                className="w-full p-4 bg-gray-50 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-50 transition"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn_dark_green w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {responseMessage && <p className="mt-4 text-center regular-16">{responseMessage}</p>}
          </form>

        </div>

        {/* Contact Info Section (no changes needed here) */}
        <div className="lg:w-1/2 flex flex-col justify-center gap-8">
            <h3 className="bold-32">Or Reach Us Directly</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <div className="bg-green-50 p-3 rounded-full"><HiOutlineMail className="w-6 h-6 text-white" /></div>
                <div><h4 className="bold-18">Email Us</h4><p className="regular-16 text-gray-30">contact@hilink.com</p></div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-green-50 p-3 rounded-full"><HiOutlinePhone className="w-6 h-6 text-white" /></div>
                <div><h4 className="bold-18">Call Us</h4><p className="regular-16 text-gray-30">(123) 456-7890</p></div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-green-50 p-3 rounded-full"><HiOutlineLocationMarker className="w-6 h-6 text-white" /></div>
                <div><h4 className="bold-18">Our Office</h4><p className="regular-16 text-gray-30">123 Adventure Lane, Mountain View, CA</p></div>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;