# Perfect Bite --- Website Design Specification

**Document:** `design.md`\
**Project:** Perfect Bite\
**Purpose:** Brand-led, mobile-first storefront and ordering experience\
**Status:** Design direction agreed; operational details requiring owner
confirmation are marked below.

---

## 1. Project vision

Perfect Bite is a sausage and meat-product brand built around a passion
for experimenting with meat, spices and distinctive flavour
combinations. The website should communicate that curiosity and turn it
into a clear, enjoyable path to purchase.

This is not simply a digital menu or a gallery of product photographs.
It is a small brand experience that should:

1.  Make a memorable first impression.
2.  Introduce the brand and the thinking behind its products.
3.  Make the three currently listed products easy to understand and
    compare.
4.  Help customers select quantities and submit an order with minimal
    friction.
5.  Provide a foundation that can grow as the business confirms its
    fulfilment, payment and delivery processes.

**Core principle:** Every section must build appetite, establish trust,
help a customer choose, or make ordering easier. Avoid content and
effects that do not serve one of those purposes.

### Brand positioning

The current differentiator supplied for the project is **unique flavours
and experimentation**. The site should present Perfect Bite as a
flavour-led food brand, not as a generic butcher or an ordinary
product-listing page.

The founder's experimentation with meat and spices, combined with a love
of business, is a useful starting point for the brand story. The final
story should be checked with the owner so the site does not invent
details, ingredients, methods or claims.

**Working creative line:** "A journey of flavour."\
**Possible hero line:** "Your cravings called. We made something
different."\
These are proposed copy directions, not confirmed official brand
slogans.

---

## 2. Goals and success criteria

### Customer goals

- Understand what Perfect Bite sells within the first screen.
- Get a sense of the brand's personality and flavour-led approach.
- Browse products, pack sizes and prices without unnecessary steps.
- Choose quantities and review the order clearly.
- Understand delivery charges and what happens after submitting an
  order.
- Reach the brand's social profiles or WhatsApp easily.

### Business goals

- Present a credible, memorable brand online.
- Convert social-media discovery into product exploration and orders.
- Reduce ambiguity and manual effort in the current order process.
- Make product, pricing and order information easy to maintain.
- Start with a manageable first release, leaving room for later
  enhancements.

### Practical success indicators

After launch, review: - Visits to the products page from the homepage. -
Product additions to cart. - Checkout starts and successfully submitted
orders. - Common customer questions about delivery, payment or
products. - Mobile performance and completion of the order journey.

These are measurement suggestions, not promised outcomes.

---

## 3. Confirmed information and open questions

### Currently known

---

Item Current information

---

Brand Perfect Bite

Differentiator Unique flavours and experimentation

Current products Classic Sausage, Chilli Honey Heat,
Cheese Sausage

Pack size 800g per listed product

Classic Sausage KSh 1,000

Chilli Honey Heat KSh 1,000

Cheese Sausage KSh 1,100

Delivery statement in existing form KSh 200 within Nairobi area

TikTok https://www.tiktok.com/@perfectbite00

Instagram https://www.instagram.com/kings_eatz/

Existing ordering Google Form

Existing logo Supplied profile-picture image; use as
the initial logo asset, subject to
owner approval

---

The user believes the form's "Cheese and onion" wording refers to the
currently listed Cheese Sausage. Confirm the exact product name with the
owner before publishing.

### Must be confirmed with the owner

- How orders are fulfilled: made to order, prepared in batches,
  stocked, or a combination.
- Accepted payment methods and when payment is due.
- Delivery areas beyond the current Nairobi statement.
- Whether the KSh 200 charge applies to all Nairobi orders and whether
  exceptions exist.
- Order lead times, delivery windows and collection/pickup
  availability, if any.
- Product ingredients, allergen information, storage guidance and
  cooking instructions, if the business wants these shown.
- Final product descriptions and actual product photography.
- Whether the business wants order notifications through WhatsApp,
  email, a form, or a dashboard.
- Whether product availability or stock limits need to be managed
  online.

Do not invent answers to these questions. Build the interface so
confirmed details can be added without redesigning the whole site.

---

## 4. Audience and use context

The website is likely to receive visitors from social media,
particularly TikTok and Instagram, and should therefore prioritize phone
screens, fast comprehension and a low-friction order path.

Design for: - First-time visitors who have never heard of Perfect
Bite. - Social-media followers who want to see the full product range
and prices. - Returning customers who already know what they want and
need to reorder easily. - Visitors who want to ask a question before
ordering.

Avoid assuming a particular age, income or customer demographic without
evidence from the business.

---

## 5. Information architecture

The initial website consists of two primary pages and a checkout flow.

### Page 1 --- Homepage

A single, story-led landing page with the following sections:

1.  Navigation
2.  Hero
3.  Brand/flavour introduction
4.  Scroll-into-view image feature
5.  Founder and brand story
6.  Product preview
7.  Serving occasions / inspiration
8.  Ordering and delivery reassurance
9.  Final order call-to-action
10. Footer

