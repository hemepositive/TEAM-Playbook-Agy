import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import contentData from '../data/playbook-content.json';

const moduleRouteMap: Record<string, string> = {
  overview: '/learn/team-overview',
  fundamentals: '/learn/cdi-fundamentals',
  'documentation-to-drg': '/learn/documentation-to-drg',
  'surgical-decisions': '/learn/surgical-decisions-and-cost',
  lejr: '/procedures/lejr',
  'hip-fracture': '/procedures/shfft',
  'spinal-fusion': '/procedures/spinal-fusion',
  cabg: '/procedures/cabg',
  'major-bowel': '/procedures/bowel',
};

export const PlaybookPage: React.FC = () => {
  const { module } = useParams<{ module: string }>();

  if (!module || !moduleRouteMap[module]) {
    return <Navigate to="/docs/overview" replace />;
  }

  const jsonRoute = moduleRouteMap[module];
  const pageData = (contentData as Record<string, any>)[jsonRoute];

  if (!pageData) {
    return (
      <div className="p-4 border border-red-500 rounded bg-red-950/20 text-red-405 font-mono text-xs">
        Error: Content module "{jsonRoute}" not found in compiled database.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div 
        className="prose prose-slate max-w-none dark:prose-invert pb-12"
        dangerouslySetInnerHTML={{ __html: pageData.html }}
      />
    </div>
  );
};

export default PlaybookPage;
