import React from "react";
import Register from "./Register";
import Login from "./Login";
import { Routes, Route} from 'react-router-dom';
import Footer from "../Dashboard/Footer";

const Mainpage = ({setToken}) => {

  return (
    <div className="flex flex-col justify-around">
      <div class="md:flex md:justify-between">
        <div class="hidden md:block">
          <div class="mt-7">
            <div class="ml-12 mb-20">
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Scrappy&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;Scrappy&nbsp;
                </span>
              </button>
            </div>

            <h1 class="md:text-4xl lg:text-6xl text-white font-mono font-semibold ml-12 pr-9 pb-5">
              Pioneering <br /> Sustainability.
            </h1>
            <h3 class="w-4/5 ml-12 pr-9 text-sm text-zinc-400 leading-7">
              Introducing Scrappy, an innovative app that is revolutionizing the
              way we approach garbage collection and environmental
              sustainability. Our app is designed to address the pressing issue
              of waste management by providing a comprehensive and user-friendly
              platform.
            </h3>
          </div>
        </div>
        <div class="flex flex-col mx-auto w-11/12 md:w-80 md:mr-14">
          <div class="hidden md:block">
            <div>
              <h1 class="text-3xl mt-8 md:text-4xl font-semibold mb-2 text-white">
                Be a catalyst
                <br />
                for sustainability.
              </h1>

              <h2 class="text-sm mb-8 text-zinc-400">
                Take a step forward and be a catalyst for change. Together, we
                can implement sustainable practices and inspire others to follow
                suit.
              </h2>
            </div>
          </div>
          <div class="md:hidden">
            <div class="mx-auto mt-7">
              <div class="flex flex-col">
                <div class="mx-auto">
                  <button data-text="Awesome" class="button">
                    <span class="actual-text">&nbsp;Scrappy&nbsp;</span>
                    <span class="hover-text" aria-hidden="true">
                      &nbsp;Scrappy&nbsp;
                    </span>
                  </button>
                </div>

                {/* <button class=""> DUMP IT </button> */}
                <h1 class="text-center text-3xl text-white font-mono font-semibold ml-12 pr-9 pb-5">
                  Pioneering <br /> Sustainability
                </h1>
              </div>
            </div>
          </div> 
          <div>
            <Routes>
              <Route path="/" element={<Login setToken={setToken} />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mainpage;
