import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-customGreen py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-4 ml-auto">
          <a
            href="https://www.instagram.com/frutmixoficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Instagram.png"
              alt="Instagram"
              width={180}     
              height={180}    
            />
          </a>

          <a
            href="https://www.facebook.com/frutmixoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Facebook.png"
              alt="Facebook"
              width={180}     
              height={180}    
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
