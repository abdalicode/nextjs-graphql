import React from "react";
import CategoryTag from "../CategoryTag";

function PostHeader({ data }) {
  return (
    <section
      className="w-full h-[600px] flex sm:bg-center bg-left bg-no-repeat bg-cover  items-center justify-center   filter backdrop-blur-lg"
      style={{
        background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.6)) ,url(${data.coverImage.url})`,
      }}
    >
      <div className="  flex flex-col space-y-[20px] sm:w-[780px] w-[95%] text-center items-center text-[#E5E5E5]">
        <h1 className=" my-4 text-white cursor-pointer underline-offset-1 hover:underline">
          {data.title}
        </h1>
        <p>{data.excerpt}</p>
        <p>
          By <span className="text-red-200">{data.authorName}</span>
        </p>
      </div>
    </section>
  );
}

export default PostHeader;
