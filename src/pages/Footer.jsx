import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 flex flex-col text-white md:p-7">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4">
        <div className="md:w-2/4 flex items-center flex-col space-y-4 p-5 md:border-r">
          <h1 className="text-3xl font-bold">About Foodie</h1>
          <p>
            Foodie is a food business that focuses on using fresh, locally
            sourced ingredients to create delicious and nutritious dishes that
            are affordable. Our team is passionate about providing exceptional
            customer service, and our commitment to sustainability guides
            everything we do. We've been recognized for our excellence in the
            food industry, and we're proud to give back to our community through
            charitable donations.
          </p>
        </div>
        <div className="md:w-2/4 flex items-center flex-col space-y-4 p-5">
          <h1 className="text-3xl font-bold">stay updated</h1>
          <p>
            Register your email address to get promos, product updates and other
            info.
          </p>
          <div className="md:space-x-2">
            <input type="email" placeholder="Your Email Address" className="bg-white p-2 rounded md:px-6" />
            <button className="bg-black rounded p-2">Sign Up</button>
          </div>
        </div>
      </div>
      <div className="p-7 border-t flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-3/5">
        &copy;Foodie
        </div>
        <div className="flex md:w-2/5 items-center justify-center ">
            <ul className="flex space-x-3">
                <li>Home /</li>
                <li>About Us /</li>
                <li>Blog</li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
