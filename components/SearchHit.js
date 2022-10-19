import { Highlight } from 'react-instantsearch-hooks-web'

export default function SearchHit({ hit }) {
  return (
    <article className="spacing-x-4 flex">
      <h1>
        <Highlight attribute="title" hit={hit} />
      </h1>
      <p>{hit.summary}</p>
      <p>
        <Highlight attribute="tags" hit={hit} />
      </p>
    </article>
  )
}
