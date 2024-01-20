import React from "react"
import { FaCode } from "react-icons/fa"
import {
  SiAstro,
  SiCloudflare,
  SiCss3,
  SiDjango,
  SiDocker,
  SiFlask,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMarkdown,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export enum ProjectStackList {
  Python = "Python",
  JavaScript = "JavaScript",
  jQuery = "jQuery",
  Html = "HTML",
  Css = "CSS",
  Docker = "Docker",
  Postgres = "Postgres",
  nginx = "nginx",
  Django = "Django",
  React = "React",
  TailwindCSS = "TailwindCSS",
  NextJs = "NextJs",
  Flask = "Flask",
  SQLite = "SQLite",
  TypeScript = "TypeScript",
  Cloudflare = "Cloudflare",
  Redis = "Redis",
  Astro = "Astro",
  Markdown = "Markdown",
  Go = "Go",
}

type StackListProps = { stack: ProjectStackList[] }
type StackIconProps = { tech: ProjectStackList }

export function StackList({ stack }: StackListProps) {
  return (
    <ul className="stack-list">
      {stack.map((tech, index) => (
        <StackIcon tech={tech} key={`stack-item-${index}`} />
      ))}
    </ul>
  )
}

function StackIcon({ tech }: StackIconProps) {
  return (
    <li className="flex flex-row flex-nowrap items-center gap-2 bg-zinc-900/30 border border-zinc-700 max-w-fit px-2 py-1 my-0 rounded-md cursor-default">
      <IconSwitcher tech={tech} />
      <span>{tech}</span>
    </li>
  )
}

function IconSwitcher({ tech }: StackIconProps): React.ReactNode {
  switch (tech) {
    case ProjectStackList.Python:
      return <SiPython />
    case ProjectStackList.JavaScript:
      return <SiJavascript />
    case ProjectStackList.jQuery:
      return <SiJquery />
    case ProjectStackList.Html:
      return <SiHtml5 />
    case ProjectStackList.Css:
      return <SiCss3 />
    case ProjectStackList.Docker:
      return <SiDocker />
    case ProjectStackList.Postgres:
      return <SiPostgresql />
    case ProjectStackList.nginx:
      return <SiNginx />
    case ProjectStackList.Django:
      return <SiDjango />
    case ProjectStackList.React:
      return <SiReact />
    case ProjectStackList.TailwindCSS:
      return <SiTailwindcss />
    case ProjectStackList.NextJs:
      return <SiNextdotjs />
    case ProjectStackList.Flask:
      return <SiFlask />
    case ProjectStackList.SQLite:
      return <SiSqlite />
    case ProjectStackList.TypeScript:
      return <SiTypescript />
    case ProjectStackList.Cloudflare:
      return <SiCloudflare />
    case ProjectStackList.Redis:
      return <SiRedis />
    case ProjectStackList.Astro:
      return <SiAstro />
    case ProjectStackList.Markdown:
      return <SiMarkdown />
    case ProjectStackList.Go:
      return <SiGo />
    default:
      return <FaCode />
  }
}
