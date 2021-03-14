import React, { useCallback } from 'react'
import mockNavigationLInks from '@eviteri/eviteri-sb/const/mockData/navigationLinks.json'
import mockSocialMediaLinks from '@eviteri/eviteri-sb/const/mockData/mockSocialMediaLinks'
import mockClientLogos from '@eviteri/eviteri-sb/const/mockData/clientLogos'
import mockCardIcons from '@eviteri/eviteri-sb/const/mockData/cardIcons'
import mockOurWorkGallery from '@eviteri/eviteri-sb/const/mockData/ourWorkGallery'
import mockWhyChooseUs from '@eviteri/eviteri-sb/const/mockData/whyChooseUs'
import contactFormFields from '@eviteri/eviteri-sb/const/mockData/contactFormFields'
import contactFormFooterFields from '@eviteri/eviteri-sb/const/mockData/contactFormFooter'
import homeHeroImage from '@eviteri/eviteri-sb/assets/backgrounds/HomeHeroImage.png'
import { FormElements } from '@eviteri/eviteri-sb/typings/form'

import Header from '@eviteri/eviteri-sb/ui/Organisms/Header'
import Hero from '@eviteri/eviteri-sb/ui/Organisms/Hero'
import MessageUs from '@eviteri/eviteri-sb/ui/Organisms/MessageUs'
import OurServices from '@eviteri/eviteri-sb/ui/Organisms/OurServices'
import OurWork from '@eviteri/eviteri-sb/ui/Organisms/OurWork'
import WhyChooseUs from '@eviteri/eviteri-sb/ui/Organisms/WhyChooseUs'
import Footer from '@eviteri/eviteri-sb/ui/Organisms/Footer'
import socialMediaLinks from '@eviteri/eviteri-sb/const/mockData/mockSocialMediaLinks'
import { PageWrapper, HeroSection, WorkWithUsSection } from './StyledComponents'

const Home = () => {
  const onSubmitFormHandler = useCallback((formElements: FormElements) => {
    alert('Form Submitted')
  }, [])

  return (
    <PageWrapper>
      <Header
        data-test="ev-header"
        themeMode="dark"
        siteLogoUrl="."
        navLinks={mockNavigationLInks}
        socialMediaLinks={mockSocialMediaLinks}
        phoneNumber="7043745009"
        emailAddress="eviterif@gmail.com"
      />
      <HeroSection>
        <Hero
          data-test="ev-hero"
          themeMode="dark"
          shouldAnimate={true}
          tagLine="web development services"
          title="Your website does a lot for your business"
          description="Why not take care of it? After all, an underperforming website can leave your company in the dust. We partner with brands like yours to build, optimize, and grow sites and applications into memorable experiences that inform, inspire, and empower your customers. You're proud of the brand you've built, now you'll be proud of your website, too."
          linkLabel="View our work"
          linkUrl="#viewourwork"
          imageUrl={homeHeroImage}
        />
      </HeroSection>

      <main>
        <WorkWithUsSection
          id="workwithus"
          className="hidden"
        ></WorkWithUsSection>
        <MessageUs
          data-test="ev-message_us"
          shouldAnimate={true}
          clientLogos={mockClientLogos}
          formTitle="Work with us."
          contactFormFields={contactFormFields}
          submitButtonLabel="SUBMIT"
          onSubmitFormHandler={onSubmitFormHandler}
        />

        <div id="services" className="hidden"></div>
        <OurServices
          data-test="ev-our_services"
          shouldAnimate={true}
          title="Our Services"
          description="You deserve better than a one-size-fits-all option. We focus on one thing — building dyanmic content-driven technology that gives strength to your brand's mission and helps you deliver on your goals."
          cardIcons={mockCardIcons}
        />

        <div id="viewourwork" className="hidden"></div>
        <OurWork
          data-test="ev-our_work"
          shouldAnimate={true}
          title="Our Work"
          description="A collection of our most recent and most favorite projects that have brought maximal value and impact to our clients."
          ourWorkGallery={mockOurWorkGallery}
        />

        <div id="whyus" className="hidden"></div>
        <WhyChooseUs shouldAnimate={true} data={mockWhyChooseUs} />
        <Footer
          data-test="ev-footer"
          siteLogoUrl="."
          description="Headquartered in Charlotte, NC, our small but nimble team services start-ups, small businesses, and enterprises throughout the US and Canada. We focus on high-quality and efficient web, mobile, and WordPress development. Hablamos Espanol!"
          formTitle="Contact us."
          submitButtonLabel="SUBMIT"
          contactFormFields={contactFormFooterFields}
          onSubmitFormHandler={onSubmitFormHandler}
          socialMediaLinks={socialMediaLinks}
        />
      </main>
    </PageWrapper>
  )
}

export default Home
