import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MitBridge Admin | Minimal Docs Site',
  description: 'Learn how to use the MitBridge Admin interface'
}

export default function MitBridgeAdmin() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">MitBridge Admin</h1>
      <p className="text-xl mb-4">
        This section provides a detailed guide for using the MitBridge Admin
        interface. You&apos;ll find information about available features,
        settings, and configuration options.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Dashboard Overview</h2>
      <p className="mb-4">
        The MitBridge Admin dashboard provides quick access to key features:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Analytics and reporting</li>
        <li>User management</li>
        <li>System settings</li>
        <li>Integration controls</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">User Management</h2>
      <p className="mb-4">
        Manage your users and their permissions through these features:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Add and remove users</li>
        <li>Assign user roles</li>
        <li>Configure access permissions</li>
        <li>Monitor user activity</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">System Settings</h2>
      <p className="mb-4">Key system configuration options include:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>API configuration</li>
        <li>Security settings</li>
        <li>Backup and restore</li>
        <li>Performance optimization</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Integration Tools</h2>
      <p className="mb-4">Connect and manage various integrations:</p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Third-party services</li>
        <li>API endpoints</li>
        <li>Authentication methods</li>
        <li>Data synchronization</li>
      </ul>

      <p className="mt-8 text-gray-600">
        For additional support or technical assistance, please contact your
        system administrator or refer to the technical documentation.
      </p>
    </main>
  )
}
