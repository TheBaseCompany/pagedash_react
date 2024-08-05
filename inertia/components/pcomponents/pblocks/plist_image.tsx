import PText from '~/components/ptext'


export default function PListImage() {
  return (
    <div className="bg-white">
      <div className="p-8 page-margin flex flex-col gap-8">
        <PText value="Trusted by companies around the world" />
        <div className="flex gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return <div className="w-36 h-16 bg-gray-300"></div>
          })}
        </div>
      </div>
    </div>
  )
}
