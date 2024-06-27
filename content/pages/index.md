---
title: CrOSSD
blocks:
  - tagline: CrOSSD
    headline: Towards a Critical Open-Source Software Database
    text: >
      The research project CrOSSD

      aims to create a database of OSS projects and evaluate their

      "health" status using both quantitative and qualitative metrics.


      Open source software (OSS) is used in countless companies and public
      agencies, however, there is currently no efficient way to view or
      automatically check the health of OSS.


      Our goal is to assess the status quo regarding the "health" of
      (especially:

      critical) OSS projects and make a contribution to the transparent

      and critical evaluation of open-source software.


      #### How does it work?


      Quantitative & qualitative metrics are to be applied:


      * *Quantitative & automated:* Crawling of meta-information (e.g.
      contributors, commits, activity), analysis of dependencies.

      * *Qualitative:* sustainability/funding, activity indicators, security
      policies, etc.


      The results will provide a comprehensive view of the health of

      OSS projects, making it easier for developers, maintainers and

      stakeholders to make informed decisions.


      \[This
      project]\([https://www.netidee.at/crossd](https://www.netidee.at/crossd))
      is funded via netidee 2022 (project call #17).
    image:
      src: /uploads/pexels-markus-winkler-12081252.webp
      alt: open source
    color: tint
    _template: hero
  - body: >
      # Project Architecture


      ![CrOSSD architecture](/uploads/architecture.drawio.svg)


      Our architecture consists of several components:


      ### Data collection


      Gathers metadata from various sources such

      as code-hosting platforms, financial reports, and community engagement
      data.


      ### Metrics assessment


      Analyzes the collected data and generates

      scores reflecting the health of OSS projects in different domains.


      ### Project health database


      Continuously monitors and updates

      the metrics assessment.


      ### Integration & UI


      Results are displayed on a user-friendly web

      platform, planned integration with other tools and platforms.
    color: ''
    _template: content
  - items:
      - icon:
          color: red
          style: float
          name: shield
        title: OSS Health
        text: |
          * Quantitative and qualitative metrics
          * Crawling of meta-information (such as contributors and commits)
          * Analysis of dependencies on other software projects
          * Sustainability and/or existing funding
          * Compliance with security policies
      - icon:
          color: blue
          style: float
          name: code
        title: Results
        text: >
          * Concept for assessing the health of OSS projects.

          * Platform that provides continuous monitoring and evaluation of the
          metrics of a corpus of OSS projects.
    color: tint
    _template: features
  - body: >
      ## Publications


      > Tobias Dam, Lukas Daniel Klausner, and Sebastian Neumaier. 2023.
      **Towards a Critical Open-Source Software Database.** In Companion
      Proceedings of the ACM Web Conference 2023 (WWW '23 Companion).
      Association for Computing Machinery, New York, NY, USA, 156–159.
      [https://doi.org/10.1145/3543873.3587336](https://doi.org/10.1145/3543873.3587336)


      ######


      > Tobias Dam and Sebastian Neumaier. 2023. **Towards Measuring
      Vulnerabilities and Exposures in Open-Source Packages.** Proceedings of
      the 5th International Data Science Conference - iDSC2023.
      [https://doi.org/10.48550/arXiv.2206.14527](https://doi.org/10.48550/arXiv.2206.14527)
    color: default
    _template: content
---

