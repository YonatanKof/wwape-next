---
title: 'Pepperi Page Builder'
author_name: 'Yonatan Ben Knaan'
date: '2030-01-01'
updated: ''
cover_image: '/work/pepperi-page-builder/pepperi-page-builder-tn.webp'
cover_image_height: '395'
cover_image_thumbhash: 'MAgOBYD4dmh3l2h/k4eIdlCjNFAJ'
social_image: '/work/pepperi-page-builder/pepperi-page-builder-social.jpg'
image_alt: ''
description: 'A design tool for non-designers to manage, build, and edit custom webpages with a no-code interface'
tags: ['Creative']
---

::MainImg
---
desc: Some examples of our custom built homepages
---
::

With *Pepperi Page Builder*, B2B clients can easily build, edit, and design web pages. This tool enables clients to promote, present, and sell with full *workflow* control, leveraging *buyer profiles* while using a no-code interface, all at their own convenience.


## Project motivation
Pepperi clients need custom homepages for their Buyers (end-users) to showcase:
- Promotions and sales
- Credit lines
- New products
- Product categories
- Other B2B eCommerce features

They also require:
- On-brand design
- Full design control
- Ability to edit content independently
- Flexibility to make changes on their own schedule

<!-- Pepperi clients want to show Buyers (our clients’ clients) custom homepages. Where they can communicate promotions, sales, credit lines, new products, product categories, and all things related to B2B eCommerce.
 -->
<!-- Moreover, they want to do it on brand, with full design control. They want to edit the content themselves and do it on their own time.  -->


