import Head from "next/head";
import Banner from "../components/Banner";
import FeaturedCard from "../components/FeaturedCard";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PostCard from "../components/PostCard";
import { gql } from "graphql-request";

import client from "../lib/client";

const headerSection = {
  coverImage: { url: "/image.jpg" },
  title: "Richird Norton photorealistic rendering as real photos",
  des: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
  date: "08.08.2021",
  tags: ["ADVENTURE"],
};
const postCard = {
  title: "Dream destinations to visit this year in Paris",
  date: "08.08.2021",
  des: `Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.`,
  tags: ["ADVENTURE", "TRAVEL"],
  coverImage: { url: "/blog-10.jpg" },
  author: {
    image: "/author-1.jpg",
    name: "Jennifer Lawrence",
    profession: "Thinker & Designer",
  },
};
const banner = {
  title: "Richird Norton photorealistic rendering as real photos",
  des: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
  date: "08.08.2021",
  tags: ["FASHION"],
  coverImage: { url: "/image-4.jpg" },
};
export default function Home({ news, banner, featured }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Next-Blog</title>
        <meta name="description" content="A simple Next.js Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PageHeader data={featured[1]} />
        <section className="sm:py-[150px] py-[50px] sm:px-[70px] px-[20px]  flex flex-col bg-[#F8F9FA]">
          <h1 className="text-[#495057] mb-[70px]">Popular topics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-auto gap-y-[50px] gap-x-[20px]">
            {news.map((post) => {
              return <PostCard key={post.title} data={post} />;
            })}
          </div>
        </section>
        <Banner data={banner} />
        <section className="sm:py-[150px] py-[50px] sm:px-[70px] px-[20px] flex flex-col bg-[#F8F9FA]">
          <h1 className="text-[#495057] mb-[70px]">{`Editor's pick`}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-rows-auto gap-y-[50px] gap-x-[20px]">
            {featured.map((data) => {
              return <FeaturedCard key={data.title} data={data} />;
            })}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const lordOfQueries = gql`
    query MyQuery {
      posts(last: 8) {
        coverImage {
          url
        }
        slug
        tags
        title
        date
        excerpt
        author {
          name
          title
          picture {
            url
          }
        }
      }
      post(where: { slug: "italy_gets_unicorn" }) {
        title
        tags
        slug
        excerpt
        date
        coverImage {
          url
        }
      }
    }
  `;
  const featuredQuery = gql`
    query featured {
      posts(where: { featured: true }) {
        coverImage {
          url
        }
        slug
        title
        date
        excerpt
        tags
      }
    }
  `;
  const data = await client.request(lordOfQueries);
  const featured = await client.request(featuredQuery);
  return {
    props: { news: data.posts, banner: data.post, featured: featured.posts },
  };
}
