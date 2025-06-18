export default function ProductCard({ nombre, precio, imagen, onAgregar }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center">
      <img src={imagen} alt={nombre} className="w-32 h-32 mx-auto object-cover mb-2 rounded" />
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