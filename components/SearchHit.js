import { Highlight } from 'react-instantsearch-hooks-web'
import Link from 'next/link'

export default function SearchHit({ hit }) {
  return (
    <article className="m-2 border border-gray-200 p-2">
      <h1 className="font-bold">
        <Link href={hit.slug}>
          <a className="hover:text-primary-500">
            <Highlight attribute="title" hit={hit} />
          </a>
        </Link>
      </h1>
      <p className="text-sm">{hit.summary}</p>
      <p className="text-xs tracking-tight">
        <Highlight attribute="tags" hit={hit} />
      </p>
    </article>
  )
}
