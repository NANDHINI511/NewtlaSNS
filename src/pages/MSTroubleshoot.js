/*
TestingPage.jsx
A professional, responsive React page layout you can drop into your project.

HOW TO USE (step-by-step)
1) Save this file as: src/pages/TestingPage.jsx  (or src/components/TestingPage.jsx)
2) Images: put your images in the public folder: public/images/
   - Example filenames used in this file (change these to your real names):
     /images/xyz-hero.jpg
     /images/xyz-1.jpg
     /images/xyz-2.jpg
     /images/xyz-3.jpg
3) Header / Footer: this file imports Header and Footer. Adjust import paths to match your project:
   import Header from '../components/Header' // <-- change if needed
   import Footer from '../components/Footer' // <-- change if needed
4) Tailwind CSS: This component uses Tailwind utility classes. If you don't have Tailwind installed, either
   - install Tailwind (recommended) or
   - convert the classes to your CSS framework / plain CSS.
   To install Tailwind quickly: https://tailwindcss.com/docs/installation
5) Framer Motion (optional, for subtle entrance animations):
   npm install framer-motion
6) To add the page to your app:
   - import TestingPage in App.js or your router and add a route or render it directly.
     import TestingPage from './pages/TestingPage'
7) Replace the placeholder texts and image paths with the real content from your video.

TIPS
- Keep image filenames short and kebab-case (e.g. xyz-hero.jpg).
- Use descriptive alt text for accessibility (I left sample alt text you'll want to change).
- Use loading="lazy" on large images (done here) to improve performance.
- If you want me to extract frames and text from your uploaded video and plug them in here, say so and I'll adapt the page using your actual assets.

---------------------------------------------------------
*/

import React from 'react'
import { motion } from 'framer-motion'
// Adjust these imports to match where your header/footer live
import Header from '../components/Header'
import Footer from '../components/Footer'

const IMAGES = [
  '/images/xyz-1.jpg',
  '/images/xyz-2.jpg',
  '/images/xyz-3.jpg',
]

function FeatureCard({ img, title, text }) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-6 flex gap-6 items-start">
      <img
        src={img}
        alt={title}
        loading="lazy"
        className="w-28 h-20 object-cover rounded-lg flex-shrink-0"
      />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      </div>
    </article>
  )
}

function Gallery({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl shadow-sm">
          <img
            src={src}
            alt={`gallery-${i}`}
            loading="lazy"
            className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
          />
        </div>
      ))}
    </div>
  )
}

export default function TestingPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                This is your professional hero title
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Replace this paragraph with the main intro paragraph from your page. Keep it concise — one or
                two sentences that explain what the page or product is about.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-block px-6 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow hover:opacity-95"
                >
                  Primary action
                </a>
                <a
                  href="#"
                  className="inline-block px-6 py-3 rounded-2xl border border-gray-200 text-gray-700"
                >
                  Secondary
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-sm text-gray-500">
                  <strong className="text-gray-800">Quick stat:</strong> Replace with a real stat — e.g. 4.9/5
                </div>
                <div className="text-sm text-gray-500">
                  <strong className="text-gray-800">Another stat:</strong> Small supporting line
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                {/* replace the image path with your hero image (xyz-hero.jpg) */}
                <img
                  src={'/images/xyz-hero.jpg'}
                  alt="Hero visual"
                  className="w-full h-72 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              img={IMAGES[0]}
              title="Feature one"
              text="Short paragraph explaining this feature. Replace with text from your video."
            />
            <FeatureCard
              img={IMAGES[1]}
              title="Feature two"
              text="Short paragraph explaining this feature. Replace with text from your video."
            />
            <FeatureCard
              img={IMAGES[2]}
              title="Feature three"
              text="Short paragraph explaining this feature. Replace with text from your video."
            />
          </div>
        </section>

        {/* CONTENT / PARAGRAPHS */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="prose prose-lg mx-auto text-gray-700">{/* prose classes require Tailwind Typography plugin; if not installed use simple classes */}
            <h2>Content heading</h2>
            <p>
              Here you can paste the longer paragraphs you extracted from your video. Keep paragraphs short and
              scannable — 2–4 short sentences each.
            </p>

            <p>
              Use <strong>bold</strong> where you want emphasis and keep links obvious. If you have bullet points or
              steps, they work great here to increase readability.
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <Gallery items={IMAGES} />
        </section>

        {/* CALL TO ACTION */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-xl font-semibold">Ready to get started?</h3>
          <p className="mt-3 text-gray-600">Short supporting sentence — call to action that drives conversions.</p>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-7 py-3 rounded-2xl bg-indigo-600 text-white font-medium shadow"
            >
              Get started
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
