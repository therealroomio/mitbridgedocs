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
        <li>Install recommended extensions based on your needs</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Store Setup</h2>
      <p className="mb-4">
        Configure these essential settings to get your store running:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>General Settings</strong>
          <ul className="ml-6 list-circle">
            <li>Store address and contact information</li>
            <li>Currency and tax settings</li>
            <li>Selling location restrictions</li>
          </ul>
        </li>
        <li>
          <strong>Payment Methods</strong>
          <ul className="ml-6 list-circle">
            <li>Credit/debit cards via Stripe or PayPal</li>
            <li>Direct bank transfer</li>
            <li>Cash on delivery</li>
            <li>Other payment gateways</li>
          </ul>
        </li>
        <li>
          <strong>Shipping</strong>
          <ul className="ml-6 list-circle">
            <li>Shipping zones and regions</li>
            <li>Flat rate or calculated shipping</li>
            <li>Free shipping rules</li>
            <li>Local pickup options</li>
          </ul>
        </li>
        <li>
          <strong>Tax Settings</strong>
          <ul className="ml-6 list-circle">
            <li>Tax rates by location</li>
            <li>Tax classes for different products</li>
            <li>Price display options</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        WooCommerce Payments Setup
      </h2>
      <p className="mb-4">
        WooCommerce Payments allows you to securely accept major cards, Apple
        Pay, and local payment methods directly on your store.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        Installation & Requirements
      </h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>WordPress 5.9 or greater</li>
        <li>WooCommerce 6.9 or greater</li>
        <li>SSL certificate installed (https)</li>
        <li>
          Business located in a{' '}
          <a
            href="https://woocommerce.com/document/woopayments/#section-1"
            className="text-blue-600 hover:underline"
          >
            supported country
          </a>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Setup Process</h3>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>Install and activate the WooCommerce Payments plugin</li>
        <li>Click &quot;Get Started&quot; to begin the setup process</li>
        <li>Connect your WordPress.com account or create a new one</li>
        <li>
          Complete your business details:
          <ul className="ml-6 list-circle mt-2">
            <li>Business name and type</li>
            <li>Tax ID number (EIN for US)</li>
            <li>Business address</li>
            <li>Bank account information for deposits</li>
          </ul>
        </li>
        <li>Verify your identity with required documentation</li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-3">Payment Methods</h3>
      <p className="mb-4">
        WooCommerce Payments supports various payment methods:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Card Payments</strong>
          <ul className="ml-6 list-circle">
            <li>Credit & debit cards (Visa, Mastercard, Amex)</li>
            <li>Saved cards for returning customers</li>
            <li>3D Secure authentication support</li>
          </ul>
        </li>
        <li>
          <strong>Digital Wallets</strong>
          <ul className="ml-6 list-circle">
            <li>Apple Pay</li>
            <li>Google Pay</li>
            <li>Link by Stripe</li>
          </ul>
        </li>
        <li>
          <strong>Local Payment Methods</strong>
          <ul className="ml-6 list-circle">
            <li>Sofort</li>
            <li>iDEAL</li>
            <li>SEPA Direct Debit</li>
            <li>Bancontact</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Transaction Settings</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Deposits</strong>
          <ul className="ml-6 list-circle">
            <li>Automatic deposits on your schedule</li>
            <li>Choose deposit frequency (daily, weekly, monthly)</li>
            <li>Minimum deposit amount settings</li>
          </ul>
        </li>
        <li>
          <strong>Transaction Fees</strong>
          <ul className="ml-6 list-circle">
            <li>Card payments: Starting from 2.9% + $0.30</li>
            <li>International cards: Additional 1% fee</li>
            <li>Currency conversion fees may apply</li>
          </ul>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Fraud Protection</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Built-in fraud prevention tools</li>
        <li>Risk filtering for suspicious transactions</li>
        <li>Dispute management interface</li>
        <li>Customizable risk rules</li>
      </ul>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <p className="text-yellow-800">
          <strong>Important:</strong> Keep your WooCommerce Payments plugin
          updated to ensure you have the latest security features and payment
          method support. Monitor your disputes regularly and respond within the
          required timeframes to prevent revenue loss.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Product Management</h2>
      <p className="mb-4">Learn how to effectively manage your products:</p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Adding Products</h3>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Basic Information</strong>
          <ul className="ml-6 list-circle">
            <li>Product name and description</li>
            <li>Short description for catalog views</li>
            <li>Categories and tags</li>
          </ul>
        </li>
        <li>
          <strong>Product Types</strong>
          <ul className="ml-6 list-circle">
            <li>Simple products - single version</li>
            <li>Variable products - multiple options (size, color)</li>
            <li>Virtual products - downloadable items</li>
            <li>Grouped products - set of related items</li>
          </ul>
        </li>
        <li>
          <strong>Pricing and Inventory</strong>
          <ul className="ml-6 list-circle">
            <li>Regular and sale prices</li>
            <li>Stock management</li>
            <li>SKU and inventory tracking</li>
            <li>Backorder settings</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Order Management</h2>
      <p className="mb-4">
        Efficiently handle orders through the WooCommerce dashboard:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Processing Orders</strong>
          <ul className="ml-6 list-circle">
            <li>View and update order status</li>
            <li>Process payments and refunds</li>
            <li>Generate invoices and packing slips</li>
            <li>Send order confirmation emails</li>
          </ul>
        </li>
        <li>
          <strong>Shipping Management</strong>
          <ul className="ml-6 list-circle">
            <li>Print shipping labels</li>
            <li>Track shipments</li>
            <li>Update delivery status</li>
          </ul>
        </li>
        <li>
          <strong>Customer Service</strong>
          <ul className="ml-6 list-circle">
            <li>Handle returns and refunds</li>
            <li>Process exchanges</li>
            <li>Manage customer communications</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Reports and Analytics
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Sales reports by date range</li>
        <li>Best-selling products</li>
        <li>Customer purchase history</li>
        <li>Stock reports and alerts</li>
        <li>Tax reports and summaries</li>
      </ul>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <p className="text-blue-800">
          <strong>Pro Tip:</strong> Regularly backup your WooCommerce store data
          and keep all plugins updated for security and optimal performance.
          Consider using automated backup solutions and staging environments for
          testing changes.
        </p>
      </div>

      <p className="mt-8 text-gray-600">
        For detailed tutorials and troubleshooting, refer to the official
        WooCommerce documentation at docs.woocommerce.com. For technical
        support, contact your system administrator or visit WooCommerce support
        forums.
      </p>
    </main>
  )
}
