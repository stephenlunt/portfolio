import {
  SiPython,
  SiJavascript,
  SiJquery,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiPostgresql,
  SiNginx,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFlask,
  SiSqlite,
  SiTypescript,
  SiCloudflare,
  SiRedis
} from "react-icons/si"
import { FaCode } from "react-icons/fa"

export enum ProjectStackList {
  Python = "Python",
  JavaScript = "JavaScript",
  jQuery = "jQuery",
  HTML = "HTML",
  CSS = "CSS",
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
  Redis = "Redis"
}

type Props = { tech: ProjectStackList }

export function StackIcon({ tech }: Props) {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-2 bg-zinc-900/30 max-w-fit px-2 py-1 border border-zinc-700 rounded-md">
      <IconSwitcher tech={tech} />
      <span>{tech}</span>
    </div>
  )
}

function IconSwitcher({ tech }: Props): React.ReactNode {
  switch (tech) {
    case ProjectStackList.Python:
      return <SiPython />
    case ProjectStackList.JavaScript:
      return <SiJavascript />
    case ProjectStackList.jQuery:
      return <SiJquery />
    case ProjectStackList.HTML:
      return <SiHtml5 />
    case ProjectStackList.CSS:
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
    default:
      return <FaCode />
  }
}
