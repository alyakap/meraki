import React from 'react';

const Form = ({getMovie, movieSearchStr, updateFormValue}) => {
    return <form onSubmit={(e)=>{
        e.preventDefault()
        getMovie()
    }}>
        <input type="text" value={movieSearchStr} onChange={(e)=>{updateFormValue(e.target.value)}} />
        <button type="submit">Search</button>
        </form>
}

export default Form;