The homepage introduces and persuades; it should not become a long
corporate profile.

### Page 2 --- Products

A dedicated catalogue page containing the three currently listed
products. Customers can review product information, choose pack
quantities, add products to a cart and proceed to checkout.

For the initial release, keep the three products on one catalogue page.
A quick-view panel or expandable product detail area is sufficient;
individual product URLs are not necessary unless the catalogue grows or
search sharing makes them useful.

### Checkout flow

Checkout can be a separate route or a clearly separated checkout view,
depending on implementation. It should collect only information needed
to process the order, show an accurate order summary and explain the
next step.

### Suggested routes

- `/` --- Homepage
- `/products` --- Product catalogue
- `/checkout` --- Checkout
- Optional later: `/order-confirmation` --- Confirmation state or page

Use the framework's routing conventions consistently. Do not add routes
merely for architectural complexity.

---

## 6. Visual identity and colour system

### Chosen direction

Use a **dark, bold base with burnt-orange and golden-yellow accents**.
The supplied logo is playful and high contrast, featuring an orange
character, dark outlines, cream details and yellow sparkles. The website
should retain that recognizability rather than replacing it with an
unrelated visual identity.

The site can use warm cream for selected content panels or product
surfaces if a section needs additional contrast, but the primary
experience remains dark.

### Proposed design tokens

These are practical web values inspired by the supplied logo and should
be visually checked against the original asset during implementation.

---

Token Hex Use

---

`color-bg` `#171416` Main page background

`color-surface` `#211D1B` Cards, navigation
surfaces and panels

`color-surface-raised` `#2B2522` Raised cards, drawers
and hover surfaces

`color-orange` `#E9650C` Primary brand accent
and key actions

`color-orange-hover` `#F4771B` Hover/active treatment
where contrast remains
clear

`color-gold` `#F5A900` Highlights, small
decorative details and
emphasis

`color-cream` `#FFF8E8` Main text and selected
light surfaces

`color-text-muted` `#C7BDB3` Supporting text

`color-border` `#403832` Subtle borders and
separators

`color-ink` `#171416` Text on light or bright
buttons

---

### Colour usage rules

- Charcoal is the main canvas; do not use pure black for every
  surface.
- Orange is the main action colour. Use it for primary buttons,
  important links and selected emphasis.
- Golden yellow is a highlight, not a second competing primary button
  colour. Reserve it for sparkles, small labels, key words and
  occasional visual accents.
- Cream is the main text colour on dark surfaces. Muted text must
  remain readable.
- Use the blue-grey visible in the logo's glasses only as a minor
  supporting colour if needed for interface details; it should not
  become a dominant brand colour.
- Avoid placing orange text on similarly dark orange/brown surfaces.
- Check text and control contrast, including hover, focus, disabled
  and validation states.
- Do not add a light/dark theme toggle to the MVP. The chosen
  direction is dark-first, with selective warm light surfaces where
  they improve hierarchy.

### Logo usage

- Use the supplied logo file from the project's media assets.
- Preserve its aspect ratio and transparency/background
  characteristics.
- Do not recreate it as text or apply filters that alter the brand
  colours.
- Use a suitable compact version in navigation and a larger version
  only where it adds value.
- Check legibility on both the charcoal navigation and any light
  surfaces.
- Confirm the owner approves use of the current profile picture as the
  website logo.

---

## 7. Typography

Use a bold, friendly display face for headlines and a clean, highly
readable sans-serif for body text and controls.

**Suggested pairing:** - Headings: **Outfit** --- expressive geometric
forms, suitable for short, confident headlines. - Body/UI: **DM Sans**
--- readable at small sizes and suitable for product details, forms and
navigation.

If the implementation team prefers a different available font, keep the
same principles: distinctive but legible display headings, neutral body
copy, clear numerical pricing and consistent weights.

### Typography rules

- Hero heading: large, compact and easy to scan; avoid long multi-line
  copy on mobile.
- Section headings: short and editorial, usually one or two lines.
- Product names and prices: strong hierarchy; prices must be easy to
  find.
- Body copy: short paragraphs with comfortable line height.
- Buttons and navigation: medium or semibold weight.
- Avoid excessive all-caps. Reserve it for short eyebrow labels or
  small brand markers.

Use responsive type sizes with CSS `clamp()` or equivalent fluid sizing,
while preserving sensible maximums on wide screens.

---

## 8. Homepage section design and content

### 8.1 Navigation

**Purpose:** Keep orientation and key actions available without
competing with the story.

Desktop: - Logo on the left. - Main links such as `Home`, `Our Story`
and `Products`. - TikTok and Instagram icon links. - A clear orange
`Order Now` button with a directional arrow.

Mobile: - Logo and cart/order access remain visible. - Use a compact
menu button for section links and social links if space is limited. -
Ensure the menu is keyboard accessible, has a clear open/close state and
closes after navigation. - Avoid squeezing every desktop navigation item
into the mobile header.

