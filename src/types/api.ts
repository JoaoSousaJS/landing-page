export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
  button: {
    label: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string

  image: {
    url: string
    alternativeText: string
  }
}

export type TechIconsProps = {
  title: string
  icon: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type Concepts = {
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: Concepts[]
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    url: string
    label: string
  }
}

export type Authors = {
  name: string
  role: string
  description: string
  socialLinks: SocialLinks[]
  photo: {
    alternativeText: string
    url: string
  }
}

export type SocialLinks = {
  url: string
  title: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Authors[]
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
