import { Column, Row } from '@carbon/react'
import PButton from '~/components/pbutton'
import PText from '~/components/ptext'
import SelectedBlockLayout from '~/components/selected_block_layout'

export default function PHero() {
  return (
    <div className="w-full bg-white">
      <div className="page-margin grid grid-cols-1 md:grid-cols-2 py-16 px-4 gap-8">
        <div className="flex flex-col gap-28">
          <div>
            <PText variant="h1" value="Create content-driven landing page in record time." />
          </div>
          <div className="flex flex-col gap-8">
            <PText
              variant="paragraph"
              value="Building landing page doesn’t have to be rocket science. SPACING? COLOR? ALIGNMENT? It just doesn’t matter."
            />
            <div>
              <div className="flex flex-col md:flex-row !gap-4">
                <PButton variant="primary" value="Get Started" />
                <PButton variant="tertiary" value="How it works" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-full h-full"></div>
      </div>
    </div>
  )
}