The navigation may become sticky after scrolling, but should remain
visually light and not obscure content. Use a subtle surface/background
transition when it becomes sticky.

**Social links in navigation:** - TikTok:
`https://www.tiktok.com/@perfectbite00` - Instagram:
`https://www.instagram.com/kings_eatz/`

Use recognizable platform icons, styled with the site's brand colours
rather than large platform-colour blocks. Add accessible labels such as
"Perfect Bite on TikTok" and "Perfect Bite on Instagram". Open external
profiles in a new tab where appropriate, with secure link attributes.

### 8.2 Hero --- "The first bite begins here"

**Purpose:** Stop the visitor, communicate the product and create
curiosity.

**Working headline:**\
"Your cravings called. We made something different."

**Supporting copy:**\
"Bold flavours, unexpected combinations and sausages made for those who
love a little adventure."

**Primary CTA:** `Discover the flavours`\
**Secondary CTA:** `Our story`

**Layout:** - Full-width dark hero with a generous but controlled
height. - Desktop: headline and copy on one side, product image or
composition on the other. - Mobile: headline, concise copy, CTA, then a
carefully cropped product visual; alternatively use a layered
composition if it remains readable and fast. - Use a genuine Perfect
Bite product photo when available. Do not publish generated food imagery
as if it were the actual product. - Logo may appear in the navigation;
avoid unnecessarily repeating a large logo in the hero. - A small
orange/gold graphic detail inspired by the logo's sparkles can provide
personality.

**Motion:** - On initial page load, reveal the heading and CTA with a
short, restrained fade/translate. - Product image can enter with a
slight offset or scale settle. - CTA arrow moves forward on hover/focus
(details in Interaction system). - No long intro animation, forced
loading sequence or scroll lock.

The hero must make it obvious that Perfect Bite sells sausages and that
the visitor can explore or order them.

### 8.3 Brand/flavour introduction --- "Not your everyday sausage"

**Purpose:** Establish the brand's point of view before the product
list.

**Working headline:**\
"Not your everyday sausage."

**Supporting copy:**\
"We believe a great sausage is more than just a meal. It's an
opportunity to explore flavour, experiment with ingredients and create
something memorable."

Use three concise principles: - **Curiosity** --- being willing to
explore combinations. - **Flavour** --- making taste central to the
product experience. - **Experimentation** --- testing ideas and
developing distinctive varieties.

These are expressions of the supplied brand differentiator, not claims
about a particular production process.

**Layout:** - Dark or slightly raised charcoal surface. - Headline and
short copy with three simple visual markers. - Use small icons, abstract
spice/ingredient details or cropped real product photography. - Keep the
section compact; it should introduce the next visual moment, not repeat
the hero.

**Motion:** Gentle reveal as the section enters view. Stagger small
principle elements only slightly; avoid a slow, one-by-one presentation
that delays reading.

### 8.4 Scroll-into-view image feature --- "The art is in the flavour"

**Purpose:** Create an immersive food moment and a visual pause in the
story.

**Working headline:**\
"The art is in the flavour."

**Supporting copy:**\
"From familiar favourites to bold flavour combinations, every variety
brings its own character to the table."

**Visual design:** - One full-bleed, edge-to-edge image section
featuring actual sausages. - Use a high-quality wide photograph with
appetizing lighting, clear texture and a strong focal point. - Apply a
subtle dark gradient/overlay where text is placed. - Keep the section in
normal document flow. It is **not pinned** and must not trap or hijack
scrolling. - Text can sit toward the centre or one side, based on the
image's negative space. - A short eyebrow label can introduce the
section.

**Scroll behaviour:** - As the section enters the viewport, reveal the
copy with a subtle fade and vertical movement. - A very small image
scale transition may be used, provided it is performant and does not
cause layout shift. - Avoid aggressive parallax or scroll-linked effects
that can feel unstable on touch devices.

**Responsive behaviour:** - Use responsive image sources or a carefully
selected crop. - Desktop can use a wide landscape crop; mobile may need
a portrait crop or alternate focal point. - Keep text away from
important food details and maintain contrast with an overlay. - Use a
sensible minimum height on mobile; do not force a full-screen panel if
it makes the experience cumbersome.

### 8.5 Founder and brand story --- "It started with a love for flavour"

**Purpose:** Humanize the business and build trust.

**Working headline:**\
"It started with a love for flavour."

**Draft copy:**\
"A passion for business, a love for experimenting with meat and spices,
and a desire to create something different. That's where Perfect Bite
began."

**Layout:** - Editorial split layout on desktop: genuine
founder/behind-the-scenes image on one side, concise story on the
other. - Stack image and text on mobile. - Use a real founder image,
preparation photo or approved behind-the-scenes footage when supplied. -
Include only story details the owner confirms. Do not invent a founding
date, recipe origin, ingredient sourcing, production method, awards or
customer claims.

