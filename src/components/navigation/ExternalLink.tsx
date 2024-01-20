import { BiLinkExternal } from "react-icons/bi"

type Props = {
  href: string
  text: string
}

export default function ExternalLink({ href, text }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1"
    >
      {text} <BiLinkExternal />
    </a>
  )
}
