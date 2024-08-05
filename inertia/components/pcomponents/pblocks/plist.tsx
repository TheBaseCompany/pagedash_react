import { ClickableTile, Tile } from '@carbon/react'
import PText from '~/components/ptext'
import PLink from './plink'
import { ArrowRight } from '@carbon/icons-react'

export default function PList() {
  return (
    <div className="bg-white">
      <div className="px-8 py-16 flex flex-col gap-8 page-margin">
        <PText value="Use cases" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ClickableTile renderIcon={ArrowRight}>
            <PText variant="h5" value="Startup" />
            <br />
            <br />
            <PText variant="span" value="Create landing page for new startups" />
          </ClickableTile>
          <ClickableTile renderIcon={ArrowRight}>
            <PText variant="h5" value="Startup" />
            <br />
            <br />
            <PText variant="span" value="Create landing page for new startups" />
          </ClickableTile>
          <ClickableTile className="bg-white" renderIcon={ArrowRight}>
            <PText variant="h5" value="Startup" />
            <br />
            <br />
            <PText variant="span" value="Create landing page for new startups" />
          </ClickableTile>
          <ClickableTile renderIcon={ArrowRight}>
            <PText variant="h5" value="Startup" />
            <br />
            <br />
            <PText variant="span" value="Create landing page for new startups" />
          </ClickableTile>
          <ClickableTile renderIcon={ArrowRight}>
            <PText variant="h5" value="Startup" />
            <br />
            <br />
            <PText variant="span" value="Create landing page for new startups" />
          </ClickableTile>
          <ClickableTile className="bg-white" renderIcon={ArrowRight}>
            <PText variant="h5" value="Startup" />
            <br />
            <br />
            <PText variant="span" value="Create landing page for new startups" />
          </ClickableTile>
        </div>
        <PLink value="Get Started" />
      </div>
    </div>
  )
}
