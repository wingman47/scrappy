import "../../App.css";
import Donate from "./Donate";
import Profile from "./Profile";
import Stats from "./Stats";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Event from "./Event";


function Display() {

  return (
    <div>
      <Profile />
      <div class="flex flex-col md:flex-row md:justify-center m-4 mt-14">
        <div class="my-2 md:my-0 md:pr-2">
          <Stats />
        </div>
        <div class="hidden md:block lg:hidden pl-2">
          <div class="h-full">
            <div class="rounded-t-lg bg-gray-900 pb-5">
              <div>
                <div className=" bg-gray-900 rounded-lg w-full">
                  <div className="p-5">
                    <h5 className="mb-2 font-sans font-bold tracking-tight text-white text-3xl md:text-4xl sm:leading-none">
                      Conduct Event
                    </h5>
                    <p className=" font-normal text-sm text-gray-400">
                      Inspire others to join you in fostering a greener
                      environment, tackling waste-related issues, and making a
                      meaningful difference through contributions.
                    </p>
                    <Link to="/event">
                      <button class="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Create Event
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="border border-transparent"></div>
            <div class="rounded-b-lg bg-gray-900">
              <div>
                <div className="overflow-y-scroll max-h-96 min-w-max md:max-h-[22.5rem] lg:max-h-[36.5rem] block p-6 rounded-lg bg-gray-900 ">
                  <h1 className="mb-2 font-sans text-3xl font-bold tracking-tight text-white md:text-4xl lg:mr-28">
                    Upcoming Events
                  </h1>
                  <div>
                    <Event />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex my-2 md:my-0  lg:pr-2 md:pl-2 flex-col md:hidden lg:block">
          <div>
            <div className=" bg-gray-900 rounded-lg w-full">
              <div className="p-5">
                <h5 className="mb-2 font-sans font-bold tracking-tight text-white text-3xl md:text-4xl sm:leading-none">
                  Conduct Event
                </h5>
                <p className=" font-normal text-sm text-gray-400">
                  Inspire others to join you in fostering a greener environment,
                  tackling waste-related issues, and making a meaningful
                  difference through contributions.
                </p>
                <Link to="/event">
                  <button class="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Create Event
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="hidden lg:py-4 lg:block">
            <Donate />
          </div>
          <div class="hidden md:mt-4 md:block lg:py-4 lg:hidden">
            <div>
              <div className="overflow-y-scroll max-h-96 min-w-max md:max-h-[22.5rem] lg:max-h-[36.5rem] block p-6 rounded-lg bg-gray-900 ">
                <h1 className="mb-2 font-sans text-3xl font-bold tracking-tight text-white md:text-4xl lg:mr-28">
                  Upcoming Events
                </h1>
                <div>
                  <Event />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2 lg:my-0 md:hidden lg:pl-2 lg:block">
          <div>
            <div className="overflow-y-scroll max-h-96 min-w-max md:max-h-[22.5rem] lg:max-h-[36.5rem] block p-6 rounded-lg bg-gray-900 ">
              <h1 className="mb-2 font-sans text-3xl font-bold tracking-tight text-white md:text-4xl lg:mr-28">
                Upcoming Events
              </h1>
              <div>
                <Event />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden m-4">
        <Donate />
      </div>
      <div class="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

export default Display;

