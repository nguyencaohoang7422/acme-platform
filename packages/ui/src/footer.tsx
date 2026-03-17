'use client';
export function Footer() {
  return (
    <footer className="border-t bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-bold text-lg">Acme Platform</p>
          <p className="text-gray-600 text-sm mt-1">
            The everything app for your business.
          </p>
        </div>
        <div className="flex gap-12">
          <div>
            <p className="font-semibold mb-2">Product</p>
            <nav className="flex flex-col gap-1 text-sm text-gray-600">
              <a href="/pricing" className="hover:text-gray-900">Pricing</a>
              <a href="/docs" className="hover:text-gray-900">Documentation</a>
            </nav>
          </div>
          <div>
            <p className="font-semibold mb-2">Company</p>
            <nav className="flex flex-col gap-1 text-sm text-gray-600">
              <a href="/about" className="hover:text-gray-900">About</a>
              <a href="/contact" className="hover:text-gray-900">Contact</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Acme Inc. All rights reserved.
      </div>
    </footer>
  );
}