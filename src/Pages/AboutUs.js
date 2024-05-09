import React, { Fragment } from 'react'
import Breadcrumb from '../Componentes/Breadcrumb/Breadcrumb'
import Container from '../Componentes/Container/Container'
import ZPattern from '../Componentes/ZPattern/ZPattern'
import AboutUsdata from '../API/AboutUs.json'
import ParagraphTextSection from '../Componentes/ParagraphTextSection/ParagraphTextSection'

const AboutUs = () => {
  return (
    <Fragment>
      <Container value='main-container BreadcrumbContainer'>
        <Breadcrumb />
      </Container>
      <Container value='main-container'>
        {AboutUsdata.ZPatternData.map((ZPatternvalue, ZPatternkey) =>
          <ZPattern key={ZPatternkey} value={ZPatternvalue} />
        )}
      </Container>
      <Container value='main-container contentBodysection'>
        {AboutUsdata.ParagraphTextSectionData.map((SectionValue, Sectionkey) =>
          <ParagraphTextSection key={Sectionkey} value={SectionValue} />
        )}
      </Container>
    </Fragment>

  )
}

export default AboutUs
