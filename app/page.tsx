export default function Home() {
  // Sample data to display
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    joinedDate: "2024-01-15",
    projects: [
      { id: 1, name: "E-commerce Platform", status: "Active", progress: 85 },
      { id: 2, name: "Mobile App", status: "Planning", progress: 20 },
      { id: 3, name: "Analytics Dashboard", status: "Completed", progress: 100 }
    ],
    stats: {
      totalCommits: 342,
      pullRequests: 28,
      issuesClosed: 47
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Syntux Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            AI-Generated UI Components with Syntux
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Dynamic UI generation powered by AI
          </p>
        </header>

        <div className="space-y-8">
          {/* Demo Section 1: Code Example */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Basic Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Here's how simple it is to use Syntux:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`import { GeneratedUI } from "@/lib/getsyntux/GeneratedUI";
import { createAnthropic } from "@ai-sdk/anthropic";

const anthropic = createAnthropic({ 
  apiKey: process.env.ANTHROPIC_API_KEY 
});

export default function MyComponent() {
  const data = {
    name: "John Doe",
    email: "john@example.com",
    projects: [...]
  };

  return (
    <GeneratedUI 
      value={data}
      model={anthropic("claude-sonnet-4-5")}
      hint="Create a modern user profile dashboard"
      placeholder={<div>Loading...</div>}
    />
  );
}`}
              </pre>
            </div>
          </section>

          {/* Demo Section 2: Features */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🤖 AI-Powered Generation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Automatically generates beautiful UI components from your data using Claude AI
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🎨 Customizable Hints
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Guide the AI with design hints to match your brand and preferences
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  ⚡ Server Actions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Attach server actions to components for interactive functionality
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🔧 Custom Components
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use your own React components or third-party libraries
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  💾 Schema Caching
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cache generated schemas to avoid regeneration and save costs
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  🚀 Next.js Ready
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Seamless integration with Next.js App Router and React Server Components
                </p>
              </div>
            </div>
          </section>

          {/* Demo Section 3: Sample Data */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Sample Data
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is the data structure that would be passed to GeneratedUI:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-gray-800 dark:text-gray-200">
                {JSON.stringify(userData, null, 2)}
              </pre>
            </div>
          </section>

          {/* Demo Section 4: Installation */}
          <section className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4">
              Getting Started
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1. Install Syntux</h3>
                <div className="bg-black/30 rounded p-3 font-mono text-sm">
                  npx getsyntux@0.5
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2. Install AI SDK</h3>
                <div className="bg-black/30 rounded p-3 font-mono text-sm">
                  npm install ai @ai-sdk/anthropic
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3. Set API Key</h3>
                <div className="bg-black/30 rounded p-3 font-mono text-sm">
                  ANTHROPIC_API_KEY=your_key_here
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">4. Use in Your App</h3>
                <p className="text-sm opacity-90">
                  Import GeneratedUI and start creating dynamic interfaces!
                </p>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="bg-blue-50 dark:bg-gray-700 rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              📚 Documentation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Learn more about Syntux and its capabilities:
            </p>
            <div className="space-y-2">
              <a 
                href="https://github.com/puffinsoft/syntux" 
                className="block text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                → GitHub Repository
              </a>
              <a 
                href="https://github.com/puffinsoft/syntux/wiki/v0.5.x" 
                className="block text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                → v0.5.x Documentation
              </a>
            </div>
          </section>
        </div>

        <footer className="text-center mt-12 text-gray-600 dark:text-gray-400">
          <p>
            Built with{" "}
            <a 
              href="https://github.com/puffinsoft/syntux" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Syntux
            </a>
            {" "}and{" "}
            <a 
              href="https://nextjs.org" 
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
