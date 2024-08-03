import Logo from "../components/Navbar/Logo/Logo";

const Footer = () => {
  return (
    <footer className=" mt-40 h-fit bg-lightViolet text-darkBasicBackground pt-10 ">
      <div className=" flex flex-col md:flex-row justify-between">
        <div className=" px-4 mb-6 md:mb-0 text-center sm:text-start">
          <div className="w-48 mx-auto mb-2 sm:mx-0 sm:mb-0">
            <Logo />
          </div>
          <p className=" text-white">
            Your one-stop shop for all things violet. We provide the best
            quality products with an amazing shopping experience.
          </p>
        </div>
        {/* ///////////////////////////////// */}
        <div className="flex flex-row justify-center px-4 pb-4 gap-x-16 md:gap-x-6 md:pe-20">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg text-center font-semibold mb-1 ">
              Useful Links
            </h3>
            <ul className="space-y-1 flex flex-col justify-center items-center">
              <li>
                <a href="" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Shop
                </a>
              </li>
              <li className="text-center">
                <a href="" className="hover:underline ">
                  About Us
                </a>
              </li>
              <li className="text-center">
                <a href="" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-center">
              Follow Us
            </h3>
            <ul className="space-y-1 flex flex-col justify-center items-center">
              <li>
                <a href="" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="text-center">
          <h3 className="text-md font-semibold">Creators</h3>
          <p className="text-sm">
            Developed & designed by{" "}
            <a href="" className="underline">
              mo'men wagdy
            </a>
          </p>
        </div>
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} VioletShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
