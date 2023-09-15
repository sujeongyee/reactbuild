import axios from "axios";
import { valHooks } from "jquery";
import { useCallback, useState } from "react"

function Search({setSearchValue,style,categori,select,setTotal}){
  
  const [input , setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value1=e.target.value
    setInput(value1)
   
  }

  const handleClick =async () => {
   
    if(input!=''){
    const response = await axios.get(`/api/main/SearchInfo?table=${categori}&value=${input}&columm=${select}`)
    const newArray=response.data.map((obj)=>{
        const newObj={};
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key.toLowerCase()]=obj[key];
            }
        }
        return newObj
    })
    setSearchValue(newArray)
    
   
    setTotal(response.data[response.data.length-1].count)
    
    }else{
      window.location.reload()
        return
    }
    };

  


  return(

    <>
       <label style={{ display: 'flex;' }}>
          <span style={{ transform: 'translateY(5px)', paddingRight: '10px', width: '40px' }}>Search:</span>
           <input type="search" value={input} className="form-control form-control-sm"
            placeholder aria-controls="zero_config" style={{ width: '200px' }} onChange={handleChange}/>
            <input type="button" value={'검색하기'}style={{ background: 'white' ,color:style.color}} className="inqurylist-search" onClick={handleClick}/>
           
        </label>

    </>
  )
}

export default Search