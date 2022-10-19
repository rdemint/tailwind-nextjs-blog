export default function QdocList({ docs, children }) {
  return (
    <div>
      <p>Gather the following for this task.</p>
      <ul>
        {docs.map((doc) => {
          return (
            <li key={doc} className="pl-1">
              {doc}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
