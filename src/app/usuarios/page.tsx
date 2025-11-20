//FLOWBITE - https://flowbite.com/docs/components/navbar/
"use client"
import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation";

export default function Usuarios() {
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("test");

  const router = useRouter();

  const checkUser = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch('/api/get_users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Bienvenido!');
        setEmail('');
        setPassword('');
        setPosts(data);
        router.push(`/usuarios/panel`);
      } else {
        setMessage('Usuario y/o contraseña incorrectos');
      }
    } catch (error) {
      setMessage('Network error occurred');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkUser();
  }, [email, password]);

  //const router = useRouter();
  const ingreso = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setEmail(form.email.value);
    setPassword(form.password.value);
  };

  console.log("posts", posts);
  console.log("message", message);

  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[url('https://www.webinarsenconcreto.com/images/2022/fondo1.jpg')] bg-gray-700 bg-blend-multiply z-10 bg-cover bg-center bg-no-repeat font-montserrat">
        <main className="mx-auto w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-1 gap-8 row-start-2 items-center sm:items-start z-0" style={{
          marginTop: "90px",
          marginBottom: "100px",
          padding: "10px",
        }}>
          <div className="text-center">
            <h1 className="text-4xl text-white font-light text-center">¡BIENVENIDO!</h1>
            <h2 className="text-white">PANEL DE USUARIOS</h2>
            <p className="mt-3 text-gray-300">Instituto Mexicano del Cemento y del Concreto A.C.</p>
            <div className="mt-8 p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg mx-0 sm:mx-72">
              {loading && <h2 className="text-white">ENVIANDO DATOS</h2>}
              {message && <h2 className="text-white font-bold uppercase pb-5">{message}</h2>}
              <form onSubmit={ingreso} className="flex flex-col gap-6 text-left">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                    Contraseña:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="********"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-slate-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
                >
                  Iniciar sesión
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}