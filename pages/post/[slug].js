import Head from "next/head";
import PostHeader from "../../components/PostHeader";
import FeaturedCard from "../../components/FeaturedCard";
import Layout from "../../components/Layout";
import Image from "next/image";
import { gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import client from "../../lib/client";

const headerSection = {
  image: "/image-2.jpg",
  title: "Richird Norton photorealistic rendering as real photos",
  des: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
  date: "08.08.2021",
  categories: [{ title: "ADVENTURE" }],
};
const postCard = {
  title: "Dream destinations to visit this year in Paris",
  date: "08.08.2021",
  des: `Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.`,
  categories: [{ title: "ADVENTURE" }, { title: "TRAVEL" }],
  image: "/blog-2.jpg",
  author: {
    image: "/author-1.jpg",
    name: "Jennifer Lawrence",
    profession: "Thinker & Designer",
  },
};
const post = {
  date: "08.08.2021",
  content:
    "Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than parallel ideas. Dramatically visualize superior interfaces for best-of-breed alignments. Synergistically formulate performance based users through customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively enhance visionary opportunities through revolutionary schemas. Progressively network just in time customer service without real-time scenarios.Synergistically drive e-business leadership with unique synergy. Compellingly seize market positioning ROI and bricks-and-clicks e-markets. Proactively myocardinate timely platforms through distributed ideas. Professionally optimize enabled core competencies for leading-edge sources. Professionally enhance stand-alone leadership with innovative synergy. Rapidiously generate backend experiences vis-a-vis long-term high-impact relationships. Authoritatively supply market-driven mindshare and bricks-and-clicks opportunities. Holisticly create diverse innovation through adaptive communities. Efficiently empower seamless meta-services with impactful opportunities. Distinctively transition virtual outsourcing with focused e-tailers.“ Monotonectally seize superior mindshare rather than efficient technology. ” Compellingly enhance seamless resources through competitive content. Continually actualize 24/365 alignments for resource-leveling platforms. Energistically enhance high standards in models and professional expertise. Intrinsicly iterate extensible metrics for prospective opportunities. Continually develop leading-edge experiences through quality e-services.",
  time: "4 minutes",
  categories: [{ title: "ADVENTURE" }, { title: "PHOTO" }, { title: "DESIGN" }],
  author: {
    image: "/author-1.jpg",
    name: "Jennifer Lawrence",
    profession: "Thinker & Designer",
  },
};
export default function Post(props) {
  const {
    coverImage,
    content,
    title,
    tags,
    author,
    date,
    excerpt,
    authorPosts,
  } = props;
  return (
    <div className="container mx-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <PostHeader
          data={{ title, coverImage, authorName: author.name, excerpt }}
        />
        <section className="sm:py-[70px] py-[50px] sm:px-[70px] px-[20px]  flex flex-col bg-[#F8F9FA]">
          <div className="flex lg:flex-row flex-col space-y-[20px] lg:space-y-0 justify-start w-full">
            <div className="min-w-[170px]  flex flex-row space-between mr-14">
              <p className="body2 mt-1">{date}</p>
              <span className="w-[35px] h-0 mx-[10px] border-b-[1px] border-[#495057] mt-[10px] "></span>
              <p className="body2 mt-1 ">{post.time}</p>
            </div>
            <div className=" max-w-[860px] space-y-[50px]">
              <RichText content={content} />
              <div className="flex flex-row space-x-[12px]">
                {tags.map((tag) => {
                  return (
                    <span
                      key={tag}
                      className="py-[5px] px-[10px] rounded-md border-2 body1 text=[#6C757D] select-none"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <span className="w-full border-b-2 border-[#C4C4C4] block "></span>
              <div className="flex flex-row items-center">
                <Image
                  alt=""
                  src={author.picture.url}
                  width="50px"
                  height="50px"
                  className="rounded-full"
                />
                <div className="flex flex-col ml-4 ">
                  <span className="description text-[#495057] font-bold">
                    {author.name}
                  </span>
                  <span className="description text-[#969797] ">
                    {author.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:py-[150px] py-[50px] sm:px-[70px] px-[20px] flex flex-col bg-[#E5E5E5]">
          <h1 className="text-[#495057] mb-[70px]">{`More from ${author.name}`}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-rows-auto gap-y-[50px] gap-x-[20px]">
            {authorPosts.map((post) => {
              return <FeaturedCard key={post.title} data={post} />;
            })}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  const QUERY = gql`
    {
      posts {
        slug
      }
    }
  `;

  const { posts } = await client.request(QUERY);
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const PropsQuery = gql`
    query PropsQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        tags
        date
        excerpt
        author {
          name
          title
          id
          picture {
            url
          }
        }
        content {
          raw
        }
        coverImage {
          url
        }
      }
    }
  `;

  const { post } = await client.request(PropsQuery, { slug: params.slug });

  const authorPostsQuery = gql`
    query MyQuery($id: ID!, $slug: String!) {
      author(where: { id: $id }) {
        posts(last: 3, where: { NOT: { slug: $slug } }) {
          slug
          tags
          title
          date
          excerpt
          coverImage {
            url
          }
        }
      }
    }
  `;
  const { author } = await client.request(authorPostsQuery, {
    slug: params.slug,
    id: post.author.id,
  });
  return {
    props: { ...post, content: post.content.raw, authorPosts: author.posts },
  };
}
