import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Issue, { IssueType, BugStatus, BugPriority } from './components/Issue/Issue';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const issue = {
    id: 'QUIRE-1',
    issueType: IssueType.BUG,
    title: 'Fix button alignment',
    description: 'The button on the main page is not aligned correctly.',
    bugStatus: BugStatus.OPEN,
    bugPriority: BugPriority.HIGH,
    createdAt: new Date(),
    updatedAt: new Date(),
    assignedTo: 'John Doe',
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Issues</h1>
        <Issue {...issue} />
      </div>
    </QueryClientProvider>
  );
};

export default App;