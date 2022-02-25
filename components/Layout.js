import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "next/image";
function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <main className="w-full relative ">
        <header className="w-full absolute top-0 left-0 z-40 bg-black/20 h-20 flex flex-col sm:flex-row items-center justify-between  py-[10px] sm:py-0 sm:px-[70px] space-y-3   sm:space-y-0 ">
          <div onClick={() => router.push("/")} className="block">
            <Img
              src="/RUNO.svg"
              className="w-20 select-none"
              width="80"
              height="140"
              alt=""
            />
          </div>
          <div>
            <nav className="flex items-center justify-between text-white select-none space-x-2 w-full">
              <Link href="/">
                <a className="body2  cursor-pointer py-3 ">Home</a>
              </Link>

              <span className="body2  cursor-pointer py-3">About</span>
              <span className="body2  cursor-pointer py-3">Articles</span>
              <span className="body2  cursor-pointer py-3">Contact Us</span>
            </nav>
            <div></div>
            <div></div>
          </div>
        </header>
      </main>
      {children}
      <footer>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-rows-auto gap-y-[50px] gap-x-[50px] px-[70px] py-[70px] bg-[#212529]">
          <div className="flex flex-col space-y-[16px]">
            <h3 className="text-white">Contact the Publisher</h3>
            <ul className="flex flex-col list-none space-y-[14px]">
              <li className="text-[#E5E5E5] body2">mike@runo.com</li>
              <li className="text-[#E5E5E5] body2">+944 450 904 505</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <h3 className="text-white">Explorate</h3>
            <ul className="flex flex-col list-none space-y-[14px]">
              <li className="text-[#E5E5E5] body2">About</li>
              <li className="text-[#E5E5E5] body2">Partners</li>
              <li className="text-[#E5E5E5] body2">Job Opportunities</li>
              <li className="text-[#E5E5E5] body2">Advertise</li>
              <li className="text-[#E5E5E5] body2">Membership</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <h3 className="text-white">Headquarter</h3>
            <ul className="flex flex-col list-none space-y-[14px]">
              <li className="text-[#E5E5E5] body2">
                191 Middleville Road, NY 1001, Sydney Australia
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-[16px]">
            <h3 className="text-white">Connections</h3>
            <ul className="flex flex-col list-none space-y-[14px]">
              <li className="text-[#E5E5E5] body2">
                191 Middleville Road, NY 1001, Sydney Australia
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full  h-[80px] px-[70px] bg-[#343A40]">
          <span className="text-[#E5E5E5] text-[16px] font-lora font-normal ">
            2021 | RUNO Publisher Studio
          </span>
          <span className="text-[#E5E5E5] text-[14px] font-lora font-normal leading-[18px] ">
            Subscribe Now
          </span>
        </div>
      </footer>
    </>
  );
}

export default Layout;