**CTA:** Optional `Get to know us` or a simple link to social profiles
if there is more approved story content.

**Motion:** Image and copy reveal gently as they enter view. Keep text
readable without animation dependencies.

### 8.6 Product preview --- "Three flavours. Which one is yours?"

**Purpose:** Turn brand interest into product consideration and guide
visitors to the catalogue.

**Working headline:**\
"Three flavours. Which one is yours?"

**Supporting copy:**\
"From the classic to the adventurous, find the bite that suits your
cravings."

Show three product preview cards: 1. Classic Sausage --- 800g --- KSh
1,000 2. Chilli Honey Heat --- 800g --- KSh 1,000 3. Cheese Sausage ---
800g --- KSh 1,100

**Card content:** - Real product photograph. - Product name. - Pack size
and price. - One short, owner-approved flavour description. -
`View product` or `Explore flavour` link with arrow.

**Layout:** - Three columns on wide desktop. - Two columns on medium
widths where comfortable. - One column or a carefully designed
horizontal card layout on narrow mobile screens. - Maintain consistent
image ratios and card heights where practical. - Use clear spacing and
avoid heavy borders or excessive decoration.

**CTA beneath cards:** `Explore all flavours`

The homepage preview should not duplicate the full cart controls if that
makes the page busy. Its main job is to send interested visitors to
`/products`; a direct quick-add can be considered only if it remains
clear and easy to use.

### 8.7 Serving occasions --- "Made for moments worth sharing"

**Purpose:** Help visitors imagine enjoying the products and broaden the
context beyond a product photograph.

**Working headline:**\
"Good food brings people together."

**Supporting copy:**\
"For a relaxed meal, a weekend grill or a table full of friends, bring a
little more flavour to the moment."

**Visual direction:** - Real lifestyle photography: serving, grilling or
sharing food. - A compact editorial image-and-copy layout or a small
sequence of visual tiles. - Avoid generic stock images that do not match
the product or brand. - Do not imply health benefits, ingredient
properties or product performance without confirmation.

This section is optional if real, relevant imagery is not available. Do
not hold up the MVP while sourcing lifestyle content; it can launch as a
concise text-and-image section or be omitted if it adds no distinct
value.

### 8.8 Ordering reassurance

**Purpose:** Answer practical questions close to the point where a
visitor is ready to order.

Potential information blocks: - Product pack size: 800g. - Current
listed prices. - Confirmed delivery coverage and fees. - Confirmed
order-processing or delivery expectations. - How the customer will
receive confirmation or follow-up.

The current form states a KSh 200 delivery charge within Nairobi. Use
this only after confirming that it remains current and defining what
"within Nairobi" means for the business. For other areas, show a clear
"Contact us to confirm delivery" message only if the owner approves that
process.

Do not publish unconfirmed payment options, delivery timelines,
collection points or guarantees.

### 8.9 Final CTA --- "Ready for your Perfect Bite?"

**Purpose:** Give visitors who have reached the end a direct path to
purchase.

**Working headline:**\
"Your next favourite flavour is waiting."

**Supporting copy:**\
"Explore our sausages, choose your favourites and get your order
started."

**CTA:** `Order your favourites` with the animated arrow.

Use a strong orange CTA against charcoal, supported by one appetizing
product image or restrained brand graphic. Keep the closing section
short and decisive.

### 8.10 Footer

Include: - Logo and a short brand description. - Homepage section
links. - Products link. - TikTok and Instagram links. - Confirmed
WhatsApp/contact information. - Confirmed delivery and ordering
information. - Copyright notice.

The footer should be useful but visually quieter than the final CTA.

---

## 9. Products page design

### Purpose

The catalogue is the main product-selection environment. It should
answer, at a glance: - What is available? - What does each product look
like? - What is the pack size? - What is the price? - How many packs can
I order? - What is in my cart and what is the next step?

### Page introduction

**Eyebrow:** `THE PERFECT BITE COLLECTION`\
**Headline:** "Find your flavour."\
**Supporting copy:** "Three distinctive varieties. One deliciously
difficult decision."

Use a compact introduction so products appear quickly, especially on
mobile.

### Product catalogue

Each product card should include: - Actual product image. - Product
name. - 800g pack size. - Current price. - Short confirmed flavour
description. - Quantity control or a clear product-selection action. -
Add-to-cart action.

Current product data:

Product Pack size Listed price

---

Classic Sausage 800g KSh 1,000
Chilli Honey Heat 800g KSh 1,000
Cheese Sausage 800g KSh 1,100

Treat prices and product availability as data, not text embedded in
images, so they can be updated consistently.

### Product quick view

A card can open an accessible quick-view panel or expand inline. It
should show: - Larger product image. - Product name, pack size and
price. - Owner-approved description. - Quantity stepper. - Add-to-cart
button.

A separate page for each product is not needed for the initial
three-item range. If the catalogue grows, individual product routes can
be introduced later.

### Cart

