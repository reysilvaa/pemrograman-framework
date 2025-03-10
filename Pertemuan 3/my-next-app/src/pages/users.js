export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
  
    return {
      props: { users },
      revalidate: 60
    };
  }
  
  export default function Users({ users }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Daftar Pengguna</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="p-4 border border-gray-300 rounded-md hover:bg-blue-100 transition">
                <a href={`/users/${user.id}`} className="text-blue-600 font-medium hover:underline">
                  {user.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  