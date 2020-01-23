import React from 'react';

const Form = ({getGif, GifSearchStr, updateSeacrhStrValue}) => {
    return <form onSubmit={(e)=>{
                e.preventDefault()
                getGif()    }}>
        <input type="text" value={GifSearchStr} onChange={(e)=>{updateSeacrhStrValue(e.target.value)}} />
        <button type="submit">Search</button>
        </form>
}

export default Form;