import React, { useState } from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import TodoList from './components/ToDoList';

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
      <Greeting name="Reynald" />
      <Counter />
      <TodoList />
      <Example />
    </main>
  );
}

// Komponen Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Aplikasi React Saya</p>
    </footer>
  );
}

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(8);
  const [email, setEmail] = useState('');

  return (
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Umur" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
    </div>
  );
}

// Komponen Utama
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
