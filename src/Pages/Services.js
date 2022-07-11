import React from "react";
import { BsPrinter } from "react-icons/bs";
import { IconContext } from "react-icons";
import OurWork from "./OurWork";

export default function Services() {
  return (
    <div className="w-full h-[auto] border-t-[1px] border-[#a3a3a342] relative" id="services">
      <div className="w-[1110px] my-0 mx-auto h-auto services">
        <div className="h-auto">
          <IconContext.Provider
            value={{ color: "#5545A8", className: "print__icon" }}
          >
            <BsPrinter />
          </IconContext.Provider>
          <h1 className="text-[20px]">Printing and corporate branding</h1>
          <p className="text-start mt-[2rem] text-[#555555]">
            Name Prints specializes in the production of regular and large
            format digital printing. Our comprehensive product range, which
            continues to grow through research and development initiatives,
            includes: Graphics design, Posters, Banners, Window Decals, Floor
            Graphics, Point of Sale Display, Transit Advertising (Bus and Taxi)
            , Business/ Coprate logos, Business Cards and uniforms/ branded
            shirts, corporate souvenirs. We also do bespoke packages to suit
            your individual unique needs.
          </p>
        </div>
        <div className="h-auto">
          <img
            src="/images/party.png"
            alt="Party Icon"
            width={60}
            className="mb-[2rem]"
          />
          <h1 className="text-[20px]">Event Management</h1>
          <p className="text-start mt-[2rem] text-[#555555]">
            We’re more than just a boutique event planning firm. We’re a global
            team with the creative capacity to design and execute an
            unforgettable party — whether a destination wedding, a corporate gig
            or a bigbash birthday. We believe in creating unique moments that
            inspire. What makes us different? We listen to you. Then we design
            and create distinctive events based on your specific needs and
            desires. So be it the whole event or an aspect of the event, we are
            happy to be on your team.
          </p>
        </div>
        <div className="h-auto">
          <img
            src="/images/digital-marketing.png"
            alt="Digital"
            width={60}
            className="mb-[2rem]"
          />
          <h1 className="text-[20px]">Digital Marketing</h1>
          <p className="text-start mt-[2rem] text-[#555555]">
            We focus on your needs so you can focus on growing your business. At
            Ti-elle Global, we provide strategies that work for your individual
            company and implement effective online marketing campaigns that
            deliver your business with traffic, inquiries and sales. Take
            advantage of our SEO, Social Media and Web development services
            today to get the desired return on your digital marketing spend.
          </p>
        </div>
        <div className="h-auto">
          <img
            src="/images/business.png"
            alt="Business man"
            width={60}
            className="mb-[2rem]"
          />
          <h1 className="text-[20px]">
            Business consultancy and facility management
          </h1>
          <p className="text-start mt-[2rem] text-[#555555]">
            We serve clients at every level of their organization, in whatever
            capacity we can be most useful, Wwhether as a trusted advisor to top
            management or as a hands-on coach for front line employees. No
            matter the challenge, we focus on delivering practical and enduring
            results, and equipping our clients to grow and lead.
          </p>
        </div>
        <div className=" h-auto">
          <img
            src="/images/service.png"
            alt="Customer service"
            width={60}
            className="mb-[2rem]"
          />
          <h1 className="text-[20px]">Contact center services</h1>
          <p className="text-start mt-[2rem] text-[#555555]">
            We are a leading provider of outsourced contact center service. We
            offer dedicated customer service call centers, inbound and outbound
            sales, email response, live chat, social media and analytics. Tielle
            Global Enterprise is a customer care call center driven by human
            values. So we forge long-term relationships on a basis of first-rate
            customer experiences and branded customer service.
          </p>
        </div>
      </div>
      <div className="w-[1110px] my-0 mx-auto h-auto pt-[7rem] z-10 bg-[#fff]">
        <div className="flex justify-between items-center">
          <div className="w-[600px] h-[550px] mr-[4rem] bg-[url('https://graphicsfamily.com/wp-content/uploads/2020/10/Professional-Bi-fold-Brochure-Design-Free-psd-1180x944.jpg')] bg-center bg-cover"></div>
          <div className="w-[450px] h-auto relative">
            <h1 className="text-[40px] about-header">
              See wide range of our services
            </h1>
            <p className="text-start mt-[3rem] text-[#555555]">
              Name Prints specializes in the production of regular and large
              format digital printing.
            </p>
            <p className="text-start mt-[1.5rem] text-[#555555]">
              Our comprehensive product range, which continues to grow through
              research and development initiatives, includes: Graphics design,
              Posters, Banners, Window Decals, Floor Graphics, Point of Sale
              Display, Transit Advertising (Bus and Taxi) , Business/ Coprate
              logos, Business Cards and uniforms/ branded shirts, corporate
              souvenirs. We also do bespoke packages to suit your individual
              unique needs.
            </p>
           <div className="w-[165px] h-[12px] bg-[#FAD051] absolute top-[6rem] right-[18rem] service-yellow"></div> 
          </div>
        </div>
      </div>
      <OurWork/>
    </div>
  );
}
