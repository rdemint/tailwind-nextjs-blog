import ActionItem from '@/components/docs/ActionItem'

export default function Subtask({ actionitem, children }) {
  return (
    <div className="rounded border-2 border-rose-500 px-2">
      <ActionItem>{actionitem}</ActionItem>
      <div className="mt-2 p-2 tracking-tight">{children}</div>
    </div>
  )
}
