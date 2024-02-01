import React from 'react';
import links from '../constants/links';

export default function Navbar() {
  const pathname = window.location.pathname;

  return (
    <div className="">
      <nav className="flex items-center justify-between">
        <a className="flex items-center gap-5 select-none" href="/">
          <img src="/Logo.svg" alt="Logo" />
          <h1 className="text-xl text-white select-none">OtabekDev</h1>
        </a>
        <ul className="flex justify-center items-center gap-32">
          {links.map((link) => (
            <li
              className={`text-[16px] text-white ${
                link.path === pathname ? 'bg-[#C778DD] rounded-md' : ''
              }`}
              key={link.name}
            >
              <a
                className="flex px-5 py-3 rounded-md hover:bg-zinc-600 transition-colors duration-300"
                href={link.path}
              >
                <p>{link.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
