import { useState } from 'react'
import Link from 'next/link'
import { DocsNavList } from '@/data/docs/docsNavList'
import SearchModal from '@/components/SearchModal'

export default function SideBarNav() {
  return (
    <section id="sidebar">
      <div className="t-0 sticky hidden h-full w-96 pl-4 md:block">
        <div className="m-2">
          <SearchModal />
        </div>
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
                          <div key={child.name}>
                            <h2 className="text-xl font-medium">{child.name}</h2>
                            {child.children.map((topic, i) => {
                              return (
                                <div key={topic.name} className="pl-5">
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
  )
}
