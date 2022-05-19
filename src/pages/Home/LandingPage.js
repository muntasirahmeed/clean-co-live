import React from "react";
import Bucketgirl from "../../assests/images/bucketgirl 1.png";
const LandingPage = () => {
  return (
    <div className="relative">
      <div class="hero h-screen md:h-[80vh] bg-accent mt-16">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <h2
              className="text-lg  pl-1 capitalize"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Best quality
            </h2>
            <h1
              class="text-5xl font-bold capitalize"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="900"
            >
              professional cleaning service
            </h1>
            <p
              class="py-6 max-w-3xl"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              class="btn btn-primary"
              data-aos="fade-right"
              data-aos-delay="1000"
              data-aos-duration="1000"
            >
              Get Started
            </button>
          </div>
          <div className="h-[70vh] md:h-[80vh]   shrink-0">
            <img src={Bucketgirl} className="h-full pb-0 md:pb-3" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-base-200 w-[88%] mb-20 mx-auto shadow-lg rounded-lg relative z-50 px-8 pb-8 mt-[-35px]">
        <h1 className="text-3xl text-primary capitalize py-4 ">
          Get free estimate
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
