import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MitBridge Admin | Minimal Docs Site',
  description: 'Learn how to use the MitBridge Admin interface'
}

export default function MitBridgeAdmin() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        MitBridge WordPress Admin Access
      </h1>
      <p className="text-xl mb-4">
        This guide will help you access and navigate the WordPress admin
        dashboard for MitBridge.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Accessing the Admin Dashboard
      </h2>
      <p className="mb-4">
        To access the WordPress admin dashboard, follow these steps:
      </p>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>
          Visit{' '}
          <a
            href="https://mitbridge.ca/login"
            className="text-blue-600 hover:underline"
          >
            https://mitbridge.ca/login
          </a>
        </li>
        <li>Enter your username or email address</li>
        <li>Enter your password</li>
        <li>Click the &quot;Log In&quot; button</li>
        <li>
          Once logged in, you&apos;ll be redirected to the WordPress dashboard
          at /wp-admin
        </li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Dashboard Overview</h2>
      <p className="mb-4">
        The WordPress dashboard provides comprehensive tools to manage your
        website. Here are the key areas and their functions:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Posts</strong> - Create, edit, and manage blog posts, news
          updates, and articles
        </li>
        <li>
          <strong>Pages</strong> - Manage static website pages including the
          homepage, about us, and contact pages
        </li>
        <li>
          <strong>Media Library</strong> - Upload and organize images,
          documents, videos, and other media files
        </li>
        <li>
          <strong>Comments</strong> - Review, approve, or delete user comments
          and manage spam
        </li>
        <li>
          <strong>Appearance</strong> - Customize your site&apos;s theme, menus,
          widgets, and header/footer elements
        </li>
        <li>
          <strong>Plugins</strong> - Install, activate, update, or remove
          WordPress plugins to extend functionality
        </li>
        <li>
          <strong>Users</strong> - Manage user accounts, assign roles (Admin,
          Editor, Author, etc.), and set permissions
        </li>
        <li>
          <strong>Settings</strong> - Configure site-wide options including
          permalinks, timezone, and reading settings
        </li>
        <li>
          <strong>WooCommerce</strong> - Manage your online store, products,
          orders, and customer information
        </li>
        <li>
          <strong>SEO</strong> - Access SEO settings to optimize your content
          for search engines
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Security Best Practices
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          Use a strong password with at least 12 characters, including numbers,
          symbols, and mixed case letters
        </li>
        <li>Enable two-factor authentication if available</li>
        <li>Never share your login credentials</li>
        <li>Log out when accessing from shared or public computers</li>
        <li>Regularly update your password every 90 days</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Password Recovery</h2>
      <p className="mb-4">If you&apos;ve forgotten your password:</p>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>
          Click the &quot;Lost your password?&quot; link on the login page
        </li>
        <li>Enter your email address associated with your account</li>
        <li>
          Check your email inbox (and spam folder) for password reset
          instructions
        </li>
        <li>Follow the link to create a new password</li>
        <li>Use a strong, unique password that you haven&apos;t used before</li>
      </ol>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Common Issues & Troubleshooting
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Login Issues</strong> - Clear your browser cache and cookies
          if experiencing login problems
        </li>
        <li>
          <strong>Session Timeout</strong> - The system automatically logs you
          out after 24 hours for security
        </li>
        <li>
          <strong>Browser Compatibility</strong> - Use modern browsers like
          Chrome, Firefox, or Safari for best experience
        </li>
        <li>
          <strong>Lost Access</strong> - Contact your site administrator if
          you&apos;re unable to recover your account
        </li>
      </ul>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <p className="text-yellow-800">
          <strong>Important Security Note:</strong> For security reasons, please
          ensure you&apos;re using a strong password and never share your login
          credentials with others. Always verify you&apos;re on the correct
          login URL before entering credentials. If you suspect unauthorized
          access, contact your site administrator immediately.
        </p>
      </div>

      <p className="mt-8 text-gray-600">
        For additional support or technical assistance, please contact the
        MitBridge support team at support@mitbridge.ca or consult the WordPress
        documentation. Our support team is available Monday-Friday, 9 AM - 5 PM
        EST.
      </p>
    </main>
  )
}
