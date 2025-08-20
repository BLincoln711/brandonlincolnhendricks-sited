export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center p-8 bg-gray-900/50 rounded-xl border border-green-500/50 max-w-md">
        <div className="mb-6">
          <svg className="w-20 h-20 mx-auto text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-green-400">
          Domain Verified! 🎉
        </h1>
        
        <p className="text-gray-300 mb-6">
          brandonlincolnhendricks.com is successfully connected and live!
        </p>
        
        <div className="space-y-4 text-left bg-black/50 p-4 rounded-lg">
          <p className="text-sm">
            <span className="text-gray-500">Status:</span>{' '}
            <span className="text-green-400">✓ Active</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-500">SSL:</span>{' '}
            <span className="text-green-400">✓ Secured</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-500">Provider:</span>{' '}
            <span className="text-blue-400">Vercel</span>
          </p>
          <p className="text-sm">
            <span className="text-gray-500">DNS:</span>{' '}
            <span className="text-purple-400">GoDaddy</span>
          </p>
        </div>
        
        <div className="mt-8 space-y-3">
          <a 
            href="/"
            className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all"
          >
            Visit Homepage
          </a>
          <a 
            href="https://hendricks.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Visit Hendricks.AI
          </a>
        </div>
      </div>
    </div>
  )
}