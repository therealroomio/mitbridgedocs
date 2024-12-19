import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divi Builder | Minimal Docs Site',
  description: 'Learn how to use the Divi Builder and its features'
}

export default function DiviBuilder() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Divi Builder</h1>
      <p className="text-xl mb-4">
        The Divi Builder provides a set of powerful tools and modules to help
        you build your website visually. Here&apos;s an overview of some key
        features:
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
      <p className="mb-4">To begin using the Divi Builder:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Enable the Divi Builder on your page or post</li>
        <li>Choose between Visual Builder or Backend Builder</li>
        <li>Start adding sections, rows, and modules</li>
        <li>Save your changes and preview</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Core Modules</h2>
      <p className="mb-4">Essential modules available in Divi Builder:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Text and Image modules</li>
        <li>Sliders and Galleries</li>
        <li>Forms and Contact elements</li>
        <li>Navigation and Menu components</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Layout Options</h2>
      <p className="mb-4">Customize your layouts with:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Section configurations</li>
        <li>Row structures</li>
        <li>Column arrangements</li>
        <li>Responsive settings</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Styling Tools</h2>
      <p className="mb-4">Design options include:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Color and typography settings</li>
        <li>Spacing and alignment controls</li>
        <li>Animation effects</li>
        <li>Custom CSS options</li>
      </ul>

      <p className="mt-8 text-gray-600">
        For more advanced features and tutorials, please refer to the official
        Divi documentation or contact our support team.
      </p>
    </div>
  )
}
