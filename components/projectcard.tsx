import { Project } from "@/types";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";
import clsx from "clsx";
import { useEffect } from "react";
import styles from "../styles/custom.module.css";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function ProjectCard(props: { data: Project }) {
  // useEffect(() => {
  //   console.log(props.data);
  // }, []);
  return (
    <Card
      className={clsx(
        "max-w-[400px] hover:cursor-pointer p-2 min-w-[400px]",
        styles.zoom,
        styles.gloweffect
      )}
    >
      <CardHeader className="flex gap-3">
        <div className="flex justify-between w-full">
          <span className="text-2xl">{props.data.name}</span>
          <Chip
            classNames={{
              base: "bg-purple-100 text-white",
              content: "drop-shadow shadow-black ",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              {props.data.type}
            </span>
          </Chip>
        </div>
      </CardHeader>

      <CardBody className="gap-1">
        <p>{props.data.description}</p>
        <div className="flex flex-row gap-2 pt-4">
          {props.data.languages.map((x) => {
            return <Chip key={x}>{x}</Chip>;
          })}
        </div>
      </CardBody>
      <Divider />

      <CardFooter className="flex justify-center gap-1">
        <AiFillGithub />
        <Link href={props.data.link} rel="noopener noreferrer" target="_blank">
          <span className="hover:text-blue-cyan">View on Github</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
