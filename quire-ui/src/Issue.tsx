import React, { useState, useRef, useEffect } from 'react';
import './index.css';

interface IssueProps {
  issueNumber: string;
  issueType: 'bug' | 'feature' | 'task';
  assignee: string;
  reporter: string;
  title: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
  priority: 'SL1' | 'SL2' | 'SL3' | 'SL4';
}

const Issue: React.FC<IssueProps> = ({
  issueNumber,
  issueType: initialIssueType,
  assignee: initialAssignee,
  reporter: initialReporter,
  title: initialTitle,
  description: initialDescription,
  status: initialStatus,
  priority: initialPriority,
}) => {
  const [issueType, setIssueType] = useState(initialIssueType);
  const [status, setStatus] = useState(initialStatus);
  const [priority, setPriority] = useState(initialPriority);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [assignee, setAssignee] = useState(initialAssignee);
  const [reporter, setReporter] = useState(initialReporter);

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = 'auto';
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [title]);

  useEffect(() => {
    if (descriptionRef.current) {
      descriptionRef.current.style.height = 'auto';
      descriptionRef.current.style.height = `${descriptionRef.current.scrollHeight}px`;
    }
  }, [description]);


  const getStatusColor = () => {
    switch (status) {
      case 'OPEN':
        return 'text-green-500';
      case 'IN_PROGRESS':
        return 'text-yellow-500';
      case 'CLOSED':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getPriorityColor = () => {
    switch (priority) {
      case 'SL1':
        return 'text-red-500';
      case 'SL2':
        return 'text-orange-500';
      case 'SL3':
        return 'text-yellow-500';
      case 'SL4':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const issueTypes: IssueProps['issueType'][] = ['bug', 'feature', 'task'];
  const statuses: IssueProps['status'][] = ['OPEN', 'IN_PROGRESS', 'CLOSED'];
  const priorities: IssueProps['priority'][] = ['SL1', 'SL2', 'SL3', 'SL4'];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 border border-gray-200 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-500">{issueNumber}</h1>
      </div>
      <div className="flex">
        <div className="w-2/3 pr-8">
          <div className="relative">
            <textarea
              ref={titleRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={180}
              className="text-3xl font-bold text-gray-800 mt-1 mb-1 bg-transparent w-full resize-none overflow-hidden"
              rows={1}
            />
          </div>
          <div className="relative mt-4">
            <textarea
              ref={descriptionRef}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={1000}
              className="text-gray-600 mb-1 bg-transparent w-full resize-none overflow-hidden"
              rows={5}
            />
          </div>
        </div>
        <div className="w-1/3 pl-8 border-l border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-500">Issue Type:</span>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value as IssueProps['issueType'])}
              className="text-sm font-semibold text-gray-500 uppercase bg-transparent text-right"
            >
              {issueTypes.map((type) => (
                <option key={type} value={type} className="text-black text-right">
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-500">Status:</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as IssueProps['status'])}
              className={`text-sm font-semibold bg-transparent text-right ${getStatusColor()}`}
            >
              {statuses.map((s) => (
                <option key={s} value={s} className="text-black text-right">
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-500">Priority:</span>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as IssueProps['priority'])}
              className={`font-bold ${getPriorityColor()} bg-transparent text-right`}
            >
              {priorities.map((p) => (
                <option key={p} value={p} className="text-black text-right">
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-500">Assignee:</span>
            <input
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="text-gray-800 bg-transparent text-right w-full"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-500">Reporter:</span>
            <input
              type="text"
              value={reporter}
              onChange={(e) => setReporter(e.target.value)}
              className="text-gray-800 bg-transparent text-right w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;
