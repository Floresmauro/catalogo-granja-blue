import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Carrito from "./components/Carrito";

const productos = [
  { id: 1, nombre: "Milanesa de Pollo", precio: 9500, imagen: "/img/milanesa.jpeg", categoria: "Milanesas" },
  { id: 2, nombre: "Huevos Extra", precio: 7500, imagen: "/img/Huevos.png", categoria: "Huevos" },
  { id: 3, nombre: "Pollo Entero", precio: 4900, imagen: "/img/pollo.jpg", categoria: "Pollo" }
];

export default function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const [carrito, setCarrito] = useState([]);

  const categorias = ["Todas", ...new Set(productos.map(p => p.categoria))];

  const productosFiltrados = categoriaSeleccionada === "Todas"
    ? productos
    : productos.filter(p => p.categoria === categoriaSeleccionada);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existente = prev.find(p => p.id === producto.id);
      return existente
        ? prev.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p)
        : [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const quitarDelCarrito = (id) => {
    setCarrito(prev =>
      prev.map(p => p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p)
          .filter(p => p.cantidad > 0)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow p-4 text-center text-2xl font-bold">
        Granja Ohana
      </header>

      <Carrito productos={carrito} quitar={quitarDelCarrito} />

      <main className="flex-1 p-6">
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`px-4 py-2 rounded font-semibold border transition ${
                categoriaSeleccionada === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {productosFiltrados.map((prod, i) => (
            <ProductCard key={i} {...prod} onAgregar={agregarAlCarrito} />
          ))}
        </div>
      </main>

            <a
        href="https://wa.me/5491158828724?text=Hola!%20Estoy%20interesado%20en%20hacer%20un%20pedido%20a%20Granja%20Ohana"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48a12.003 12.003 0 00-17.04 0c-4.68 4.68-4.68 12.28 0 16.96 2.18 2.18 5.02 3.24 7.84 3.24a11.97 11.97 0 005.8-1.5l3.7.96-1-3.6A11.97 11.97 0 0020.52 3.48zm-3.5 13.9c-.52.52-1.22.8-1.95.8-1.14 0-2.18-.44-2.97-1.23l-2.9-2.9c-.79-.79-1.23-1.83-1.23-2.97 0-.73.28-1.43.8-1.95a2.746 2.746 0 013.89 0l.86.86-1.42 1.41-.86-.85a.75.75 0 00-1.06 1.06l2.9 2.9c.29.29.67.44 1.06.44s.78-.15 1.06-.44l.86-.86 1.41 1.42-.85.86z" />
        </svg>
        Contactar
      </a>

      <footer className="bg-gray-800 text-gray-300 text-center py-4 text-sm">
        &copy; 2025 Granja Ohana - Todos los derechos reservados.
      </footer>
    </div>
  );
}