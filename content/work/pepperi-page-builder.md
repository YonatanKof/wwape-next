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

Though custom web pages can offer our clients maximum flexibility in design and functionality, they had multiple issues when it comes to business goals and product.

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


## Research

We uses several research techniques that I'll review shortly. And although I wrote the as an ordered list, in actuality they were a cyclic proceed were one output effected another input. I'll used methods of *discovery*, *exploring* and *testing* (for the meanwhile I'll leave out methods of optimisations).

### 1. Field studies

Before diving into new solutions, we examined existing implementations in the field. This hands-on approach provided insights from real-world usage of custom homepages among our clients, offering authentic examples of how businesses were already solving their needs.

::GridBlockTwo{frOne="3fr" frTwo="4fr" gap="var(--space-l)"}
:::GridUnit
#### Premise

Field studies are great in order to understand the current state.
As mentioned, we had a few clients with custom homepages. Reviewing their pages, we can easily see the usage patterns and users' needs.
This is nice for two reasons: 
:::
:::GridUnit
#### Takeaways

1. The custom homepage pages underwent a proper process where a PRD and a UX flow were carried out following inquiries with the client.
2. These pages were mature with sufficient time to grow and show their true usage and intent.
So, we came to this initiative with a lot of information from the get-go that easily helped us with creating the initial requirements.
:::
::

### 2. Users & stakeholder interviews

Understanding diverse perspectives was crucial for this project's success. We needed insights from those who would build, sell, customize, and ultimately use the Page Builder. This led us to create an interview process that brought together key stakeholders from across our ecosystem.

::GridBlockTwo{frOne="3fr" frTwo="4fr" gap="var(--space-l)"}
:::GridUnit
#### Undertaking
We formed a diverse *steering committee* including:
- Development team
- Product team
- Professional Services
- Pre-sales
- Partners
- Selected clients
:::
:::GridUnit

#### Research process
1. Presented comparative research findings [(↓)](#comparative-research){target="_self" .sup}
2. Tested popular page builders services like *Wix*, *Squarespace*, *Elementor* and *Tilda*.

#### Evaluation methods
1. Observed *steering committee* reactions
2. Conducted discussions on likes, dislikes, and rationales
:::
::

This approach provided valuable insights into user preferences and potential feature priorities.

### 3. Card sorting

After gathering data from field studies and interviews, we needed to organize this information effectively. Card sorting is an ideal method to structure our findings and validate our understanding with stakeholders. This approach helped bridge the gap between raw data and actionable insights.

::GridBlockTwo{frOne="3fr" frTwo="4fr" gap="var(--space-l)"}
:::GridUnit
#### Process

In order to manage the information, we conducted a few card sorting sessions with our *steering committee*. This cost-effective research method helps us conveniently form the data into an organized and manageable structure.
:::
:::GridUnit
#### Takeaways

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

### 4. Competitive analysis

Page builders are not new to the market - many successful products already exist in this space. By analyzing these solutions, we aimed to learn from established players while identifying opportunities to better serve our specific B2B audience's needs.

::GridBlockTwo
:::GridUnit

#### Process

In my UX research process, I always make sure to conduct a UX competitive analysis. I find it's an opportunity for me to identify what works well, learn from others' mistakes, and spot potential gaps that could give our product a competitive edge.

One of the aspects I enjoy, is how it enhances my understanding of our users. By examining our competitors' products from our customers' perspective, I'm able to develop a deeper sense of empathy. This helps me uncover what truly our users and pinpoint their pain points more accurately.

:::
:::GridUnit

#### Takeaways

- Understand ways in which competitors in our problem space solved similar issues. 
- Understand possible solution 
- Expand our product vocabulary.
- Identify different product entities like target audience, what are the core features and unique selling points, types of **responsive** design support, what are the content blocks, different approaches to he user interface, customization level, pricing tiers, value for money, and popularity of each product.

:::
::

#### Additional info
In my competitive analysis research I've constructed these two documents, be sure to check them out.

::GridBlockTwo
:::GridUnit
::::PrettyLink
---
title: 'Research: Competitive analysis'
desc: Visit the Notion page by clicking here 
url: https://www.notion.so/Research-664a427a29f6458081434a92cbc4ffc7
icon: 🕵️

---
::::
:::

:::GridUnit
::::PrettyLink
---
title: 'Research: Other layouts + Libraries'
desc: Visit the Notion page by clicking here
url: https://www.notion.so/Page-Layout-Builders-b4eb3bc4012c43f29a3f4101560c0c84
icon: 📐
---
::::
:::
::


### 5. User testing

Having gathered insights from research, we moved to validate our design concepts through hands-on testing. We adopted an iterative approach, starting with basic wireframes and progressively moving to more refined designs. This method enabled us to validate assumptions and gather feedback at every stage of development.

::GridBlockTwo
:::GridUnit
#### Process

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
#### Takeaways

This iterative process allowed us to:
- Validate design concepts early
- Incorporate stakeholder feedback efficiently
- Identify and address usability issues
- Ensure the final design met user requirements

::::lazy-img
---
src: /work/pepperi-page-builder/user-testing.webp
thumbhash: +QcKBIJmd4iAiIeAh3E2oJP19w
width: 750
height: 1200
alt:
desc: High-fidelity prototypes in use
---
::::
:::
::

## High-fidelity Designs

Our high-fidelity designs provide a comprehensive overview of the Page Builder's core functionalities and user interface. Below, we showcase key components of both page-level elements and specific page blocks.

### Page-level Elements

#### Pages Manager
A central hub to overview for pages: create from scratch or from a template, edit, and delete.
::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
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

#### Page Layout
Customize the page structure with a drag-and-drop interface and set design with, sections, sub-section, and design properties you can edit in the page editor.

::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
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

#### Hide Sections & Page Preview 
Sometimes, what works in a desktop view doesn't look as sharp on a mobile device or the other way around. The Hide Sections & Page Preview will let you remedy and examine it in no-time. 
::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
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

#### Page Sections
FVor fine grain design control the page sections enables customizable layouts with adjustable sub-sections, spacing, and responsive settings.

::GridBlockTwo{frOne="2fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
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

#### Slideshow block

> Essential for showcasing promotions and new products, allowing B2B clients to create engaging, time-sensitive content for their buyers.

##### Slideshow features

 - Edit slide content like titles and text, image, buttons size and type
 - Set slide design like overlay & text color, image & text position & size 
 - Control slideshow design attributes like height, transition, controllers 
 - Set logic and flows by role

::GridBlockTwo{frOne="4fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
##### Slideshow in use
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Slideshow.webp
width: 1366
height: 768
alt: 
desc: Slideshow in Page Builder
marginBlockStart: var(--space-xs)
---
::::

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Slideshow-ArrowsControllersOrientations.webp
width: 1600
height: 931
alt: 
desc: Slideshow with different Arrows & Controllers styles, Orientations use of Overlays, gradients and images.
---
::::
:::
:::GridUnit 
##### Slideshow editors

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Slideshow-Editor.webp
width: 928
height: 1991
alt: 
desc: Slideshow editors, <strong>Design</strong> and <strong>Content</strong> tabs
borderRadius: var(--border-radius-xs)
marginBlockStart: var(--space-xs)
---
::::
:::
::

#### Gallery block

> Optimal for showcasing product or brands. With customizable layouts and design features, this helps B2B sellers display their catalog in visually appealing grids and collections.

##### Gallery features
- Grid layout and design options
- Edit content and logic

::GridBlockTwo{frOne="4fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit
##### Gallery in use
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Gallery.webp
width: 1440
height: 900
alt: Galley block in use
desc: Galley block in use
marginBlockStart: var(--space-xs)

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
##### Gallery editors
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Gallery-Editor.webp
width: 928
height: 1145
alt: 
desc: Gallery editors, <strong>Design</strong> and <strong>Content</strong> tabs
borderRadius: var(--border-radius-xs)
marginBlockStart: var(--space-xs)
---
::::

:::
::

#### Banner block

> Used for highlighting key messages, seasonal offers, and category promotions, the Banner blocks are is an optimal way for B2B sellers to communicate with buyers.

##### Banner features
- Custom icons and text types
- Call-to-action logic integration

::GridBlockTwo{frOne="4fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit
##### Banner in use
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Banner.webp
width: 1287
height: 1048
alt: Galley block in use
desc: Galley block in use
marginBlockStart: var(--space-xs)
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
##### Banner editors
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Gallery-Editor.webp
width: 928
height: 1145
alt: Banner editors, Design and Content tabs
desc: Banner editors, <strong>Design</strong> and <strong>Content</strong> tabs
borderRadius: var(--border-radius-xs)
marginBlockStart: var(--space-xs)
---
::::

:::
::

#### Buttons block
> Drive buyer action with clear calls-to-action, linking to catalogs, promotions, external sources or specific product categories, essential for B2B navigation and conversion.

##### Buttons features 

- Style customization: alignment, size, colors, icons and positioning 
- Set button type:
  - Solid – For CTA and to draw focus
  - Subtle – General purpose
  - Outline – Used to suggest secondary action.
- Action linking:
  - Add events
  - Add counter chip

::GridBlockTwo{frOne="4fr" frTwo="3fr" gap="var(--space-m)"}
:::GridUnit 
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Buttons.webp
width: 1440
height: 900
alt: The Buttons block in use
desc: The Buttons block in use
borderRadius: var(--border-radius-xs)
---
::::
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Buttons-Combination.webp
width: 1440
height: 804
alt: Different combinations possible with the Buttons block
desc: Different combinations possible with the Buttons block
borderRadius: var(--border-radius-xs)
---
::::


:::
:::GridUnit
::::BaseImage
---
src: /work/pepperi-page-builder/builder/Buttons-Editor.webp
width: 928
height: 1320
alt: The Buttons block editors
desc: The Buttons block editors
borderRadius: var(--border-radius-xs)
---
::::
:::
::

#### Additional blocks

::GridBlockTwo{gap="var(--space-m)"}
:::GridUnit 

##### Rich text block
Ideal for detailed product descriptions, announcements, and unstructured content, the Rich text block allows clients to communicates crucial B2B information.

- Text formatting tools
- Media embedding options

::::BaseImage
---
src: /work/pepperi-page-builder/builder/RichText.webp
width: 1440
height: 900
alt: Rich text block in use
desc: Rich text block in use
borderRadius: var(--border-radius-xs)
---
::::

##### Chart block
A tool to help buyers make data-driven purchasing decisions by visualizing sales data, order history, and inventory trends. 

- Using data-viz from Pepperi Dashboards
- Chart type selection

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Charts.webp
width: 1440
height: 900
alt: Charts blocks in use
desc: Charts blocks in use
borderRadius: var(--border-radius-xs)
---
::::
:::
:::GridUnit
##### Filters block
Streamlines product discovery with quick-access filters, allowing buyers to jump directly to relevant categories, promotions, or frequently ordered items from the homepage.

- Product filtering options
- User-friendly interface

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Filter.webp
width: 1440
height: 900
alt: Filter block in use
desc: Filter block in use
borderRadius: var(--border-radius-xs)
---
::::
##### Live chat integration block
Enables direct communication between buyers and Pepperi clients, providing real-time support for order inquiries and product questions.

- Chat interface customization
- Integration with existing systems

::::BaseImage
---
src: /work/pepperi-page-builder/builder/Chat.webp
width: 1440
height: 900
alt: Chat block in use
desc: Chat block in use
borderRadius: var(--border-radius-xs)
---
::::
:::
::


These high-fidelity designs represent the culmination of our research, user testing, and iterative design process. They showcase the intuitive and powerful features of the Page Builder, enabling users to create sophisticated, custom pages with ease.


## Success stories

The Page Builder's success can be measured through multiple lenses, from internal adoption to client impact. Here's how we evaluated the project's effectiveness:

### Indicators

#### Internal validation (Dogfooding)
- Successfully implemented across Pepperi's own digital properties
- Team adoption for creating and managing internal pages
- Continuous feedback loop from internal users

#### Market adoption
- Strong client uptake across different industries
- Increasing demand for Page Builder functionality
- Positive feedback from new and existing clients

### Transforming homepage creation
One of our clients' top priorities is communicating their brand and business needs through custom homepages. Previously, Pepperi's approach required creating pages from scratch, making content management dependent on *Professional Team* developers. The Page Builder has transformed this process.

### Quantitative impact

#### Sales growth
- Created new revenue stream through Page Builder offerings
- Steady increase in demand from existing clients
- Attraction of new clients specifically for this feature

#### Resource optimization
- Eliminated PS team's development burden for custom webpages
- Shifted content management from PS team to clients
- Reduced technical debt from maintaining custom solutions

#### Usage metrics
- Strong adoption among both business users (producers) and buyers (consumers)
- Independent content management by clients
- Growing template library from real use cases
- Increased page creation and modification frequency
- Reduced support tickets for page modifications

### Qualitative feedback

#### Administrator insights
Interviews with PS teams, admins, and IT personnel reveal that Page Builder is:
- Significantly reducing technical overhead
- Eliminating bottlenecks in page updates
- Making maintenance more manageable and predictable

#### Business user feedback
Sales and brand managers report that Page Builder:
- Speeds up campaign launches from weeks to hours
- Gives them direct control over their content
- Enables quick response to market opportunities
- Makes brand consistency easier to maintain

#### End-user experience
Buyers and sales representatives confirm that pages are:
- More engaging and easier to navigate
- Consistently up-to-date with latest offerings
- Better organized for their specific needs
- Loading faster than custom-coded pages

### Key achievements
- Empowered clients with independent content management
- Reduced dependency on technical teams
- Faster time-to-market for new pages and campaigns
- Consistent brand presentation across client pages
- Scalable solution for growing business needs

## Next

One of our clients top priorities is to communicate their brand and business needs to their clients via a custom homepage. Pepperi’s legacy approach of creating a custom homepage from scratch can make content management challenging if not problematic, for it’s dependent on the *Professional Team* developers. 

The *Page Builder* addresses this issue by enabling our clients to modify, add, and design content on the flay. Furthermore, we can now tailor pages based on roles and business requirements.

The *Page Builder* provides users with control over the page layout, and content is edited using *content blocks*. These blocks include Slideshows, Galleries, Charts, Forms, Rich Text, Banners, Buttons, Filters, Search, with future additions like Chat, Categories, Stack layout, and HTML block.