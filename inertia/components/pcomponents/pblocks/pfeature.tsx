import PButton from '~/components/pbutton'
import PText from '~/components/ptext'
import SelectedBlockLayout from '~/components/selected_block_layout'
import PLink from './plink'

export default function PFeature() {
  return (
    <div className="bg-white w-full">
      <div className="page-margin grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-8">
        <div>
          <PText variant="h1" value="Every business starts with a landing page."></PText>
        </div>
        <div className='flex flex-col gap-8'>
          <PText
            variant="h4"
            value="From our flagship products for enterprise hybrid cloud infrastructure to next-generation AI, security and storage solutions, find the answer to your business challenge, and engage IBM Consulting to scale transformation and reinvent how your business works with AI."
          ></PText>
          <PLink value="Learn how to start business with a website" />
        </div>
      </div>
    </div>
  )
}
