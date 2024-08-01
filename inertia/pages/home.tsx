import { Head } from '@inertiajs/react'
import { Button } from '@carbon/react'
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react'

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
        <SideNav aria-label="Side navigation" expanded={true} isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar />
      </Header>
      <Button>Click me</Button>

      <div className="container">
        {/* <div className="title">AdonisJS {props.version} x Inertia x React</div> */}
        <div className="title">
          {props.userName} {props.version} x Inertia x React
        </div>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the{' '}
          <a href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</a>.
        </span>
      </div>
    </>
  )
}
