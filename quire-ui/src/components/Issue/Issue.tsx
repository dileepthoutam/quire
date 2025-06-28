import React from 'react';

export enum IssueType {
  BUG = 'Bug',
  FEATURE = 'Feature',
  TASK = 'Task',
}

export enum BugStatus {
  OPEN = 'Open',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  CLOSED = 'Closed',
}

export enum BugPriority {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical',
}

export interface IssueProps {
  id: string;
  issueType: IssueType;
  title: string;
  description: string;
  bugStatus: BugStatus;
  bugPriority: BugPriority;
  createdAt: Date;
  updatedAt: Date;
  assignedTo: string;
}

const Issue: React.FC<IssueProps> = ({ id, issueType, title, description, bugStatus, bugPriority, createdAt, updatedAt, assignedTo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-sm font-medium text-gray-500">{id}</span>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="font-bold">Issue Type:</span> {issueType}
        </div>
        <div>
          <span className="font-bold">Status:</span> {bugStatus}
        </div>
        <div>
          <span className="font-bold">Priority:</span> {bugPriority}
        </div>
        <div>
          <span className="font-bold">Assigned To:</span> {assignedTo}
        </div>
        <div>
          <span className="font-bold">Created At:</span> {createdAt.toLocaleDateString()}
        </div>
        <div>
          <span className="font-bold">Updated At:</span> {updatedAt.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Issue;
