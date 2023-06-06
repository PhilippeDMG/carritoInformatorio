import { useState } from "react"
import styles from "./producto.module.css"

const Producto = ({ producto, total, setTotal }) => {
  const [cantidad, setCantidad] = useState(0)
  const handleMinus = () => {
    setTotal(Math.round((total - producto.precio) * 100) / 100)
    setCantidad(cantidad - 1)
  }
  const handlePlus = () => {
    setTotal(
      Math.round((parseFloat(total) + parseFloat(producto.precio)) * 100) / 100
    )
    setCantidad(cantidad + 1)
  }
  return (
    <div className={styles.producto} key={producto.nombre}>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion ? producto.descripcion : "Sin descripción"}</p>
      <h3>${producto.precio}</h3>
      <div className={styles.bottom}>
        <button
          className={styles.botones}
          onClick={handleMinus}
          disabled={cantidad ? false : true}
        >
          -
        </button>
        <h4>{cantidad}</h4>
        <button className={styles.botones} onClick={handlePlus}>
          +
        </button>
      </div>
    </div>
  )
}

export default Producto
