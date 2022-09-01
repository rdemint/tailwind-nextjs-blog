import { supabase } from '@/lib/utils/supabaseClient'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export async function getStaticProps() {
  let { data: concepts, error } = await supabase.from('Concepts').select('*')

  return {
    props: { concepts },
  }
}

export default function Concepts({ concepts }) {
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="QMS concepts explained" />
      <div>
        <h1 className="p-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl">
          QMS concepts explained
        </h1>
        <ul className="container">
          {concepts.map((concept) => (
            <li key={concept.id} className="p-1">
              {concept.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
