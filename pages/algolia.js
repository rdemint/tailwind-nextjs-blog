import { Hits } from 'react-instantsearch-hooks-web'
import SearchHit from '@/components/SearchHit'
import AlgoliaSearchBox from '@/components/AlgoliaSearchBox'
import { useState, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SearchModal } from '@/components/SearchModal'

export default function Algolia() {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const handleSearchClick = () => {
    setOpen(true)
  }

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        onClick={handleSearchClick}
        className="rounded border-gray-500"
        placeholder="Search"
      />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Search the docs
                      </Dialog.Title>
                    </div>
                  </div>
                  <div className="spacing-x-4 flex flex-row items-center justify-between">
                    <AlgoliaSearchBox />
                    <button
                      type="button"
                      className="m-2 inline-flex justify-center rounded border bg-white p-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                  <Hits />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
