import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;
interface RequestParams {
  searchParams: { [key: string]: string }; // Adjust type according to actual structure
}

export default async function Home({ searchParams }: RequestParams) {
  const params = new URLSearchParams(searchParams); // Convert to URLSearchParams
  const genre = params.get('genre');
  const res = await fetch(
        `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
      }?api_key=${API_KEY}&language=en-US&page=1`,
       {next: {revalidate: 10}}
      );
  const data = await res.json();
  if(!res.ok){
    throw new Error ('Failed to fetch data');
  }
  const results = data.results;
    return (
    <div>
      <Results results={results} />
    </div>
  )
}
