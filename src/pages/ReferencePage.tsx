import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import contentData from '../data/playbook-content.json';

const refRouteMap: Record<string, string> = {
  'cc-mcc': '/reference/cc-mcc',
  hcc: '/reference/hcc',
  'apr-drg': '/reference/apr-drg',
  psi: '/reference/psi',
  lejr: '/reference/lejr',
  shfft: '/reference/shfft',
  'spinal-fusion': '/reference/spinal-fusion',
  cabg: '/reference/cabg',
  'major-bowel': '/reference/major-bowel'
};

export const ReferencePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !refRouteMap[slug]) {
    return <Navigate to="/docs/overview" replace />;
  }

  const jsonRoute = refRouteMap[slug];
  const pageData = (contentData as Record<string, any>)[jsonRoute];

  if (!pageData) {
    return (
      <div className="p-4 border border-red-500 rounded bg-red-950/20 text-red-405 font-mono text-xs">
        Error: Reference card "{jsonRoute}" not found in compiled database.
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

export default ReferencePage;
