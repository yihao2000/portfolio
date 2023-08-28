"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/icons";
import { Button, Divider, Image, Skeleton } from "@nextui-org/react";

import styles from "../styles/custom.module.css";
import { useEffect, useRef, useState } from "react";
import { fetchData } from "@/components/utils/api";
import { Project } from "@/types";
import ProjectCard from "@/components/projectcard";
import clsx from "clsx";
import Typed from "typed.js";
import { BsMouse, BsDiscord } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";
import useDownloader from "react-use-downloader";
import ParticlesBackground from "@/components/utils/background/ParticlesBackground";
import { MdWork } from "react-icons/md";
import { useTheme } from "next-themes";
import { FILENAME, FILEURL } from "@/components/utils/constants";
import Introduction from "@/components/introduction";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Adjust the path
        const jsonData = await response.json();
        setProjects(jsonData.data);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ParticlesBackground />
      <section
        id="first"
        className="flex flex-row justify-center gap-16 first pt-36 flex-wrap pb-36"
        style={{
          height: "fit-content",
        }}
      >
        <div className="inline-block max-w-lg text-center">
          <Image src="/self.jpg" radius="full" width={350} height={350} />
        </div>

        <div className="flex flex-col gap-2 pt-16">
          <div className="flex">
            <Introduction />
          </div>
          <div className="flex">
            <span className=" max-w-md text-2xl">
              Full Stack Developer, Mobile Developer, and a Student
            </span>
          </div>

          <div className="flex gap-1">
            <span className="text-2xl font-semibold">Find me on: </span>
            <Link
              isExternal
              href={siteConfig.links.linkedin}
              aria-label="LinkedIn"
            >
              <AiFillLinkedin
                color="grey"
                size={24}
                className={styles.darkgloweffect}
              />
            </Link>
            <Link isExternal href={siteConfig.links.github} aria-label="Github">
              <AiFillGithub
                color="grey"
                size={24}
                className={styles.darkgloweffect}
              />
            </Link>

            <Link
              isExternal
              href={siteConfig.links.discord}
              aria-label="Discord"
            >
              <BsDiscord
                color="grey"
                size={24}
                className={styles.darkgloweffect}
              />
            </Link>
            <Link
              isExternal
              href={siteConfig.links.instagram}
              aria-label="Github"
            >
              <AiFillInstagram
                color="grey"
                size={24}
                className={styles.darkgloweffect}
              />
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-16">
            <BsMouse size={24} />
            <div className="flex items-center gap-1">
              <span>Scroll Down</span>
              <FiArrowDown />
            </div>
          </div>
        </div>
      </section>

      <section
        id="second"
        className="second reveal"
        style={{
          height: "fit-content",
        }}
      >
        <div className="flex items-center pt-16 gap-7">
          <div className="text-6xl inline">Resume </div>
          <Button
            className={clsx(
              styles.darkgloweffect,
              "dark dark:bg-black-1000 dark:text-white bg-gray-200 text-black inline"
            )}
            onClick={() => download(FILEURL, FILENAME)}
          >
            Download My Resume
          </Button>
        </div>
        <Divider className="my-2" />

        <div className="flex items-center gap-2 pt-4">
          <MdWork size={28} />
          <div className="text-3xl">Work & Organization Experience</div>
        </div>
        <div className={styles.timeline}>
          <div className={clsx(styles.checkpoint)}>
            <div className={styles.darkgloweffect}>
              <h2>Sept 2022 - Present</h2>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Laboratory Assistant - Full Time
              </span>
              <span className="text-blue-cyan block">Binus University</span>
              <Divider className="my-2" />

              <ul>
                <li className="list-inside list-disc">
                  Deliver 6+ programming courses to BINUS University Students
                </li>
                <li className="list-inside list-disc">
                  Experienced in multiple programming languages such as ReactJS,
                  GoLang, PHP, C#, Swift, etc
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.checkpoint}>
            <div className={styles.darkgloweffect}>
              <h2>Jan 2022 - Jan 2023</h2>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                HIMSISFO Activist
              </span>
              <span className="text-blue-cyan block">Binus University</span>
              <Divider className="my-2" />

              <ul>
                <li className="list-inside list-disc">
                  Organizing and managing events for BINUS University
                  Information System students.
                </li>
                <li className="list-inside list-disc">
                  Selected as Vice Coordinator of SELCAVIS 2022
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.checkpoint}>
            <div className={styles.darkgloweffect}>
              <h2>Feb 2022 - July 2022</h2>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Laboratory Assistant - Part Time
              </span>
              <span className="text-blue-cyan block">Binus University</span>
              <Divider className="my-2" />

              <ul>
                <li className="list-inside list-disc">
                  Deliver 2+ programming courses to BINUS University Students
                </li>
                <li className="list-inside list-disc">
                  Experienced in multiple programming languages such as C, C++,
                  MySQL, SQLServer, Java, HTML, CSS, JS, etc
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-4">
          <BiSolidBookAlt size={28} />
          <div className="text-3xl ">Education</div>
        </div>
        <div className={styles.timeline}>
          <div className={clsx(styles.checkpoint)}>
            <div className={styles.darkgloweffect}>
              <h2>2021 - Present</h2>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Binus University
              </span>
              <span className="text-blue-cyan block">
                Information System Major
              </span>
            </div>
          </div>
          <div className={styles.checkpoint}>
            <div className={styles.darkgloweffect}>
              <h2>2018 - 2021</h2>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                SMAK Penabur Gading Serpong
              </span>
              <span className="text-blue-cyan block">
                Natural Sciences Major
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="third"
        className="third reveal"
        style={{
          height: "fit-content",
        }}
      >
        <div className="text-6xl pt-16">Portfolio</div>
        <Divider />

        <div className="flex flex-wrap flex-row justify-evenly gap-8 py-8">
          {projects.map((e) => {
            return <ProjectCard key={e.id} data={e}></ProjectCard>;
          })}
        </div>
      </section>
      <script type="text/javascript" src="/static/script.js"></script>
    </>
  );
}