The cart should be accessible from the navigation and remain easy to
reach on mobile.

Cart content: - Selected product and pack size. - Quantity controls. -
Remove item action. - Line subtotal. - Order subtotal. - Delivery fee,
where confirmed. - Estimated total. - Continue shopping and checkout
actions.

Cart changes should update immediately and provide subtle,
understandable feedback. Empty-cart state should include a clear route
back to products.

Do not add hidden fees or imply the total is final when delivery or
other charges remain unconfirmed.

---

## 10. Checkout and order journey

### Initial checkout fields

Based on the existing order form, the proposed checkout should
collect: - Customer name. - Phone number. - Delivery location, including
estate/area and apartment or house number as relevant. - Product
selections and quantities. - Additional order notes, optional.

Only collect information the business needs. Do not request unnecessary
personal details.

### Checkout steps

1.  Review selected products and quantities.
2.  Enter customer contact and delivery details.
3.  Display delivery fee or explain that it needs confirmation for the
    selected area.
4.  Show a clear order summary.
5.  Submit through the confirmed order channel.
6.  Display an accurate confirmation state explaining what happens next.

### Order submission approach

For the MVP, the simplest suitable approach may be a WhatsApp handoff or
a server-backed order submission, depending on the owner's workflow and
consent. Confirm this before implementing the final integration.

If using WhatsApp: - Prepare a human-readable order summary with product
names, quantities, subtotal, delivery information and customer-provided
details. - Let the customer review the message before sending. - Do not
claim that an order is placed until the customer actually sends it and
the business receives it. - Make the WhatsApp contact number
configurable and confirm it with the owner. - Provide an alternative
contact path if the customer cannot use WhatsApp.

If using a backend order endpoint: - Validate fields on the server as
well as the client. - Use a unique order reference. - Handle duplicate
submissions and network errors. - Protect customer information. -
Confirm how the business will receive and manage orders.

### Payment and fulfilment

Payment methods, fulfilment, delivery areas outside the existing Nairobi
statement, lead times and order acceptance process are not yet
confirmed. Keep these configurable and do not present a payment
integration or delivery promise as available until it has been agreed
and tested with the business.

---

## 11. Floating WhatsApp contact button

A floating WhatsApp action should be available throughout the site, but
it must not obstruct product controls, the cart, checkout fields or
mobile navigation.

**Suggested hover text:**\
"Craving something good? Order now."

### Appearance

- Circular floating button.
- Use the recognizable WhatsApp glyph inside a button styled with
  Perfect Bite's orange, charcoal and cream palette.
- A small golden accent or subtle ring may connect it to the brand.
- Do not use an oversized platform-green block that conflicts with the
  established visual identity; the icon itself should remain
  recognizable.
- Place it near the lower-right corner with safe spacing from device
  edges and other fixed controls.

### Interaction

- On desktop hover, reveal a small tooltip or pill containing "Craving
  something good? Order now."
- The tooltip should also appear on keyboard focus.
- The arrow or icon can move a few pixels forward on hover/focus,
  consistent with the site's CTA motion.
- On touch devices, tapping opens the confirmed WhatsApp contact or an
  approved contact/order flow. Do not rely on hover to reveal
  essential information.
- Include an accessible name such as "Order or contact Perfect Bite on
  WhatsApp".
- Ensure the floating control does not cover the mobile cart or
  primary checkout button. Adjust its position or hide it on checkout
  if it becomes distracting.

The WhatsApp number and final destination must be confirmed with the
owner before launch.

---

## 12. Social links and icon behaviour

TikTok and Instagram should be available in the navigation as well as
the footer.

### Links

- TikTok: https://www.tiktok.com/@perfectbite00
- Instagram: https://www.instagram.com/kings_eatz/

### Design

- Use consistent icon sizing, stroke/visual weight and spacing.
- Use the brand's charcoal, orange, cream and restrained golden-yellow
  details.
- Keep platform icons recognizable; do not distort their shapes.
- Avoid giving social icons more visual prominence than the order CTA.

### Interaction

- Subtle colour or background shift on hover and focus.
- Small forward movement or scale response, kept consistent with the
  CTA interaction system.
- Tooltip labels on hover/focus if icon-only links are used.
- Accessible names for screen readers.
- Clear visible keyboard focus.

External social links should open safely in a new tab where appropriate.

---

## 13. Interaction and motion system

Motion should support hierarchy, feedback and continuity. It should not
become a separate attraction that competes with the food or makes
ordering slower.

### Reusable interaction patterns

#### A. Directional CTA arrow

For primary links such as `Order Now`, `Explore the flavours` and
`View product`: - Display a right-facing arrow alongside the label. - On
hover and keyboard focus, move the arrow forward a small distance
(approximately 3--5px). - Optionally shift the button background
slightly toward its hover token. - On touch, use a brief pressed state
rather than a hover-dependent animation. - Keep the label stable so the
button does not change width or cause layout shift.

The arrow communicates forward progress: the user is moving to the next
step.

