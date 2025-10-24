import React, { useState } from 'react';

const DocPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sidebarItems = [
    { id: 'overview', title: 'Overview', icon: '📖' },
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'api-reference', title: 'API Reference', icon: '🔧' },
    { id: 'sdk', title: 'SDK', icon: '💻' },
    { id: 'examples', title: 'Examples', icon: '📝' },
    { id: 'tutorials', title: 'Tutorials', icon: '🎓' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔍' },
  ];

  const tocItems = [
    { id: 'apis-and-sdks', title: 'APIs and SDKs' },
    { id: 'python-sdk', title: 'Python SDK' },
    { id: 'typescript-sdk', title: 'TypeScript SDK' },
  ];

  const apiEndpoints = [
    { method: 'GET', endpoint: '/api/agents', description: 'List all agents' },
    { method: 'POST', endpoint: '/api/agents', description: 'Create a new agent' },
    { method: 'GET', endpoint: '/api/agents/{id}', description: 'Retrieve agent details' },
    { method: 'PATCH', endpoint: '/api/agents/{id}', description: 'Update agent' },
    { method: 'DELETE', endpoint: '/api/agents/{id}', description: 'Delete agent' },
    { method: 'POST', endpoint: '/api/agents/{id}/run', description: 'Run agent' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">LifeContext Documentation</h1>
              <p className="text-xl text-gray-300 mb-8">
                Your perfect memory, powered by AI. Learn how to integrate LifeContext into your applications and unlock the power of AI-driven memory management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-colors">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-3">Quick Start</h3>
                <p className="text-gray-300 mb-4">Get up and running with LifeContext in minutes</p>
                <a href="#getting-started" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Start Building →
                </a>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-colors">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-white mb-3">API Reference</h3>
                <p className="text-gray-300 mb-4">Complete API documentation and examples</p>
                <a href="#api-reference" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View API →
                </a>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-colors">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="text-xl font-semibold text-white mb-3">SDK</h3>
                <p className="text-gray-300 mb-4">Native SDKs for Python, JavaScript, and more</p>
                <a href="#sdk" className="text-blue-400 hover:text-blue-300 transition-colors">
                  View SDKs →
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">What is LifeContext?</h2>
              <p className="text-gray-300 mb-6">
                LifeContext is an AI-powered memory management platform that helps you capture, organize, and retrieve information from your daily life. 
                Our advanced AI algorithms understand context, relationships, and patterns in your data to provide intelligent insights and recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">AI-Powered</span>
                <span className="px-3 py-1 bg-cyan-500/30 text-cyan-300 rounded-full text-sm">Context-Aware</span>
                <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">Intelligent Search</span>
                <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">Real-time Processing</span>
              </div>
            </div>
          </div>
        );

      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Getting Started</h1>
              <p className="text-xl text-gray-300 mb-8">
                Follow this guide to set up LifeContext and start building your first AI-powered memory system.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">1. Installation</h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400">npm install lifecontext</code>
                </div>
                <p className="text-gray-300">Or install via pip:</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400">pip install lifecontext</code>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">2. Initialize the Client</h2>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`import { LifeContext } from 'lifecontext';

const client = new LifeContext({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.lifecontext.com'
});`}
                  </pre>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">3. Create Your First Memory</h2>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`const memory = await client.memories.create({
  content: "Had a great meeting with the team today",
  tags: ["work", "meeting"],
  context: {
    location: "Office",
    participants: ["John", "Sarah"]
  }
});`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      case 'api-reference':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">API Reference</h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete reference for the LifeContext API endpoints and methods.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Endpoints</h2>
                <div className="space-y-4">
                  {apiEndpoints.map((endpoint, index) => (
                    <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`px-2 py-1 rounded text-sm font-medium ${
                          endpoint.method === 'GET' ? 'bg-green-600/30 text-green-300' :
                          endpoint.method === 'POST' ? 'bg-blue-600/30 text-blue-300' :
                          endpoint.method === 'PATCH' ? 'bg-yellow-600/30 text-yellow-300' :
                          'bg-red-600/30 text-red-300'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-white font-mono">{endpoint.endpoint}</code>
                      </div>
                      <p className="text-gray-300">{endpoint.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Authentication</h2>
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using your API key. Include it in the Authorization header:
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400">Authorization: Bearer your-api-key</code>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sdk':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">SDK Documentation</h1>
              <p className="text-xl text-gray-300 mb-8">
                Native SDKs for popular programming languages to integrate LifeContext into your applications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Python SDK</h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400">pip install lifecontext</code>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`from lifecontext import LifeContext

client = LifeContext(api_key="your-key")
memory = client.memories.create({
    content="Meeting notes",
    tags=["work"]
})`}
                  </pre>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">JavaScript SDK</h2>
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <code className="text-green-400">npm install lifecontext</code>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`import { LifeContext } from 'lifecontext';

const client = new LifeContext({
  apiKey: 'your-key'
});
const memory = await client.memories.create({
  content: 'Meeting notes',
  tags: ['work']
});`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      case 'examples':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Examples</h1>
              <p className="text-xl text-gray-300 mb-8">
                Real-world examples and code snippets to help you get started with LifeContext.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Basic Memory Creation</h2>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Create a simple memory
const memory = await client.memories.create({
  content: "Learned about React hooks today",
  tags: ["learning", "react", "programming"],
  context: {
    source: "YouTube tutorial",
    duration: "2 hours"
  }
});`}
                  </pre>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Search and Retrieve</h2>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Search for memories
const results = await client.memories.search({
  query: "react hooks",
  tags: ["programming"],
  limit: 10
});

// Retrieve specific memory
const memory = await client.memories.get(memoryId);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800/50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-2xl font-bold text-gradient">
                LifeContext
              </a>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Sign In</button>
              <a href="#doc" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-800/30 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 py-4">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Documentation</button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Guide</button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Self-Hosting</button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Cloud</button>
            <button className="text-blue-400 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors border-b-2 border-blue-400">API Reference</button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Examples</button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Leaderboard</button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Evals</button>
          </nav>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-800/30 border-r border-blue-500/20 min-h-screen">
          <div className="p-6">
            {/* External Links */}
            <div className="mb-8">
              <div className="space-y-2">
                <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.007-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Chat on Discord
                  <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Developer Forum
                  <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  DeepLearning.AI Course
                  <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* API Reference Section */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">API REFERENCE</h3>
              <div className="space-y-1">
                <button className="block w-full text-left text-blue-400 hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-blue-600/20">
                  API and SDK Overview
                </button>
                <button className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Changelog
                </button>
              </div>
            </div>

            {/* Agents Section */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">AGENTS</h3>
              <div className="space-y-1">
                <button className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  <span className="text-green-400 text-xs mr-2">GET</span>List Agents
                </button>
                <button className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  <span className="text-green-400 text-xs mr-2">GET</span>Retrieve Agent
                </button>
                <button className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  <span className="text-blue-400 text-xs mr-2">POST</span>Create Agent
                </button>
                <button className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  <span className="text-yellow-400 text-xs mr-2">PATCH</span>Modify Agent
                </button>
                <button className="block w-full text-left text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  <span className="text-red-400 text-xs mr-2">DEL</span>Delete Agent
                </button>
              </div>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                <span>Blocks</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                <span>Tools</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="flex items-center justify-between text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                <span>Messages</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            {renderContent()}
          </div>
        </div>

        {/* Right Sidebar - Table of Contents */}
        <div className="w-64 bg-gray-800/20 border-l border-blue-500/20 min-h-screen">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">On this page</h3>
            <nav className="space-y-2">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    item.id === 'apis-and-sdks'
                      ? 'text-blue-400 bg-blue-600/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocPage;