import React, { useState } from 'react';
import Header from './Header';

const DocPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');

  const apiEndpoints = [
    { 
      id: 'ingest',
      method: 'POST', 
      endpoint: '/api/rag/ingest', 
      description: 'Ingest documents and parse content',
      title: 'Ingest Documents',
      requestBody: { document: 'string', metadata: { title: 'string', source: 'string' } },
      response: { document_id: 'string', status: 'success' }
    },
    { 
      id: 'index',
      method: 'POST', 
      endpoint: '/api/rag/index', 
      description: 'Create vector and graph indexes',
      title: 'Create Indexes',
      requestBody: { document_id: 'string', embedding_model: 'string' },
      response: { index_id: 'string', status: 'indexed' }
    },
    { 
      id: 'query',
      method: 'POST', 
      endpoint: '/api/rag/query', 
      description: 'Query with hybrid retrieval',
      title: 'Query Documents',
      requestBody: { query: 'string', top_k: 'number' },
      response: { results: [{ document_id: 'string', score: 'number', content: 'string' }] }
    },
    { 
      id: 'synthesize',
      method: 'POST', 
      endpoint: '/api/rag/synthesize', 
      description: 'Generate answers with context',
      title: 'Synthesize Answers',
      requestBody: { query: 'string', context_ids: ['string'] },
      response: { answer: 'string', sources: ['string'] }
    },
    { 
      id: 'list-documents',
      method: 'GET', 
      endpoint: '/api/rag/documents', 
      description: 'List all documents',
      title: 'List Documents',
      requestBody: null,
      response: { documents: [{ id: 'string', title: 'string', created_at: 'string' }] }
    },
    { 
      id: 'get-document',
      method: 'GET', 
      endpoint: '/api/rag/documents/{id}', 
      description: 'Get document details',
      title: 'Get Document',
      requestBody: null,
      response: { id: 'string', title: 'string', content: 'string', metadata: {} }
    },
    { 
      id: 'delete-document',
      method: 'DELETE', 
      endpoint: '/api/rag/documents/{id}', 
      description: 'Delete document',
      title: 'Delete Document',
      requestBody: null,
      response: { status: 'deleted' }
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-6">Getting Started</h1>
              <p className="text-xl text-gray-300 mb-8">
                Get up and running with our RAG API in minutes. Follow these simple steps to start building intelligent context-aware applications.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">1. Get Your API Key</h2>
                <p className="text-gray-300 mb-4">
                  Sign up for an account and get your API key from the dashboard.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400">API_KEY=your-api-key-here</code>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">2. Make Your First Request</h2>
                <p className="text-gray-300 mb-4">Ingest a document:</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://api.contexis.com/api/rag/ingest \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "document": "Your document content here",
    "metadata": {
      "title": "Document Title",
      "source": "web"
    }
  }'`}
                  </pre>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">3. Query Your Data</h2>
                <p className="text-gray-300 mb-4">Search and retrieve relevant context:</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X POST https://api.contexis.com/api/rag/query \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "What is the main topic?",
    "top_k": 5
  }'`}
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
                Complete reference for the RAG API endpoints and methods.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Authentication</h2>
                <p className="text-gray-300 mb-4">
                  All API requests require authentication using your API key. Include it in the Authorization header:
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400">Authorization: Bearer YOUR_API_KEY</code>
                </div>
              </div>

              <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">Base URL</h2>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400">https://api.contexis.com</code>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        // Render individual API endpoint details
        const endpoint = apiEndpoints.find(ep => ep.id === activeSection);
        if (endpoint) {
          return (
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{endpoint.title}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-600/30 text-green-300' :
                    endpoint.method === 'POST' ? 'bg-blue-600/30 text-blue-300' :
                    'bg-red-600/30 text-red-300'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-gray-300 font-mono text-lg">{endpoint.endpoint}</code>
                </div>
                <p className="text-xl text-gray-300 mb-8">{endpoint.description}</p>
              </div>

              <div className="space-y-6">
                {endpoint.requestBody && (
                  <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">Request Body</h2>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        {JSON.stringify(endpoint.requestBody, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}

                <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Response</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
                      {JSON.stringify(endpoint.response, null, 2)}
                    </pre>
                  </div>
                </div>

                <div className="bg-gray-800/50 border border-blue-500/20 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Example Request</h2>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X ${endpoint.method} https://api.contexis.com${endpoint.endpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  ${endpoint.requestBody ? `-d '${JSON.stringify(endpoint.requestBody, null, 2)}'` : ''}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-800/30 border-r border-blue-500/20 min-h-screen">
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">DOCUMENTATION</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveSection('getting-started')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'getting-started'
                      ? 'text-blue-400 bg-blue-600/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  Getting Started
                </button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">API REFERENCE</h3>
              <div className="space-y-1">
                <button
                  onClick={() => setActiveSection('api-reference')}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === 'api-reference'
                      ? 'text-blue-400 bg-blue-600/20'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  Overview
                </button>
              </div>
              <div className="mt-2 ml-4 space-y-1">
                {apiEndpoints.map((endpoint) => (
                  <button
                    key={endpoint.id}
                    onClick={() => setActiveSection(endpoint.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === endpoint.id
                        ? 'text-blue-400 bg-blue-600/20'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <span className={`text-xs mr-2 ${
                      endpoint.method === 'GET' ? 'text-green-400' :
                      endpoint.method === 'POST' ? 'text-blue-400' :
                      'text-red-400'
                    }`}>
                      {endpoint.method}
                    </span>
                    {endpoint.title}
                  </button>
                ))}
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
      </div>
    </div>
  );
};

export default DocPage;