#### B. Scroll reveal

- Use a subtle opacity and vertical-position transition for selected
  sections.
- Trigger once when an element enters the viewport, unless a repeated
  reveal is genuinely useful.
- Avoid hiding essential content when JavaScript or animation is
  unavailable.
- Keep stagger delays short and restrained.
- Do not animate every paragraph, image and icon independently.

#### C. Product card interaction

- Slight image scale or crop shift on hover.
- Clear focus outline for keyboard users.
- Subtle border or surface change.
- Add-to-cart feedback through cart count update and a small
  confirmation message.
- No large card jumps, spinning product images or excessive bounce.

#### D. Cart and menu transitions

- Cart drawer enters smoothly from the side on desktop and from the
  bottom on mobile if that is the selected layout.
- Mobile menu opens and closes predictably.
- Keep transition durations short and ensure content remains usable if
  motion is disabled.
- Maintain focus correctly when opening and closing modal/drawer
  interfaces.

#### E. Scroll-to-view image section

- Normal page scrolling.
- Section content reveals as it enters view.
- Optional restrained background scale movement.
- No sticky pinning, forced scroll, scroll hijacking or long scrub
  animations.

### Motion preferences and performance

- Respect `prefers-reduced-motion`.
- Provide immediate state feedback even when animation is disabled.
- Prefer CSS transitions and transforms for small interactions.
- Avoid layout-affecting animation where possible.
- Do not animate large images in ways that cause jank on mid-range
  phones.
- Lazy-load below-the-fold imagery and reserve image dimensions to
  prevent layout shift.
- Ensure the page remains understandable if animations fail or are
  disabled.

---

## 14. Responsive design

Use a mobile-first layout and test at real device widths, not only by
resizing a desktop browser.

### Mobile

- Compact navigation with accessible menu.
- Clear first-screen headline, product context and primary CTA.
- One-column story and product layouts where appropriate.
- Large touch targets and readable form controls.
- Product imagery cropped to retain the product as the focal point.
- Easy-to-access cart and checkout.
- Floating WhatsApp action positioned so it does not cover important
  controls.
- Avoid oversized text that pushes the product and CTA too far down.
- Avoid hover-only functionality.

### Tablet

- Use intermediate grid layouts, often two columns for products.
- Keep text line lengths comfortable.
- Adapt hero image/text proportions rather than simply shrinking
  desktop composition.
- Preserve generous tap targets and spacing.

### Desktop

- Use the available width for editorial split layouts and three-column
  product cards.
- Constrain long text to readable line lengths.
- Use wide photography where it supports the story.
- Keep navigation, cart and CTAs clearly separated.
- Do not stretch content edge-to-edge without a deliberate visual
  reason.

### Breakpoints

Use the framework's responsive styling approach and choose breakpoints
based on when the layout needs to change, rather than treating specific
device models as fixed targets. Verify at narrow mobile, large mobile,
tablet, laptop and wide desktop widths.

---

## 15. Accessibility and usability

- Use semantic headings in a logical order.
- Use real links for navigation and buttons for actions.
- Ensure keyboard access to navigation, product controls, cart, forms
  and dialogs.
- Provide visible focus states.
- Give meaningful images appropriate alt text; use empty alt text for
  purely decorative images.
- Label every form field and show understandable validation messages.
- Do not communicate product availability, errors or selected states
  through colour alone.
- Check text contrast on dark surfaces and orange/gold buttons.
- Support reduced-motion preferences.
- Ensure interactive targets are comfortable to tap.
- Keep cart and checkout updates understandable to assistive
  technology.
- Avoid auto-playing audio. Any video should be muted by default,
  optimized and have a usable fallback.

---

## 16. Technology stack

### Recommended stack

---

Layer Technology Why it fits

---

Framework **Next.js (App React-based routing,
Router)** layouts, metadata
support and options for
server/client rendering

Language **TypeScript** Catches many data-shape
and interface errors
during development

UI **React** Component-based
structure for reusable
navigation, cards, cart
and forms

Styling **Tailwind CSS** Fast, consistent
responsive styling and
reusable design tokens

Motion **Framer Motion** Scroll reveals and
(Motion for React) or polished UI feedback;
CSS transitions use only where motion
adds value

Icons **Lucide React** Consistent, lightweight
interface icons; use
official platform marks
where needed and
permitted

Forms **React Hook Form** Manage form state and
with **Zod** (if validation without
checkout complexity hand-building every
warrants it) edge case

Cart state React Context or a Share cart contents
small state store across products,
navigation and checkout

Backend **Next.js Route Keep order submission
Handlers / Server and any secret-bearing
Actions**, if a integrations on the
server-backed order server
flow is chosen

Data Start with a small Three products do not
typed product data justify an unnecessary
file; add a database database at launch
only when required

Deployment **Vercel** or another Straightforward
compatible host deployment for Next.js;
select based on budget
and operational needs

Version control **Git + GitHub** Change history, backups
and deployment workflow

