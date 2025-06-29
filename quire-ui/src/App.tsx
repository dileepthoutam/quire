import React from 'react';
import Issue from './Issue';

const App: React.FC = () => {
  const sampleIssue = {
    issueNumber: 'QUIRE-123',
    issueType: 'bug' as const,
    assignee: 'John Doe',
    reporter: 'Jane Smith',
    title: 'Button not working on the main page',
    description: 'The primary call-to-action button on the homepage is not responding to clicks. This is blocking user registration and needs immediate attention.',
    status: 'OPEN' as const,
    priority: 'SL1' as const,
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <Issue {...sampleIssue} />
    </div>
  );
};

export default App;