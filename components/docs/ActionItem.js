export default function ActionItem({ children }) {
  return (
    <div>
      <form>
        <input
          type="checkbox"
          className="border-2 border-rose-500 shadow shadow-rose-100 checked:bg-rose-500 hover:scale-105 focus:text-rose-500 focus:ring-rose-500"
        />
        <label className="mt-4 p-4">{children}</label>
      </form>
    </div>
  )
}
