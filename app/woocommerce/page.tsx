import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WooCommerce | Minimal Docs Site',
  description: 'Learn how to set up and use WooCommerce'
}

export default function WooCommerce() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">WooCommerce</h1>
      <p className="text-xl mb-4">
        Welcome to the WooCommerce guide. Follow these steps to set up your
        online store and begin selling products.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Installation</h2>
      <p className="mb-4">
        To install WooCommerce, navigate to your WordPress dashboard and follow
        these steps:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Go to Plugins → Add New</li>
        <li>Search for &quot;WooCommerce&quot;</li>
        <li>Click &quot;Install Now&quot; then &quot;Activate&quot;</li>
        <li>Follow the setup wizard to configure basic store settings</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Configuration</h2>
      <p className="mb-4">
        After installation, you&apos;ll need to configure these essential
        settings:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Store location and currency</li>
        <li>Payment methods</li>
        <li>Shipping zones and methods</li>
        <li>Tax rates (if applicable)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Adding Products</h2>
      <p className="mb-4">To add your first product:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Navigate to Products → Add New</li>
        <li>Enter product name and description</li>
        <li>Set product type (Simple, Variable, etc.)</li>
        <li>Add pricing and inventory details</li>
        <li>Upload product images</li>
        <li>Set product categories and tags</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Orders</h2>
      <p className="mb-4">
        Once your store is live, you can manage orders through:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>WooCommerce → Orders dashboard</li>
        <li>Process new orders and update order status</li>
        <li>Generate shipping labels and invoices</li>
        <li>Handle refunds and returns</li>
      </ul>

      <p className="mt-8 text-gray-600">
        For more detailed information, please refer to the official WooCommerce
        documentation or contact your system administrator.
      </p>
    </main>
  )
}
