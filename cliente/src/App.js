import React, { useEffect, useState } from 'react'

function App(){

  const [data, setdata] = useState([]);
//se usa para obtener datos de una API y actualizar el estado del componente con el resultado
  useEffect(()=> {
    fetch('http://localhost:8081/books')
    .then(res=>res.json())
    .then(data => console.log(data))
    .catch (err => console.log(err));
  }, [])

//se usa para obtener datos de una API y actualizar el estado del componente con el resultado

  return(
    <div style={{padding:"50px"}}>
      <table>
        <thead>
          <th>Id</th>
          <th>Titulo</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Portada</th>
        </thead>
        <tbody>
          {data.map((d,i) => (
            
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.description}</td>
              <td>{d.price}</td>
              <td>{d.cover}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default App;