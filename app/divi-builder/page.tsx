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
        <li>Open any page or post in WordPress</li>
        <li>Click the &quot;Use Divi Builder&quot; button</li>
        <li>
          Choose your preferred editing mode:
          <ul className="ml-6 list-circle">
            <li>
              <strong>Visual Builder</strong> - Live, front-end editing
            </li>
            <li>
              <strong>Backend Builder</strong> - Traditional admin interface
              editing
            </li>
          </ul>
        </li>
        <li>Begin building by adding sections, rows, and modules</li>
        <li>Save changes and preview your work</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Building Blocks</h2>
      <p className="mb-4">Understanding the Divi Builder hierarchy:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Sections</strong> - The largest building blocks
          <ul className="ml-6 list-circle">
            <li>Regular sections</li>
            <li>Fullwidth sections</li>
            <li>Specialty sections</li>
          </ul>
        </li>
        <li>
          <strong>Rows</strong> - Contained within sections
          <ul className="ml-6 list-circle">
            <li>Custom column layouts</li>
            <li>Responsive column structures</li>
            <li>Equalized column heights</li>
          </ul>
        </li>
        <li>
          <strong>Modules</strong> - Individual content elements
          <ul className="ml-6 list-circle">
            <li>Text and media modules</li>
            <li>Interactive elements</li>
            <li>Dynamic content modules</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Essential Modules</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Content Modules</strong>
          <ul className="ml-6 list-circle">
            <li>Text Editor - Rich text formatting</li>
            <li>Image - Advanced image display options</li>
            <li>Video - Embed videos from various sources</li>
            <li>Blurb - Combine images with text</li>
          </ul>
        </li>
        <li>
          <strong>Navigation Modules</strong>
          <ul className="ml-6 list-circle">
            <li>Menu - Custom navigation menus</li>
            <li>Social Media Follow - Social profile links</li>
            <li>Search - Search functionality</li>
          </ul>
        </li>
        <li>
          <strong>Dynamic Modules</strong>
          <ul className="ml-6 list-circle">
            <li>Blog - Display post grids and lists</li>
            <li>Portfolio - Showcase projects</li>
            <li>Shop - WooCommerce integration</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Advanced Features</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Global Elements</strong>
          <ul className="ml-6 list-circle">
            <li>Save and reuse layouts</li>
            <li>Global modules and presets</li>
            <li>Library management</li>
          </ul>
        </li>
        <li>
          <strong>Design Options</strong>
          <ul className="ml-6 list-circle">
            <li>Custom CSS classes and IDs</li>
            <li>Advanced responsive controls</li>
            <li>Custom margins and padding</li>
          </ul>
        </li>
        <li>
          <strong>Performance Features</strong>
          <ul className="ml-6 list-circle">
            <li>Dynamic asset loading</li>
            <li>Lazy loading options</li>
            <li>Performance optimization settings</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Best Practices</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Plan your layout structure before building</li>
        <li>Use global elements for consistent styling</li>
        <li>Optimize images before uploading</li>
        <li>Test responsiveness on multiple devices</li>
        <li>Regularly save your work</li>
        <li>Create backups before major changes</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Keyboard Shortcuts</h2>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <h3 className="font-semibold mb-2">Visual Builder</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Ctrl + S - Save</li>
            <li>Ctrl + Z - Undo</li>
            <li>Ctrl + Y - Redo</li>
            <li>Ctrl + P - Preview</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Module Actions</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Ctrl + C - Copy</li>
            <li>Ctrl + V - Paste</li>
            <li>Ctrl + D - Duplicate</li>
            <li>Delete - Remove</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <p className="text-green-800">
          <strong>Pro Tip:</strong> Take advantage of Divi&apos;s right-click
          context menu for quick access to common actions. You can right-click
          on any element to copy, paste, delete, or access its settings.
        </p>
      </div>

      <p className="mt-8 text-gray-600">
        For comprehensive tutorials and advanced techniques, visit the official
        Divi documentation at www.elegantthemes.com/documentation/divi/. For
        technical support, contact our team or visit the Divi support forum.
      </p>
    </div>
  )
}
