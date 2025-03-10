export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
  
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await res.json();
  
    return { props: { user } };
  }
  
  export default function UserDetail({ user }) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{user.name}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <p className="text-lg text-gray-800"><span className="font-semibold text-blue-600">📧 Email:</span> {user.email}</p>
          <p className="text-lg text-gray-800"><span className="font-semibold text-green-600">📞 Phone:</span> {user.phone}</p>
          <p className="text-lg text-gray-800"><span className="font-semibold text-purple-600">🌐 Website:</span> <a href={`https://${user.website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        </div>
        <a href="/users" className="mt-4 text-blue-600 hover:underline">⬅ Kembali ke daftar pengguna</a>
      </div>
    );
  } 