## 📌 Overview

This project demonstrates a dynamic blog system using a block-based architecture powered by Strapi v5. Content is rendered dynamically based on API response and supports modular components like gallery sliders, hero images, quotations, and rich text blocks.

# Blocks Blog Frontend

A dynamic blog frontend built using **Next.js 16 (App Router)** and **Strapi v5**.

## 🚀 Features

- Dynamic blog pages using slug
- Blocks-based content rendering
- Rich Text rendering (paragraph, heading, list)
- Gallery Slider block using Swiper
- Autoplay, Navigation & Pagination controls
- White customized arrows & dots
- Responsive design with Tailwind CSS
- Dynamic image handling from Strapi v5
- Author information rendering
- Clean modular component structure

## 🛠 Tech Stack

- Next.js 16
- Strapi v5 (Headless CMS)
- Tailwind CSS
- Swiper.js
- REST API

## 📂 Project Structure

- `app/blog/[slug]/page.jsx` – Dynamic blog page
- `components/ContentBlock.jsx` – Rich text renderer
- `components/GallerySlider.jsx` – Image slider block
- `components/HeroImage.jsx` – Hero Image Block
- `components/QuotationBlock.jsx` – Quotation block
- - `components/CardsBlock.jsx` – Cards block
- `globals.css` – Custom styling & Swiper overrides

## ⚙️ How to Run

```bash
npm install
npm run dev
```

## 🎯 Learning Outcomes

- Implemented dynamic routing using Next.js App Router
- Integrated Strapi v5 as a Headless CMS
- Built block-based dynamic content rendering system
- Customized Swiper slider UI (navigation & pagination)
- Handled nested API population in Strapi
- Structured reusable and scalable React components
 
 ---


# Commit Message List 

- Initialized Next.js App Router project
- Integrated Strapi v5 REST API
- Implemented dynamic blog page using slug
- Created reusable ContentBlock component
- Implemented Rich Text JSON renderer
- Added support for headings, lists, bold & italic
- Developed Gallery Slider block using Swiper
- Enabled autoplay, navigation and pagination
- Customized Swiper arrows & dots styling
- Implemented dynamic media handling from Strapi v5
- Added Tailwind styling and responsive layout
- Structured project with modular components

---



  