---

### Why Next.js

Next.js is a suitable choice for this project because it supports a
fast, content-focused website while still allowing interactive features
such as a cart and checkout.

Use the App Router and keep the implementation intentionally simple: -
Server Components by default for static/content-led page sections. -
Client Components only where state or browser interaction is needed,
such as the cart, quantity controls, mobile menu and interactive
checkout. - Shared layouts for consistent navigation and footer. -
Metadata for page titles, descriptions and social sharing. - Image
optimization using the Next.js image tooling where compatible with the
chosen deployment and media setup.

Next.js is not a requirement to add a complex backend. The first version
can use static product data and a simple, agreed order handoff. Add
server-side order handling only when the business workflow requires it.

### Suggested project structure

```text
perfect-bite/
├── public/
│   └── media/
│       ├── logo/
│       ├── products/
│       ├── story/
│       └── social/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── checkout/
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── home/
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   └── ui/
│   ├── data/
│   │   └── products.ts
│   ├── lib/
│   │   ├── validation.ts
│   │   └── formatting.ts
│   └── types/
│       └── product.ts
├── design.md
├── package.json
└── README.md
```

This is a suggested structure, not a requirement to create every folder
immediately. Add files as implementation needs them. The `public/media/`
folder is the expected location for the supplied image assets; confirm
the actual project path and filenames before referencing them in code.

### Product data model

Keep product information in one typed source so the homepage preview,
catalogue, cart and checkout use the same names and prices.

Example:

```ts
export type Product = {
  id: string;
  name: string;
  packSize: string;
  price: number;
  image: string;
  shortDescription: string;
  available: boolean;
};

export const products: Product[] = [
  {
    id: "classic-sausage",
    name: "Classic Sausage",
    packSize: "800g",
    price: 1000,
    image: "/media/products/classic-sausage.webp",
    shortDescription: "A classic flavour for every occasion.",
    available: true,
  },
  {
    id: "chilli-honey-heat",
    name: "Chilli Honey Heat",
    packSize: "800g",
    price: 1000,
    image: "/media/products/chilli-honey-heat.webp",
    shortDescription: "A sweet kick with a touch of heat.",
    available: true,
  },
  {
    id: "cheese-sausage",
    name: "Cheese Sausage",
    packSize: "800g",
    price: 1100,
    image: "/media/products/cheese-sausage.webp",
    shortDescription: "A cheesy twist on a meaty favourite.",
    available: true,
  },
];
```

The descriptions and image filenames above are placeholders for
implementation. Replace them with owner-approved copy and the real
files. The owner should confirm whether the cheese product is officially
named "Cheese Sausage" or "Cheese and onion".

### Cart and pricing

- Store cart entries by product ID and quantity.
- Derive line totals and subtotal from the central product data.
- Do not trust client-submitted prices if orders are processed by a
  backend; recalculate totals server-side from trusted product data.
- Treat delivery as a separate configurable amount or rule.
- Confirm delivery eligibility and fee before showing a final payable
  total.
- Handle unavailable products and invalid quantities clearly.

### Backend and database decision

Do not add a database simply because the site is built with Next.js. For
a three-product launch, a typed local product list and a confirmed order
handoff may be sufficient.

Introduce a database and admin interface when the owner needs
capabilities such as: - Updating products without code changes. -
Managing stock or availability. - Viewing and tracking orders
centrally. - Keeping customer/order records under an agreed privacy and
retention policy. - Reporting on sales.

If those needs are confirmed before launch, select a suitable database
and authentication approach deliberately rather than adding services
speculatively.

### Payments

Do not integrate a payment gateway until the owner confirms payment
methods, order acceptance and fulfilment requirements. If M-Pesa or
another online payment method is later selected, use a supported
provider integration and verify payment status on the server. Never
treat a client-side success screen as proof of payment.

---

## 17. Media and asset guidelines

The user will provide image files in the project's media folder. Prefer
authentic brand assets over generic imagery.

### Priority assets

1.  Approved logo/profile-picture asset.
2.  A clear image of each of the three products.
3.  A wide hero image or a set of images suitable for responsive
    cropping.
4.  A wide sausage image for the scroll-into-view section.
5.  Founder or behind-the-scenes photography, if approved.
6.  Serving/lifestyle images, if available.
7.  TikTok and Instagram marks/icons from a suitable icon source.

### Asset handling

- Inspect the media folder and use the real filenames.
- Do not assume a filename or reference a nonexistent asset.
- Use modern formats such as WebP or AVIF where practical, keeping an
  original source.
- Provide width/height or aspect ratio to reduce layout shift.
- Use responsive image sizes and lazy-load below-the-fold imagery.
- Avoid large autoplay videos on mobile; if used, keep them muted,
  compressed and optional.
- Use generated or stock images only as temporary design references,
  never as representations of the actual products.
- Use meaningful alt text for informative images and empty alt text
  for decorative imagery.

---

## 18. SEO and social sharing

