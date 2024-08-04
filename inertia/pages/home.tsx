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
import PButton from '~/components/pbutton';
import PText from '~/components/ptext';

export default function Home(props: { version: number; userName: string }) {
  return (
    <>
      <Head title="Homepage" />
      {props.userName}
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          // onClick={onClickSideNavExpand}
          isActive={true}
        />
        <HeaderName href="/" prefix="PAGE">
          DASH
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav aria-label="Side navigation" expanded={false} isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar />
      </Header>
      <div className="container">
        {/* <div className="title">AdonisJS {props.version} x Inertia x React</div> */}
        <PText />
        <PButton />
      </div>
    </>
  )
}
