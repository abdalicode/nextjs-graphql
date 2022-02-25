import React from "react";
import CategoryTag from "../CategoryTag";
import Link from "next/link";
function PageHeader({ data }) {
  return (
    <section
      className="w-full h-[600px] flex sm:bg-center bg-left bg-no-repeat bg-cover  items-center "
      style={{ backgroundImage: `url(${data.coverImage.url})` }}
    >
      <div className="sm:ml-[70px] ml-[20px] flex flex-col w-[530px] mt-32">
        <div className="flex flex-row ">
          {data.tags.map((tag) => {
            return <CategoryTag key={tag} text={tag} />;
          })}
        </div>
        <Link href={`/post/${data.slug}`}>
          <a>
            <h1 className=" my-4 text-white">{data.title}</h1>
          </a>
        </Link>
        <div className="flex sm:flex-row flex-col items-start text-[#E5E5E5]">
          <p className="body2 mt-1">{data.date}</p>
          <span className="w-8 mx-[10px] border-b-[1px] border-[#E5E5E5] mt-2 "></span>
          <p className="description">{data.des}</p>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
