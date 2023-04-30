import { ChangeEvent, MouseEvent, useState } from 'react'
import "./App.scss"
let App = () => {
  const [arrDato, setArrDato] = useState([""])
  const [data, setData] = useState("")
  const [update, setUpdate] = useState(false)

  let agregarArr = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (update === true) {
      let element = e.target as HTMLElement
      let dataId = element.dataset.id

      let bttns = document.querySelectorAll(`[data-id='${dataId}']`)
      let p = bttns[1].parentNode?.children[2] as HTMLElement
      p.textContent = data
    } else {
      if (data.length >= 1) {
        setArrDato(dt => [...dt, data])
      }
      setData("")
    }
  }
  let changeData = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }
  let deletedList = (e: MouseEvent<HTMLButtonElement>) => {
    let bttn = e.target as HTMLElement
    let parentNode = bttn?.parentNode
    parentNode?.parentNode?.removeChild(parentNode);
  }
  let actualizarData = (e: MouseEvent<HTMLButtonElement>) => {
    setUpdate(true)
    let element = e.target as HTMLElement
    let dadElement = element.parentNode
    let textUpdate = dadElement?.children[2].textContent
    let dataIdBttn = element.dataset.id
    const enviarBttn = document.getElementById("form-enviar")
    if (enviarBttn) {
      enviarBttn.dataset.id = `${dataIdBttn}`;
    }
    setData(`${textUpdate}`)
  }
  let cancelUpdate = () => {
    setUpdate(false)
    setData("")
  }
  return (
    <div className='container m-auto
    shadow-black shadow-lg
     bg-gray-400 h-screen p-4' >
      <h1 className='text-4xl'>Crud</h1>
      <hr />
      <form id="form-enviar" className='mt-4' onSubmit={agregarArr}>
        <h2 className='text-2xl p-1'>Agregar</h2>
        <input
          className='shadow-sm 
          outline-none p-1 rounded'
          type="text"
          value={data}
          onChange={changeData}
          placeholder='dato' />
        <input
          className='p-1 bg-slate-500 
          shadow ml-1
          rounded mt-1'
          type="submit" name="" />
        {
          (update === true) ? <button
            className='p-1 shadow-md
          bg-zinc-500 m-1 rounded'
            onClick={cancelUpdate}>Cancelar</button> : ""
        }
      </form>
      <div>
        <ul>
          {
            arrDato.map((el, i) => ((i >= 1) ? <li
              className='flex gap-1 items-center' key={i}>
              <button
                className='p-1 shadow-md
                max-h-8
                bg-gray-500 m-1 rounded'
                onClick={deletedList}>Eliminar</button>
              <button
                className='p-1 shadow-md
                max-h-8
                bg-zinc-500 m-1 rounded'
                data-id={"data-" + i}
                onClick={actualizarData}>Actualizar</button>
              <p className='p-1
              w-full
              shadow
              bg-slate-100
              m-1'>{el}</p>
            </li> : ""))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
