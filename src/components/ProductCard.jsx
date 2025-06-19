export default function ProductCard({ nombre, precio, imagen, onAgregar }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <div className="w-full h-48 mb-3 overflow-hidden rounded">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover mx-auto"
        />
      </div>
      <h3 className="text-lg font-bold">{nombre}</h3>
      <p className="text-gray-700 mb-2">${precio}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => onAgregar({ nombre, precio, imagen, id: nombre })}
      >
        Agregar al carrito
      </button>
    </div>
  );
}