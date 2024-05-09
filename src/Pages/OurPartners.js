import React, { Fragment } from 'react'
import OurPartnerData from '../API/OurPartner.json'
import Breadcrumb from '../Componentes/Breadcrumb/Breadcrumb'
import Container from '../Componentes/Container/Container'
import ZPattern from '../Componentes/ZPattern/ZPattern'
import ParagraphTextSection from '../Componentes/ParagraphTextSection/ParagraphTextSection'

const OurPartners = () => {
    return (
        <Fragment>
            <Container value='main-container BreadcrumbContainer'>
                <Breadcrumb />
            </Container>
            <Container value='main-container'>
                {OurPartnerData.ZPatternData.map((ZPatternvalue, ZPatternkey) =>
                    <ZPattern key={ZPatternkey} value={ZPatternvalue} />
                )}
            </Container>
            <Container value='main-container contentBodysection'>
                {OurPartnerData.ParagraphTextSectionData.map((SectionValue, Sectionkey) =>
                    <ParagraphTextSection key={Sectionkey} value={SectionValue} />
                )}
            </Container>
        </Fragment>
    )
}

export default OurPartners
