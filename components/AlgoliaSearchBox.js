import { SearchBox } from 'react-instantsearch-hooks-web'
import SubmitIcon from '@/components/SubmitIcon'

export default function AlgoliaSearchBox() {
  return (
    <SearchBox
      placeholder="Search"
      classNames={{
        root: 'flex flex-grow',
        input:
          'rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500',
        submitIcon: 'hidden',
      }}
    />
  )
}
