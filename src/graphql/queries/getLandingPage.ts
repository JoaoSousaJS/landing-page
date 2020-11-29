const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      image {
        url
        alternativeText
      }
      button {
        label
        url
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      title
      description

      image {
        url
      }
    }
  }

  fragment sectionTechList on LandingPage {
    sectionTech {
      title
      techIcons {
        title
        icon {
          url
          alternativeText
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricingBox on LandingPage {
    pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits
      button {
        url
        label
      }
    }
  }

  fragment sectionAbousUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        name
        role
        description
        socialLinks {
          url
          title
          id
        }
        photo {
          alternativeText
          url
        }
      }
    }
  }

  fragment sectionReviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        photo {
          url
        }
      }
    }
  }

  fragment sectionFaq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_Pge {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTechList
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...pricingBox
      ...sectionAbousUs
      ...sectionReviews
      ...sectionFaq
    }
  }
`
export default GET_LANDING_PAGE
