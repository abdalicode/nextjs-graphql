import React from "react";
import CategoryTag from "../CategoryTag";
import Image from "next/image";
import Link from "next/link";
function FeaturedCard({ data }) {
  return (
    <>
      <div className="h-[360px] rounded-md bg-cover relative flex items-end overflow-hidden shadow-md  justify-start ">
        <div className="w-full h-full absolute left-0 top-0 z-0 brightness-50  ">
          <Image alt="" src={data.coverImage.url} layout="fill"></Image>
        </div>
        <div className="absolute top-[20px] right-[20px] space-x-3 ">
          {data.tags.map((tag) => {
            return <CategoryTag text={tag} key={tag} />;
          })}
        </div>
        <div className="flex flex-col space-y-[15px]  z-10 ml-[20px] mb-[40px] mr-[20px] lg:mr-[50px]">
          <p className="text-[#E5E5E5]">{data.date}</p>
          <Link href={`/post/${data.slug}`}>
            <a>
              <h2 className="text-[#FFFFFF] hover:underline-offset-1  max-w-full hover:underline cursor-pointer ">
                {data.title}
              </h2>
            </a>
          </Link>
          <span className="description  max-w-full text-[#E5E5E5]">
            {data.excerpt}
          </span>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard;
