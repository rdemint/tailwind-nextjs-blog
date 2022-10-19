import { SearchBox, Hits } from 'react-instantsearch-hooks-web'
import SearchHit from '@/components/SearchHit'

export default function Algolia() {
  return (
    <div>
      <p>something else</p>
      <h1>Algolia search</h1>
      <SearchBox classNames={{ root: 'm-4', input: 'rounded' }} />
      <Hits hitscomponent={SearchHit} />
    </div>
  )
}
