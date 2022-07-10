import React from "react";

export default function AboutUs() {
  return (
    <div className="w-full h-[800px] px-[7rem] flex justify-center items-center" id="about-us">
      <div className="flex justify-between items-center">
        <div className="w-[450px] h-auto relative">
          <h1 className="text-[40px] about-header z-10">
            A few words about our printing house
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
          <button className="bg-[#5545A8] text-[#fff] py-[17px] px-[50px] mt-[3.5rem] rounded-full font-semibold">
            About us
          </button>
          <div className="w-[165px] h-[12px] bg-[#FAD051] absolute top-[6rem] right-[18rem] -z-10"></div>
        </div>
        <div className="w-[600px] h-[550px] ml-[4rem] bg-[url('https://images.pexels.com/photos/2306791/pexels-photo-2306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-center bg-cover"></div>
      </div>
    </div>
  );
}
