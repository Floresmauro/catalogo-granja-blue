export default function Carrito({ productos, quitar }) {
  const total = productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <aside className="bg-white border shadow p-4 m-4 rounded w-full max-w-md self-center md:self-start">
      <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>
      {productos.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-2">
          {productos.map(item => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{item.nombre}</p>
                <p className="text-sm">Cantidad: {item.cantidad}</p>
                <p className="text-sm">Precio: ${item.precio}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700 font-bold"
                onClick={() => quitar(item.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
          <li className="font-bold text-right mt-4">Total: ${total}</li>
        </ul>
      )}
    </aside>
  );
}