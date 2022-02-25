import React from "react";
import CategoryTag from "../CategoryTag";
import Image from "next/image";
import Link from "next/link";
function PostCard({ data }) {
  return (
    <div className="bg-white rounded-md overflow-hidden  relative shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.005]">
      <div className="bg-cover bg-no-repeat bg-center  h-[280px] relative cursor-pointer ">
        <Image
          alt=""
          src={data.coverImage.url}
          layout="fill"
          className="object-cover"
        ></Image>
      </div>
      <div className="flex flex-row top-5 right-5  absolute space-x-2">
        {data.tags.map((tag) => {
          return <CategoryTag key={tag} text={tag} />;
        })}
      </div>

      <div className="flex flex-col p-[20px] space-y-[7.5px]">
        <p className="text-[#495057]">{data.date}</p>
        <Link href={`/post/${data.slug}`}>
          <a>
            <h3 className="text-[#495057] underline-offset-1 hover:underline cursor-pointer  hover:text-blue-900">
              {data.title}
            </h3>
          </a>
        </Link>
        <span className="description text-[#6C757D]">{data.des}</span>
        <span className="w-full border-[1px] text-[#E5E5E5] my-[20px]"></span>
        <div className="flex flex-row items-center">
          <Image
            alt=""
            src={data.author.picture.url}
            width="50px"
            height="50px"
            className="rounded-full"
          />
          <div className="flex flex-col ml-4 ">
            <span className="description text-[#495057] font-bold">
              {data.author.name}
            </span>
            <span className="description text-[#969797] ">
              {data.author.profession}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
