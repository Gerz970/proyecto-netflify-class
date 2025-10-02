import { useState } from 'react'

function FormularioTarea({ agregarTarea }) {
  const [textoTarea, setTextoTarea] = useState('')

  const manejarSubmit = (e) => {
    e.preventDefault()
    if (textoTarea.trim() !== '') {
      agregarTarea(textoTarea.trim())
      setTextoTarea('')
    }
  }

  return (
    <form onSubmit={manejarSubmit} className="formulario-tarea">
      <h2>Agregar Nueva Tarea (actualizada)</h2>
      <div className="input-grupo">
        <input
          type="text"
          value={textoTarea}
          onChange={(e) => setTextoTarea(e.target.value)}
          placeholder="Escribe tu tarea aquí..."
          className="input-tarea"
        />
        <button type="submit" className="boton-agregar">
          Agregar
        </button>
      </div>
    </form>
  )
}

export default FormularioTarea
