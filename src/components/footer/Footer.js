import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-purple-900 text-white text-sm py-4 px-6 md:px-12 lg:px-24 xl:px-32 mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">© 2023 Copywrite. All rights reserved by QodeMatrix</div>
        <div className="flex gap-4">
          <a href="abc" className="hover:underline">Documentation</a>
          <span>|</span>
          <a href="abc" className="hover:underline">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
