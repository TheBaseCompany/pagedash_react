import { Head } from '@inertiajs/react'
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react'
import PButton from '~/components/pbutton'
import PText from '~/components/ptext'
import PHero from '~/components/pcomponents/pblocks/phero'
import PFeature from '~/components/pcomponents/pblocks/pfeature'
import SelectedBlockLayout from '~/components/selected_block_layout'
import PList from '~/components/pcomponents/pblocks/plist'

export default function Home(props: { version: number; userName: string }) {
  return (
    <>
      <Head title="Homepage" />
      <div className="h-fit">
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            // onClick={onClickSideNavExpand}
            isActive={true}
          />
          <HeaderName href="/" prefix="PAGEDASH">
            [Project: pagedash.co]
          </HeaderName>
          <SideNav aria-label="Side navigation" expanded={false} isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar />
        </Header>
      </div>
      <div className="h-full">
        <SelectedBlockLayout>
          <PHero />
        </SelectedBlockLayout>
        <SelectedBlockLayout>
          <PList />
        </SelectedBlockLayout>
        <SelectedBlockLayout>
          <PFeature />
        </SelectedBlockLayout>
        <SelectedBlockLayout>
          <PFeature />
        </SelectedBlockLayout>
      </div>
    </>
  )
}
