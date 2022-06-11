import Pokelist from "./pokelist"

function Filter() {
  let resulta

  return ( <> 
        <button onClick={filtrar}> Filtrar </button>
        <pre>{JSON.stringify(filtrar())}</pre>
        <p style={{alignContent:"center"}}>teste</p>
        
        
         </> );


};

let filterByType = ['fire'];

function filtrar() {
  if(filterByType.length > 0) {

    const filterByTypeSet =  new Set(filterByType)
    const result = Pokelist.filter((element) => element.types.some((type) => filterByTypeSet.has(type)))
    return result
  } else {
    const result = Pokelist
    return result
  }
}







export default Filter;