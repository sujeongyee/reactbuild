import React, { useState } from 'react'




function Search() {

    const [data,setData]=useState('')
    const changeValue=()=>{



    }


    return (
        <>
            <label style={{ display: 'flex;' }}>
                <span style={{ transform: 'translateY(5px)', paddingRight: '10px', width: '40px' }}>Search:</span>
                <input type="search" onChange={changeValue} className="form-control form-control-sm" placeholder aria-controls="zero_config" style={{ width: '200px' }} />
                <input type="button" value={'검색하기'} className="inqurylist-search" />
            </label>
        </>
    )
}

export default Search