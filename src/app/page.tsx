import {
  Header,
  Hero,
  WhoIAm,
  WhatIHelpWith,
  SelectedWork,
  Writing,
  Skills,
  Timeline,
  Beliefs,
  Contact,
} from '@/components'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoIAm />
        <WhatIHelpWith />
        <SelectedWork />
        <Writing />
        <Skills />
        <Timeline />
        <Beliefs />
        <Contact />
      </main>
    </>
  )
}
