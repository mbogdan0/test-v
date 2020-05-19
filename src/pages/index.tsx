
export default function Index({ allPostsData }) {
  return (
    <div>
      <h1>hello pasta</h1>
      {JSON.stringify(allPostsData)}
    </div>
  );
}

export async function getStaticProps() {



  const allPostsData = await fetch('https://jsonplaceholder.typicode.com/todos/').then(a => a.json());
  return {
    props: {
      allPostsData
    }
  }
}