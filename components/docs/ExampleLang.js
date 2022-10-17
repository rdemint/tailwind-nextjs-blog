export default function ExampleLang({ children }) {
  return (
    <div className="my-4 rounded border border-2 border-gray-500">
      <div className="bg-gray-100 px-4">Example Report Notes</div>
      <div className="my-4 p-2">{children}</div>
    </div>
  )
}