<!-- ::GridBlockTwo{frOne="1fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit
#### Pages Manager
Some text here
:::
:::GridUnit

::::TiltImage
---
img1: /work/pepperi-page-builder/builder/0-PagesManager-3-Populated.webp
img3: /work/pepperi-page-builder/builder/0-PagesManager-2-Templates.webp
img2: /work/pepperi-page-builder/builder/0-PagesManager-1-Empty.webp
desc: Pages Manager flow; From empty state to the templates for the populated list
---
::::
:::
:: -->

## The problem

::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit
Though custom web pages can offer our clients maximum flexibility in design and functionality, they had multiple issues when it comes to business goals and product.
:::
:::GridUnit
- The pages aren't consistent in design
- Not aligned with *Pepperi DS*
- Waste of *Professional Services* team time
- Un-synced with other Pepperi products & features like:
  - Pepperi theme editor
  - Pepperi header builder
  - Native app integration
  - Version updates
- Can't be built or maintained by the clients
- Can be used only by FS team causing dependency and scalability issues
:::
::

## Validating Assumptions

Before embarking on any major initiative, it's crucial to validate assumptions. This process helps to reduce risks, align with user needs, ensure resource efficiency and build stakeholder confidence.

::GridBlockTwo{gap="var(--space-m)"}
:::GridUnit
We confirmed client demand for this feature through:

1. Existing client behavior:
   - Some clients built and maintained custom webpages
   - PS team involvement in designing custom homepages – *[See attached image]{style="color: var(--color-brand-slight);"}*

2. Stakeholder feedback:
   - Positive response from leading clients
   - Warm reception to roadmap presentation
   - Sales team confirmation of financial viability
   - Marketing team's landing page traction

:::
:::GridUnit
::::TiltImage
---
img1: /work/pepperi-page-builder/Old-Blackcrows.webp
img2: /work/pepperi-page-builder/Old-Dermalogica.webp
img3: /work/pepperi-page-builder/Old-Chanel.webp
desc: Some custom built homepages – Great for our clients, bad for our business 
---
::::
:::
::

These findings support our decision to develop a custom page builder, empowering clients to easily create desired features.

::QuoteBig
---
title: So after years of anticipation we decided to launch the <strong>Page Builder</strong> project
---
::


<!-- ![Some examples of our custom built homepages](/work/pepperi-page-builder/Some_examples_of_our_custom_built_homepages.webp) -->

## Research

We uses several research techniques that I'll review shortly. And although I wrote the as an ordered list, in actuality they were a cyclic proceed were one output effected another input. I'll used methods of *discovery*, *exploring* and *testing* (for the meanwhile I'll leave out methods of optimisations).

### 1. Field studies
This is great in order to understand the current state.
As mentioned, we had a few clients with custom homepages. Reviewing their pages, we can easily see the usage patterns and users' needs.
This is nice for two reasons: 
1. The custom homepage pages underwent a proper process where a PRD and a UX flow were carried out following inquiries with the client.
2. These pages were mature with sufficient time to grow and show their true usage and intent.
So, we came to this initiative with a lot of information from the get-go that easily helped us with creating the initial requirements.

### 2. Users & stakeholder interviews
We formed a diverse *steering committee* including:
- Development team
- Product team
- Professional Services
- Pre-sales
- Partners
- Selected clients

Research process:
1. Presented comparative research findings [(↓)](#comparative-research){target="_self" .sup}
2. Tested popular page builders:
   - Wix
   - Squarespace
   - Elementor
   - Tilda

Evaluation methods:
1. Observed *steering committee* reactions
2. Conducted discussions on likes, dislikes, and rationales

This approach provided valuable insights into user preferences and potential feature priorities.

### 3. Card sorting
::GridBlockTwo{frOne="3fr" frTwo="4fr" gap="var(--space-l)"}
:::GridUnit
In order to manage the information, we conducted a few card sorting sessions with our *steering committee*. This cost-effective research method helps us conveniently form the data into an organized and manageable structure.
:::
:::GridUnit
Card sorting helped us by:
1. Understanding mental models and organizing entities.
2. Structuring information and navigation architecture.
3. Gathering user-centric terminology and language.
4. Informing content strategy: Helps prioritize content and identify gaps or redundancies.
:::
::
::lazy-img
---
src: /work/pepperi-page-builder/card-sort.webp
thumbhash: +AcGFIKqgqpthoZvqqavNz0FSA
alt: Card sorting session output
desc: Card sorting session output
---
::

Show this page [Research](https://www.notion.so/Research-664a427a29f6458081434a92cbc4ffc7?pvs=21) and this page [Page & Layout Builders](https://www.notion.so/Page-Layout-Builders-b4eb3bc4012c43f29a3f4101560c0c84?pvs=21) 

### 4.Competitive analysis

::GridBlockTwo
:::GridUnit
In my UX research process, I always make sure to conduct a UX competitive analysis. I find it's an opportunity for me to identify what works well, learn from others' mistakes, and spot potential gaps that could give our product a competitive edge.

One of the aspects I enjoy, is how it enhances my understanding of our users. By examining our competitors' products from our customers' perspective, I'm able to develop a deeper sense of empathy. This helps me uncover what truly our users and pinpoint their pain points more accurately.

:::
:::GridUnit

#### Takeaways:

- Understand ways in which competitors in our problem space solved similar issues. 
- Understand possible solution 
- Expand our product vocabulary.
- Identify different product entities like target audience, what are the core features and unique selling points, types of **responsive** design support, what are the content blocks, different approaches to he user interface, customization level, pricing tiers, value for money, and popularity of each product.

:::
::


### 5.User testing
::GridBlockTwo
:::GridUnit
Our user testing process followed a progressive approach to refine our design:

1. Low-fidelity mockups:
   - Created wireframes for initial review
   - Presented to steering committee members
   - Gathered preliminary feedback

2. Direction setting:
   - Incorporated insights from previous research phases
   - Established general design direction

3. High-fidelity prototypes:
   - Developed interactive mockups
   - Allowed steering committee to engage with the design

4. Design refinement:
   - Fine-tuned based on interactive testing feedback
   - Ensured alignment with user needs and expectations
:::
:::GridUnit
This iterative process allowed us to:
- Validate design concepts early
- Incorporate stakeholder feedback efficiently
- Identify and address usability issues
- Ensure the final design met user requirements

*[High-fidelity prototypes]{style="color: var(--color-brand-slight);"}*
::lazy-img{src="/work/pepperi-page-builder/user-testing.webp" thumbhash="+QcKBIJmd4iAiIeAh3E2oJP19w" width="750" height="1200" alt="" desc=""}
::
:::
::

## High-fidelity Designs

Our high-fidelity designs provide a comprehensive overview of the Page Builder's core functionalities and user interface. Below, we showcase key components of both page-level elements and specific page blocks.


### Page-level Elements

::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
#### Pages Manager
- Overview of all pages
- Create, edit, and delete pages
:::
:::GridUnit
::::TiltImage
---
img1: /work/pepperi-page-builder/builder/1.1-PagesManager-Empty.webp
img2: /work/pepperi-page-builder/builder/1.2-PagesManager-Templates.webp
img3: /work/pepperi-page-builder/builder/1.3-PagesManager-Populated.webp
desc: <strong>Pages Manager:</strong> Central hub for page overview, creation, editing, and deletion
alt: Pages Manager high-fidelity design
---
::::
:::
::

::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
#### Page Layout
- Layout structure and customization options
- Drag-and-drop sections and block components 
- Set padding, gaps and page width
- Set page info and logic by lifecycle hooks
:::
:::GridUnit
::::TiltImage
---
img1: /work/pepperi-page-builder/builder/2.1-PageLayout-Design.webp
img2: /work/pepperi-page-builder/builder/2.2-PageLayout-AddGalleryBlock.webp
img3: /work/pepperi-page-builder/builder/2.3-PageLayout-AddBanner.webp
desc: <strong>Page Layout:</strong> Customizable structure with a drag-and-drop interface
alt: Page Layout high-fidelity design
---
::::
:::
::

::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
#### Hide Sections & Page Preview 
- Real-time preview of page changes
- For all responsive views
- Hide sections per view for grater layout control 
:::
:::GridUnit
::::TiltImage
---
img1: /work/pepperi-page-builder/builder/3.2-Preview-Mobile.webp
img2: /work/pepperi-page-builder/builder/3.1-HideSection.webp
img3: /work/pepperi-page-builder/builder/3.3-Preview-Desktop.webp
desc: <strong>Hide Sections & Page Preview:</strong> Real-time, responsive preview with section visibility control across views.
alt: Hide Sections & Page Preview high-fidelity design
---
::::
:::
::

::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
#### Page Sections
- Section types and arrangements
- Set sub-sections and spilt types 
- Edit gaps and padding
- Set responsive break points and dynamic height
:::
:::GridUnit
::::TiltImage
---
img1: /work/pepperi-page-builder/builder/4.2-SectionPadding.webp
img2: /work/pepperi-page-builder/builder/4.3-SubSection.webp
img3: /work/pepperi-page-builder/builder/4.1-EditSection.webp
desc: <strong>Page Sections:</strong> Customizable layouts with adjustable sub-sections, spacing, and responsive settings.
alt: Page Sections high-fidelity design
---
::::
:::
::

### Page Blocks

#### Slideshow

::GridBlockTwo{gap="var(--space-m)"}
:::GridUnit 

 - Set Slide content like titles and text, image, buttons size and type
 - Set Slide design like overlay & text color, image & text position & size 
 - Set Slideshow design attributes like height, transition, controllers 
 - Set logic and flows by role

---

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Slideshow.webp
width: 1366
height: 768
alt: 
desc: Slideshow in Page Builder
---
::::

:::

:::GridUnit

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Slideshow-Editor.webp
width: 928
height: 1991
alt: 
desc: Slideshow editors, <strong>Design</strong> and <strong>Content</strong> tabs
borderRadius: var(--border-radius-xs)
---
::::
:::
::

#### Gallery

::GridBlockTwo{gap="var(--space-m)"}
:::GridUnit 
- Grid layout and design options
- Edit content and logic

---

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Gallery.webp
width: 1440
height: 900
alt: Galley block in use
desc: Galley block in use
---
::::
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Gallery-Examples.webp
width: 1987
height: 1348
alt: The different combinations possible for a Galley item
desc: The different combinations possible for a Galley item
---
::::

:::

:::GridUnit

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Gallery-Editor.webp
width: 928
height: 1145
alt: 
desc: Gallery editors, <strong>Design</strong> and <strong>Content</strong> tabs
borderRadius: var(--border-radius-xs)
---
::::
:::
::

#### Banners

::GridBlockTwo{gap="var(--space-m)"}
:::GridUnit 

- Custom imagery and text overlay
- Call-to-action button integration

---

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Banner.webp
width: 1287
height: 1048
alt: Galley block in use
desc: Galley block in use
---
::::
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Banner-Example.webp
width: 928
height: 946
alt: Different combinations of a Banner item
desc: Different combinations of a Banner item
---
::::
:::
:::GridUnit
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Gallery-Editor.webp
width: 928
height: 1145
alt: Banner editors, Design and Content tabs
desc: Banner editors, <strong>Design</strong> and <strong>Content</strong> tabs
borderRadius: var(--border-radius-xs)
---
::::
:::
::

1. Buttons
   - Style customization
   - Action linking

2. Charts
   - Data input and visualization options
   - Chart type selection

3. Chat
   - Chat interface customization
   - Integration with existing systems

4. Filter block
   - Product filtering options
   - User-friendly interface

5. Rich text
   - Text formatting tools
   - Media embedding options

These high-fidelity designs represent the culmination of our research, user testing, and iterative design process. They showcase the intuitive and powerful features of the Page Builder, enabling users to create sophisticated, custom pages with ease.


## Measuring success

### Indicators

- Dogfooding
- Adoption

### Quantitative

- **Sales**
    - We’ve effectively opened a new sales category and we have seen a steady increase in demand.
- **Time**
    - The PS has stopped using their development efforts in building and maintaining  custom built webpages.
    - There was a shift in focus from managing content/workflows form the PS to the clients.
- **Usage**
    - Client are using it; both business (producers) and buyer (consumers).
    - Content management by clients
    - Template design – with every use case we created a templet to be reused

### Qualitative

- Interviews with admin users; PSs, Admins and ITs using and managing the pages built with code.
- Interviews with functional users; Sales managers, and Brand managers asking the admins for requirements form the webpages and are also the role that manage the content of the page (promotions, sales, categories, workflows, copy & images).
- Interviews with end users - Buyers and Reps.

## Next

One of our clients top priorities is to communicate their brand and business needs to their clients via a custom homepage. Pepperi’s legacy approach of creating a custom homepage from scratch can make content management challenging if not problematic, for it’s dependent on the *Professional Team* developers. 

The *Page Builder* addresses this issue by enabling our clients to modify, add, and design content on the flay. Furthermore, we can now tailor pages based on roles and business requirements.

The *Page Builder* provides users with control over the page layout, and content is edited using *content blocks*. These blocks include Slideshows, Galleries, Charts, Forms, Rich Text, Banners, Buttons, Filters, Search, with future additions like Chat, Categories, Stack layout, and HTML block.
<!-- 
![Create and manage pages](/work/pepperi-page-builder/Page_Builder-1-New_Page.webp)

Create and manage pages

![Dragging blocks into view](/work/pepperi-page-builder/Page_Builder-2-Page_Layout.webp)

Dragging blocks into view

![Managing sections](/work/pepperi-page-builder/Page_Builder-3-Sub_Section.webp)

Managing sections

![Block example – Gallery](/work/pepperi-page-builder/Page_Builder-4-Gallery.webp)

Block example – Gallery

![Block example – Buttons](/work/pepperi-page-builder/Page_Builder-6-Buttons.webp)

Block example – Buttons

![Preview mode](/work/pepperi-page-builder/Page_Builder-7-Preview.webp)

Preview mode -->