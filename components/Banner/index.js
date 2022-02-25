import React from "react";
import CategoryTag from "../CategoryTag";
import Link from "next/link";
function Banner({ data }) {
  return (
    <section
      className="w-full h-[600px] flex sm:bg-center bg-left bg-no-repeat bg-cover  items-center justify-center"
      style={{ backgroundImage: `url(${data.coverImage.url})` }}
    >
      <div className="  flex flex-col space-y-[20px] sm:w-[530px] w-[95%] text-center items-center text-[#E5E5E5]">
        <div className="flex flex-row ">
          {data.tags.map((tag) => {
            return <CategoryTag key={tag} text={tag} />;
          })}
        </div>
        <Link href={`/post/${data.slug}`}>
          <a>
            <h1 className=" my-4 text-white cursor-pointer underline-offset-1 hover:underline">
              {data.title}
            </h1>
          </a>
        </Link>
        <p className="description">{data.des}</p>
        <span className="w-8 mx-[10px] border-b-[1px] border-[#E5E5E5] mt-2 "></span>

        <p className="body2 mt-1">{data.date}</p>
      </div>
    </section>
  );
}

export default Banner;
