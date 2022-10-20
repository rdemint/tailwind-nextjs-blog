import { useState, Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { DocsNavList } from '@/data/docs/docsNavList'
import SearchModal from '@/components/SearchModal'
import { XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function NavItems() {
  return (
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
  )
}

export default function SideBarNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <section id="sidebars">
      <button
        type="button"
        className="focus:ring-primary border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <section id="mobile-sidebar">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col overflow-y-auto overflow-x-hidden bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div>
                    <NavItems />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </section>
      <section id="desktop-sidebar">
        <div className="t-0 sticky hidden h-full w-96 pl-4 md:block">
          <div className="m-2">
            <SearchModal />
          </div>
          <div className="flex flex-grow flex-col overflow-y-auto border-gray-200">
            <div className="flex flex-grow flex-col">
              <NavItems />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