Set page metadata for the homepage and products page: - Distinct page
title and description. - Appropriate canonical URL once the domain is
known. - Open Graph title, description and image. - Favicon/app icon
based on an approved logo adaptation. - Descriptive product names and
headings.

Use natural language that explains the products and brand. Do not
keyword-stuff or publish unsupported claims.

Social links should make it easy to continue to the official TikTok and
Instagram profiles. Social preview images should use approved
brand/product photography and remain legible when cropped.

---

## 19. Performance and reliability

- Keep the homepage lightweight and prioritize the hero image.
- Optimize image formats, dimensions and loading priority.
- Avoid loading large animation libraries or videos when they add
  little value.
- Prevent cumulative layout shift by reserving image and media space.
- Test on a typical mobile connection and mid-range device.
- Provide useful loading, empty, success and error states.
- Ensure product browsing and the order flow remain understandable if
  a nonessential animation does not run.
- Use server-side validation for any backend order submission.
- Do not expose API keys, payment secrets or private integration
  credentials in client code.

---

## 20. Privacy and customer information

Checkout collects personal information such as name, phone number and
delivery location. Collect only what is necessary to process the order,
explain how the information will be used, restrict access to it and
avoid retaining it longer than the business needs.

Before launch: - Agree with the owner who receives order data and
through which service. - Confirm what customer information is included
in WhatsApp messages or order notifications. - Add a concise privacy
notice appropriate to the actual order workflow. - Use secure transport
and protect any backend order endpoint. - Avoid collecting payment
credentials directly on the website. - Review applicable privacy
obligations for the business and its operating location.

---

## 21. Development plan

Keep work in short, testable milestones. Do not delay implementation
while repeatedly reconsidering already agreed visual decisions.

### Milestone 1 --- Foundation

- Set up Next.js, TypeScript and Tailwind.
- Establish design tokens, typography and base layout.
- Inspect the provided media assets and map real filenames.
- Implement navigation, footer and responsive shell.

**Review:** Confirm colour, type, spacing and navigation in a running
browser.

### Milestone 2 --- Homepage

- Build the hero.
- Add the brand introduction.
- Implement the scroll-into-view image feature.
- Add the founder story and product preview.
- Add serving inspiration, ordering reassurance and final CTA as
  supported by available content.

**Review:** Check the narrative flow, image crops, mobile layout and CTA
clarity. Make necessary corrections, then move on.

### Milestone 3 --- Products and cart

- Implement the central product data.
- Build the catalogue and product quick view.
- Add quantity controls and cart state.
- Build the cart drawer and totals.

**Review:** Test product selection, quantity changes, removal, empty
state and price calculations.

### Milestone 4 --- Checkout

- Build the checkout form and validation.
- Add order summary and delivery handling based on confirmed business
  rules.
- Connect the agreed order submission channel.
- Implement clear success and failure feedback.

**Review:** Submit test orders and verify the owner receives the
expected information. Do not use live customer data for testing.

### Milestone 5 --- Polish and launch

- Verify mobile, tablet and desktop layouts.
- Check keyboard navigation, contrast and reduced motion.
- Optimize media and performance.
- Add metadata and social previews.
- Test the complete customer journey from landing page to order
  confirmation.
- Confirm business details and replace all placeholder copy/assets.

### Scope control

A design decision is considered settled once it meets the specification
and works correctly in the browser. Revisit it only when testing reveals
a real usability, accessibility, performance, brand or business problem.
Keep enhancements for a later iteration rather than expanding the MVP
during implementation.

---

## 22. Definition of done

The first release is ready for owner review when:

- The brand identity is consistently applied.
- Homepage sections tell a clear story and lead naturally to products.
- The scroll-into-view image section works without pinned scrolling or
  scroll hijacking.
- The products page shows the three confirmed products, pack sizes and
  prices.
- Customers can select quantities, review a cart and proceed to
  checkout.
- Checkout validates the required information and shows an
  understandable order summary.
- The actual order submission channel works and provides accurate
  confirmation.
- Delivery, payment and fulfilment statements have been confirmed by
  the owner.
- Social links and WhatsApp contact lead to the correct destinations.
- Arrow, hover, reveal and drawer interactions work with keyboard,
  touch and reduced-motion settings.
- Layouts are usable on mobile, tablet and desktop.
- Real brand assets are used, with no misleading placeholder product
  imagery.
- No essential content depends on animation or hover.
- No unnecessary database, dashboard or payment integration has been
  added without a confirmed need.

---

## 23. Final design principle

Perfect Bite should feel like a flavour-led brand with a point of view.
The homepage earns attention through a creative hero, builds connection
through the story, and creates appetite through real product imagery.
The products page then makes the buying decision straightforward, while
checkout removes uncertainty and unnecessary effort.

Keep the experience expressive, but keep the system simple. A small set
of strong design patterns, reusable components and purposeful
interactions will create a cohesive website without allowing design
exploration to delay development.
