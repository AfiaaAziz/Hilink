
import Button from "@/components/Button";
import { HiCheckCircle } from "react-icons/hi";

const Pricing = () => {
  return (
    <section className="max-container padding-container py-10 lg:py-20">
      <div className="text-center mb-16">
        <h2 className="bold-52">Choose Your Plan</h2>
        <p className="regular-16 text-gray-30 mt-4 max-w-3xl mx-auto">
          Simple, transparent pricing. Get started for free or unlock powerful Pro features to take your adventures to the next level.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        
        {}
        <div className="flex flex-col p-8 w-full max-w-md bg-white rounded-2xl shadow-lg border-2">
          <h3 className="bold-20">Free</h3>
          <p className="regular-16 text-gray-30 mt-2">For casual explorers</p>
          <p className="mt-6">
            <span className="bold-52">$0</span>
            <span className="regular-16 text-gray-30">/ month</span>
          </p>
          <ul className="mt-8 space-y-4">
            <Feature check>Trail Discovery</Feature>
            <Feature check>Community Access</Feature>
            <Feature check={false}>Offline Maps</Feature>
            <Feature check={false}>Advanced Trip Planning</Feature>
          </ul>
          <Button type="button" title="Get Started" variant="btn_dark_green_outline" full />
        </div>

        {}
        <div className="flex flex-col p-8 w-full max-w-md bg-white rounded-2xl shadow-2xl border-4 border-green-50 relative">
          <span className="absolute top-0 -translate-y-1/2 bg-green-50 text-white bold-16 px-4 py-1 rounded-full">Most Popular</span>
          <h3 className="bold-20">Pro</h3>
          <p className="regular-16 text-gray-30 mt-2">For serious adventurers</p>
          <p className="mt-6">
            <span className="bold-52">$5</span>
            <span className="regular-16 text-gray-30">/ month</span>
          </p>
          <ul className="mt-8 space-y-4">
            <Feature check>Everything in Free</Feature>
            <Feature check>Unlimited Offline Maps</Feature>
            <Feature check>Advanced Trip Planning</Feature>
            <Feature check>Real-time Location Sharing</Feature>
          </ul>
           <Button type="button" title="Go Pro" variant="btn_dark_green" full />
        </div>

      </div>
    </section>
  );
};


const Feature = ({ children, check }: { children: React.ReactNode, check: boolean }) => (
  <li className={`flex items-center gap-3 ${check ? '' : 'text-gray-30 line-through'}`}>
    <HiCheckCircle className={`w-6 h-6 ${check ? 'text-green-50' : 'text-gray-20'}`} />
    <span className="regular-16">{children}</span>
  </li>
)

export default Pricing;