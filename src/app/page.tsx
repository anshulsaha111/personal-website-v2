import {
  Header,
  Hero,
  WhatIHelpWith,
  SelectedWork,
  Experience,
  PersonalProjects,
  Writing,
  WhoIAm,
  Contact,
} from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIHelpWith />
        <SelectedWork />
        <Experience />
        <PersonalProjects />
        <Writing />
        <WhoIAm />
        <Contact />
      </main>
    </>
  )
}
