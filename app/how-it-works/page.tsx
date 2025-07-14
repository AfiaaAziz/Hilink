// app/how-it-works/page.tsx

import { HiOutlineSearch, HiOutlineMap, HiOutlineUsers, HiOutlineSparkles } from "react-icons/hi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <HiOutlineSearch className="w-10 h-10 text-white" />,
      title: "1. Discover Your Trail",
      description: "Use our advanced filters to find the perfect trail for your skill level and desired scenery. Explore curated collections and see what the community recommends."
    },
    {
      icon: <HiOutlineMap className="w-10 h-10 text-white" />,
      title: "2. Plan with Offline Maps",
      description: "Download detailed trail maps directly to your device. Our maps work even without a signal, providing real-time location, elevation, and points of interest."
    },
    {
      icon: <HiOutlineUsers className="w-10 h-10 text-white" />,
      title: "3. Share with Friends",
      description: "Create a trip schedule and invite your friends. Share your live location for safety and coordinate your adventure seamlessly within the app."
    },
    {
      icon: <HiOutlineSparkles className="w-10 h-10 text-white" />,
      title: "4. Go on an Adventure",
      description: "With everything planned and your maps ready, all that's left is to go out and enjoy the beauty of nature. Track your journey and create memories that last."
    }
  ];

  return (
    <section className="max-container padding-container py-10 lg:py-20">
      <div className="text-center mb-16">
        <h2 className="bold-52">How Hilink Works</h2>
        <p className="regular-16 text-gray-30 mt-4 max-w-3xl mx-auto">
          From finding the perfect trail to navigating offline in the wild, we've simplified every step of your adventure. Here's how to get started in minutes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="bg-green-50 p-4 rounded-full mb-5">
              {step.icon}
            </div>
            <h3 className="bold-20 mb-2">{step.title}</h3>
            <p className="regular-16 text-gray-30">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;