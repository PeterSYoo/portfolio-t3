import { type ITechnology } from "additional";
import Image from "next/image";
import { type RefObject } from "react";
import { Technology } from "./Technology.components";

export const AboutSection = ({
  aboutRef,
}: {
  aboutRef: RefObject<HTMLElement>;
}) => {
  // States --------------------------------------
  const technologies = [
    {
      name: "JavaScript",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987672/Portfolio/About/Languages/js_aqcak7.png",
      width: 80,
      height: 80,
      type: "languages",
    },
    {
      name: "TypeScript",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987672/Portfolio/About/Languages/ts_iy9yvz.png",
      width: 80,
      height: 80,
      type: "languages",
    },
    {
      name: "Python",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987672/Portfolio/About/Languages/python_o35tbr.png",
      width: 80,
      height: 80,
      type: "languages",
    },
    {
      name: "HTML5",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987672/Portfolio/About/Languages/html_n6kvg4.png",
      width: 80,
      height: 80,
      type: "languages",
    },
    {
      name: "CSS3",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987672/Portfolio/About/Languages/css_py5ltu.png",
      width: 71,
      height: 80,
      type: "languages",
    },
    {
      name: "React",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987840/Portfolio/About/Front-End/react_y2nsxg.png",
      width: 92,
      height: 80,
      type: "front-end",
    },
    {
      name: "Next.js",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987840/Portfolio/About/Front-End/next_quqk0q.png",
      width: 80,
      height: 80,
      type: "front-end",
    },
    {
      name: "Vite",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987840/Portfolio/About/Front-End/vite_vjfdjn.png",
      width: 82,
      height: 80,
      type: "front-end",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987840/Portfolio/About/Front-End/tailwind_jw3h6a.png",
      width: 106,
      height: 80,
      type: "front-end",
    },
    {
      name: "TanStack Query",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987840/Portfolio/About/Front-End/tanstackquery_b3k8px.png",
      width: 90,
      height: 80,
      type: "front-end",
    },
    {
      name: "Zustand",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987840/Portfolio/About/Front-End/zustand_kq7bl8.png",
      width: 102,
      height: 80,
      type: "front-end",
    },
    {
      name: "Node.js",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987922/Portfolio/About/Back-End/node_crcjaz.png",
      width: 80,
      height: 80,
      type: "back-end",
    },
    {
      name: "Express",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987922/Portfolio/About/Back-End/express_o9nj8p.png",
      width: 80,
      height: 80,
      type: "back-end",
    },
    {
      name: "Django",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987922/Portfolio/About/Back-End/django_a4xktf.png",
      width: 67,
      height: 80,
      type: "back-end",
    },
    {
      name: "tRPC",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987923/Portfolio/About/Back-End/trpc_db5mi4.png",
      width: 80,
      height: 80,
      type: "back-end",
    },
    {
      name: "NextAuth.js",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987922/Portfolio/About/Back-End/nextauth_b1zg2v.png",
      width: 73,
      height: 80,
      type: "back-end",
    },
    {
      name: "Prisma",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987923/Portfolio/About/Back-End/prisma_nb2xnz.png",
      width: 67,
      height: 80,
      type: "back-end",
    },
    {
      name: "Mongoose",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987922/Portfolio/About/Back-End/mongoose_gcasge.png",
      width: 145,
      height: 80,
      type: "back-end",
    },
    {
      name: "Socket.IO",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987923/Portfolio/About/Back-End/socketio_whk62l.png",
      width: 85,
      height: 80,
      type: "back-end",
    },
    {
      name: "PeerJS",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987922/Portfolio/About/Back-End/peerjs_nnwmn0.png",
      width: 43,
      height: 80,
      type: "back-end",
    },
    {
      name: "PostgreSQL",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987990/Portfolio/About/Databases/postgresql_yhfijp.png",
      width: 78,
      height: 80,
      type: "databases",
    },
    {
      name: "MySQL",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987990/Portfolio/About/Databases/mysql_ejmwcy.png",
      width: 80,
      height: 80,
      type: "databases",
    },
    {
      name: "PlanetScale",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987990/Portfolio/About/Databases/planetscale_yzfml9.png",
      width: 80,
      height: 80,
      type: "databases",
    },
    {
      name: "MongoDB",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679987990/Portfolio/About/Databases/mongodb_pymkyg.png",
      width: 48,
      height: 80,
      type: "databases",
    },
    {
      name: "VSCode",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988073/Portfolio/About/Dev%20Tools/vscode_qwe7ez.png",
      width: 80,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Figma",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988072/Portfolio/About/Dev%20Tools/figma_tehqgc.png",
      width: 54,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Photoshop",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988073/Portfolio/About/Dev%20Tools/photoshop_lyibfp.png",
      width: 83,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Postman",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988073/Portfolio/About/Dev%20Tools/postman_lzy5mt.png",
      width: 80,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Git",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988072/Portfolio/About/Dev%20Tools/git_udowjb.png",
      width: 80,
      height: 80,
      type: "dev tools",
    },
    {
      name: "OpenAI",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988072/Portfolio/About/Dev%20Tools/openai_ckfgwc.png",
      width: 79,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Docker",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988072/Portfolio/About/Dev%20Tools/docker_oxhxkp.png",
      width: 111,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Trello",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988073/Portfolio/About/Dev%20Tools/trello_koxnjh.png",
      width: 80,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Agile Development",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988072/Portfolio/About/Dev%20Tools/agile_wuy6fx.png",
      width: 109,
      height: 80,
      type: "dev tools",
    },
    {
      name: "Jira",
      image:
        "https://res.cloudinary.com/dryh1nvhk/image/upload/v1679988072/Portfolio/About/Dev%20Tools/jira_ph7kzr.png",
      width: 80,
      height: 80,
      type: "dev tools",
    },
  ];

  // JSX --------------------------------------
  return (
    <>
      <section
        ref={aboutRef}
        id="about"
        className="flex flex-col gap-20 pt-[140px]"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-10 md:grid md:grid-cols-[302px_1fr] md:gap-14">
          {/* Column 1 -----------------------------------------*/}
          <div className="flex flex-col items-center gap-8">
            <div>
              <Image
                src="https://res.cloudinary.com/dryh1nvhk/image/upload/v1679903336/Portfolio/About/py-avatar_cecwkc.png"
                width={302}
                height={302}
                alt="avatar"
              />
            </div>
            <h1 className="text-center font-serif text-3xl">
              Hi, I&apos;m{" "}
              <span className="font-serif font-bold italic">Peter!</span>
            </h1>
          </div>
          {/* Column 2 -----------------------------------------*/}
          <div className="flex flex-col gap-10">
            <p className="text-xl">
              I&apos;m a Full-Stack Engineer and artist who has worked
              professionally as a Storyboard Artist at Marvel Animation. Since
              graduating from General Assembly&apos;s bootcamp, I&apos;ve built
              over a dozen projects using various technologies, including
              NextJS, TypeScript, Express, SQL and NoSQL databases, WebSockets,
              WebRTC architecture, OpenAI, and my current favorite stack, the T3
              stack. I&apos;ve been actively involved with organizations such as
              Hack for LA, hackathons, and I&apos;ve also worked in a
              cross-functional team of designers and devs in a 6-week Agile
              program. I am actively continuing my self learning by continuing
              to challenge myself on each new app project that I start.
            </p>
            <div className="flex flex-col gap-2">
              <h1 className="flex w-full justify-start font-serif text-3xl font-bold italic text-gray-700">
                Beyond Coding
              </h1>
              <p className="text-xl">
                I studied Illustration & Design and I have a passion for
                traditional figurative art and I love to spend my free time
                going to live figure drawing sessions and doing oil paintings.
              </p>
            </div>
          </div>
        </div>
        {/* Technologies ---------------------- */}
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-5">
          {/* Line Break ---------------------------------- */}
          <div className="border-b border-black/20"></div>
          {/* Languages ----------------------------------- */}
          <div className="mt-10 flex flex-col gap-8">
            <h1 className="flex w-full justify-start font-serif text-3xl font-bold italic text-gray-700 md:-mt-10">
              Languages
            </h1>
            <div className="flex flex-wrap items-center gap-14">
              {technologies
                .filter(
                  (technology: ITechnology) => technology.type === "languages"
                )
                .map((language, index: number) => (
                  <Technology key={index} technology={language} />
                ))}
            </div>
          </div>
          {/* Line Break ---------------------------------- */}
          <div className="border-b border-black/20"></div>
          {/* Front-End ----------------------------------- */}
          <div className="mt-10 flex flex-col gap-8">
            <h1 className="flex w-full justify-start font-serif text-3xl font-bold italic text-gray-700 md:-mt-10">
              Front-End
            </h1>
            <div className="flex flex-wrap items-center gap-14">
              {technologies
                .filter(
                  (technology: ITechnology) => technology.type === "front-end"
                )
                .map((language, index: number) => (
                  <Technology key={index} technology={language} />
                ))}
            </div>
          </div>
          {/* Line Break ---------------------------------- */}
          <div className="border-b border-black/20"></div>
          {/* Back-End ----------------------------------- */}
          <div className="mt-10 flex flex-col gap-8">
            <h1 className="flex w-full justify-start font-serif text-3xl font-bold italic text-gray-700 md:-mt-10">
              Back-End
            </h1>
            <div className="flex flex-wrap items-center gap-14">
              {technologies
                .filter(
                  (technology: ITechnology) => technology.type === "back-end"
                )
                .map((language, index: number) => (
                  <Technology key={index} technology={language} />
                ))}
            </div>
          </div>
          {/* Line Break ---------------------------------- */}
          <div className="border-b border-black/20"></div>
          {/* Databases ----------------------------------- */}
          <div className="mt-10 flex flex-col gap-8">
            <h1 className="flex w-full justify-start font-serif text-3xl font-bold italic text-gray-700 md:-mt-10">
              Databases
            </h1>
            <div className="flex flex-wrap items-center gap-14">
              {technologies
                .filter(
                  (technology: ITechnology) => technology.type === "databases"
                )
                .map((language, index: number) => (
                  <Technology key={index} technology={language} />
                ))}
            </div>
          </div>
          {/* Line Break ---------------------------------- */}
          <div className="border-b border-black/20"></div>
          {/* Dev Tools ----------------------------------- */}
          <div className="mt-10 flex flex-col gap-8">
            <h1 className="flex w-full justify-start font-serif text-3xl font-bold italic text-gray-700 md:-mt-10">
              Dev Tools
            </h1>
            <div className="flex flex-wrap items-center gap-14">
              {technologies
                .filter(
                  (technology: ITechnology) => technology.type === "dev tools"
                )
                .map((language, index: number) => (
                  <Technology key={index} technology={language} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
