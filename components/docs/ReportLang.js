import { useState, useRef } from 'react'
import copyTextToClipboard from '@/lib/copyTextToClipboard'

export default function ReportLang({ children }) {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopyClick = () => {
    const textContent = document.getElementById('reportlang').innerText
    copyTextToClipboard(textContent)
      .then(() => {
        setIsCopied(true)
      })

      .catch((err) => console.log(err))
  }

  return (
    <div className="my-4 rounded border border-2 border-gray-500">
      <div className="flex items-center justify-between bg-gray-100">
        <div className=" px-4">Example Report Notes</div>
        <button className="m-2 rounded bg-gray-400 p-1" onClick={handleCopyClick}>
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div id="reportlang" className="my-2 px-2">
        {children}
      </div>
    </div>
  )
}
