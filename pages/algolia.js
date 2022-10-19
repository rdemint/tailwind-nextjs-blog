import { Hits } from 'react-instantsearch-hooks-web'
import SearchHit from '@/components/SearchHit'
import AlgoliaSearchBox from '@/components/AlgoliaSearchBox'

export default function Algolia() {
  return (
    <div>
      <p>something else</p>
      <h1>Algolia search</h1>
      <AlgoliaSearchBox />
      <Hits hitscomponent={SearchHit} />
    </div>
  )
}
