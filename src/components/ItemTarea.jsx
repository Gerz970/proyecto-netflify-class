function ItemTarea({ tarea, alternarCompletada, eliminarTarea }) {
  return (
    <div className={`item-tarea ${tarea.completada ? 'completada' : ''}`}>
      <div className="contenido-tarea">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => alternarCompletada(tarea.id)}
          className="checkbox-tarea"
        />
        <span className="texto-tarea">{tarea.texto}</span>
      </div>
      <button
        onClick={() => eliminarTarea(tarea.id)}
        className="boton-eliminar"
      >
        Eliminar
      </button>
    </div>
  )
}

export default ItemTarea
