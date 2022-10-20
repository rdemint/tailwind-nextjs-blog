import SideBarNav from '@/components/SideBarNav'

export default function DocsLayout({ children }) {
  return (
    <div className="flex">
      <SideBarNav />
      <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose max-w-none px-8 pt-10 pb-8">{children}</div>
      </div>
    </div>
  )
}
