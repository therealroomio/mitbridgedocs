import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Introduction | Minimal Docs Site',
  description: 'Welcome to our minimal documentation site'
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Welcome to MitBridge Docs</h1>
      <p className="mb-4 text-xl">
        Welcome to the official documentation for MitBridge - a comprehensive
        WordPress solution developed by Roomi Kh. This documentation will guide
        you through using and managing your MitBridge-powered WordPress site.
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">What is MitBridge?</h2>
      <p className="mb-4">
        MitBridge is a collection of WordPress tools and customizations designed
        to enhance your website building experience. Our documentation covers
        everything from basic administration to advanced features.
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">
        Key Documentation Sections
      </h2>
      <ul className="mb-4 list-inside list-disc space-y-2">
        <li>
          <strong>MitBridge Admin</strong>: Learn how to navigate and use the
          WordPress admin interface
        </li>
        <li>
          <strong>Divi Builder</strong>: Discover how to create stunning pages
          with our Divi customizations
        </li>
        <li>
          <strong>WooCommerce</strong>: Understand our WooCommerce integrations
          and features
        </li>
      </ul>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Getting Support</h2>
      <p className="mb-4">
        This documentation is regularly updated to ensure you have the most
        current information. Navigate through the different sections using the
        sidebar to find detailed guides and tutorials.
      </p>
      <div className="mt-8 rounded-lg bg-blue-50 p-6">
        <h3 className="mb-2 text-xl font-semibold text-blue-900">
          Need Additional Help?
        </h3>
        <p className="text-blue-800">
          If you need personalized support or have specific questions, feel free
          to contact the developer directly:
        </p>
        <p className="mt-2 font-medium text-blue-900">
          Email:{' '}
          <a
            href="mailto:hello@roomikh.com"
            className="text-blue-600 hover:underline"
          >
            hello@roomikh.com
          </a>
        </p>
      </div>
    </main>
  )
}
