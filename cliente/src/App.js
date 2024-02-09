import React, { useEffect, useState } from 'react'

function App(){

 const [books, setBook] = useState([]);
//se usa para obtener datos de una API y actualizar el estado del componente con el resultado

  useEffect(()=> {
    fetch('http://localhost:3000/books')
    .then(res=>res.json())
    //.then(data => console.log(data))
    //si quiero hacer mas de una accion en una misma promesa
    .then((data) => {
      console.log(data);
      setBook(data);
    });
    //.catch (err => console.log(err));
  }, [])


//se usa para obtener datos de una API y actualizar el estado del componente con el resultado
//Las keys dentro de las listas ayudan a React a identificar que ítems han cambiado, son agregados, o son eliminados. Las keys deben ser dadas a los elementos dentro del array para darle a los elementos una identidad estable:
  return(
    <div style={{padding:"50px"}}>
      <table>
        <thead>
          <th>Id</th>
          <th>Titulo</th>
          <th>Descripcion</th>
          <th>Precio</th>
        </thead>
        <tbody>
          {books.map((d,i) => (       
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.description}</td>
              <td>{d.price}</td>
            </tr>
          ))}

        </tbody>
      </table>
      
    </div>
    
  )
}

export default App;