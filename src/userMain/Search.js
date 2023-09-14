import { valHooks } from "jquery";
import { useCallback, useState } from "react"

function Search({setSearchValue }){
  
  const [input , setInput] = useState("");


  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    input(setSearchValue)

    };

  


  return(

    <>
       <label style={{ display: 'flex;' }}>
          <span style={{ transform: 'translateY(5px)', paddingRight: '10px', width: '40px' }}>Search:</span>
           <input type="search" value={input} className="form-control form-control-sm"
            placeholder aria-controls="zero_config" style={{ width: '200px' }} onChange={handleChange}/>
            <input type="button" value={'검색하기'} className="inqurylist-search" onClick={handleClick}/>
        </label>

    </>
  )
}

export default Search