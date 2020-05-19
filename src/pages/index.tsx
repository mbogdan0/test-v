
export default function Index({ allPostsData }) {
  return (
    <div>
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