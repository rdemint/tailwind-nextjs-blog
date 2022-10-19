import { Highlight } from 'react-instantsearch-hooks-web'

export default function SearchHit({ hit }) {
  return (
    <article className="m-2 border border-gray-200 p-2">
      <h1 className="font-bold">
        <Highlight attribute="title" hit={hit} />
      </h1>
      <p className="text-sm">{hit.summary}</p>
      <p className="text-xs tracking-tight">
        <Highlight attribute="tags" hit={hit} />
      </p>
    </article>
  )
}
