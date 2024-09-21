import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full py-10 mt-10">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-16">
          <div className="mb-8 md:mb-0">
            <img
              src="/assets/img/logo_light.png"
              alt="Index Logo"
              className="h-10 mb-2 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-400">
              Crafted by hand — Powered by data.
            </p>

            <div className="flex justify-center md:justify-start mt-4">
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-slack"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-white mb-2">Features</h3>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Editor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Visualization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Customization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Speed
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Collaboration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Company</h3>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Book Demo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Resources</h3>
              <ul className="text-sm space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Brand
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
