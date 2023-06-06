import { useState } from "react"
import Producto from "./components/producto"

function App() {
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState([])
  const [nombre, setNombre] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [precio, setPrecio] = useState("")
  const validForm = nombre !== "" && precio !== ""

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevoProducto = {
      nombre,
      descripcion,
      precio,
    }
    setProductos(productos.concat(nuevoProducto))
    setNombre("")
    setDescripcion("")
    setPrecio("")
  }
  return (
    <div className='container'>
      <section className='carga'>
        <h2>Cargar producto</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='nombre'>Nombre del producto</label>
          <input
            type='text'
            id='nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor='descripcion'>Descripción (opcional)</label>
          <input
            type='text'
            id='descripcion'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <label htmlFor='precio'>Precio</label>
          <input
            type='number'
            min='0'
            step='any'
            id='precio'
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
          <button type='submit' disabled={validForm ? false : true}>
            Agregar
          </button>
        </form>
      </section>
      <section className='listado'>
        <div className='info'>
          <h2>Listado</h2>
          <div className='rightPart'>
            <img src='/cart-shopping-solid.svg' alt='icono carrito' />

            <div>${total}</div>
          </div>
        </div>
        <div className='productos'>
          {productos.length === 0 ? (
            <div className='letraGrande'>No hay productos</div>
          ) : (
            productos.map((producto) => (
              <Producto producto={producto} total={total} setTotal={setTotal} />
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default App
