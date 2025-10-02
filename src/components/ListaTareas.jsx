import ItemTarea from './ItemTarea'

function ListaTareas({ tareas, alternarCompletada, eliminarTarea }) {
  if (tareas.length === 0) {
    return (
      <div className="lista-vacia">
        <p>No hay tareas pendientes. ¡Agrega una nueva tarea!</p>
      </div>
    )
  }

  return (
    <div className="lista-tareas">
      <h3>Mis Tareas ({tareas.length})</h3>
      {tareas.map((tarea) => (
        <ItemTarea
          key={tarea.id}
          tarea={tarea}
          alternarCompletada={alternarCompletada}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </div>
  )
}

export default ListaTareas
