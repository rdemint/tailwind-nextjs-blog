import Link from 'next/link'
import { useRouter } from 'next/router'
import { DocsNavList } from '@/data/docs/docsNavList'

export default function DocsLayout({ children }) {
  const router = useRouter()
  console.log(router.asPath)
  return (
    <div className="flex">
      <section id="sidebar">
        <div className="t-0 sticky h-full w-96 pl-4">
          <div className="flex flex-grow flex-col overflow-y-auto border-gray-200">
            <div className="flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 px-2 pb-4">
                {DocsNavList.map((section, i) => {
                  return (
                    <div key={section.name}>
                      <h2 className="text-xl font-semibold">{section.name}</h2>

                      <div className="pl-3">
                        {section.children.map((child, i) => {
                          return (
                            <div key={child.slug}>
                              <h2 className="text-xl font-medium">{child.name}</h2>
                              {child.children.map((topic, i) => {
                                return (
                                  <div key={topic.slug} className="pl-5">
                                    <Link href={topic.slug}>
                                      <a className="text-md tracking-tight text-zinc-700 hover:text-zinc-900 hover:underline hover:decoration-rose-100 hover:underline-offset-2">
                                        {topic.name}
                                      </a>
                                    </Link>
                                  </div>
                                )
                              })}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose max-w-none px-8 pt-10 pb-8 dark:prose-dark">{children}</div>
      </div>
    </div>
  )
}
