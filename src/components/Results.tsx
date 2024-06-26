import React from 'react'
import Card from '@/components/Card';
interface Result {
    id: number;
    original_title: string;
  }
  interface ResultsProps {
    results: Result[];
  }
  
  const Results: React.FC<ResultsProps> = ({ results }) => {
    if (!Array.isArray(results)) {
      return <div>No results available</div>;
    }  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
        {
            results.map((result) => (
              <Card key={result.id} result={result}/>
            ))
        }
    </div>
  )
}
export default Results;