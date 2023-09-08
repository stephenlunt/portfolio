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
  SiTypescript
} from "react-icons/si"
import { FaCode } from "react-icons/fa"

export enum ProjectStackList {
  Python,
  JavaScript,
  jQuery,
  HTML,
  CSS,
  Docker,
  Postgres,
  nginx,
  Django,
  React,
  TailwindCSS,
  NextJs,
  Flask,
  SQLite,
  TypeScript
}

type Props = { tech: ProjectStackList }

export function StackIcon({ tech }: Props) {
  return (
    <div className="bg-green-500/80">
      <IconSwitcher tech={tech} />
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
    default:
      return <FaCode />
  }
}
