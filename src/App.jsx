import { useState } from 'react'
import FormularioTarea from './components/FormularioTarea'
import ListaTareas from './components/ListaTareas'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([])

  // Función para agregar una nueva tarea
  const agregarTarea = (textoTarea) => {
    const nuevaTarea = {
      id: Date.now(), // ID simple usando timestamp
      texto: textoTarea,
      completada: false
    }
    setTareas([...tareas, nuevaTarea])
  }

  // Función para alternar el estado completada de una tarea
  const alternarCompletada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ))
  }

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  // Contadores para mostrar estadísticas
  const tareasCompletadas = tareas.filter(tarea => tarea.completada).length
  const tareasPendientes = tareas.length - tareasCompletadas

  return (
    <div className="app">
      <header className="app-header">
        <h1>📝 Gestor de Tareas</h1>
        <p>Organiza tus actividades de manera sencilla</p>
      </header>

      <main className="app-main">
        <FormularioTarea agregarTarea={agregarTarea} />
        
        <div className="estadisticas">
          <div className="stat">
            <span className="numero">{tareas.length}</span>
            <span className="etiqueta">Total</span>
          </div>
          <div className="stat">
            <span className="numero">{tareasPendientes}</span>
            <span className="etiqueta">Pendientes</span>
          </div>
          <div className="stat">
            <span className="numero">{tareasCompletadas}</span>
            <span className="etiqueta">Completadas</span>
          </div>
        </div>

        <ListaTareas
          tareas={tareas}
          alternarCompletada={alternarCompletada}
          eliminarTarea={eliminarTarea}
        />
      </main>

      <footer className="app-footer">
        <p>Gerardo perez</p>
      </footer>
    </div>
  )
}

export default App
