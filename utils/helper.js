

 export function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restraunt)=>
         restraunt.info.info.name.toLowerCase().includes(searchText.toLowerCase())
      
     )
     return filterData;
    
  }