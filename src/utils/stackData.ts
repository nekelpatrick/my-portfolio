import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Next.js", img: TbBrandNextjs },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
  { title: "TypeScript", img: SiTypescript },
  { title: "Python", img: FaPython },
];
