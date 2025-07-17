
import { FEATURES } from "@/constants";
import Image from "next/image";

const Services = () => {
  return (
    <section className="max-container padding-container py-10 lg:py-20">
      <div className="text-center mb-16">
        <h2 className="bold-52">Our Services</h2>
        <p className="regular-16 text-gray-30 mt-4 max-w-3xl mx-auto">
          We provide a comprehensive suite of tools designed to make your outdoor adventures safer, easier, and more enjoyable.
        </p>
      </div>

      {}
      <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {FEATURES.map((feature) => (
          <FeatureItem 
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
          />
        ))}
      </ul>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-20 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px]">
        {description}
      </p>
    </li>
  )
}

export default Services;