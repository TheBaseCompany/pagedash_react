export default function SelectedBlockLayout({ children }: any) {
  return (
    <div className="hover:border-blue-800 hover:border-4 border-4 border-black m-2 bg-gray-200">
      {children}
    </div>
  )
}
