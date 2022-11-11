import React, {  useState } from "react"
import MockData from "./Mockdata.json"
import './poster.css'
const Poster = () => {
    const [value,setValue]=useState("")
   
    return (
        <>
            <header>
                <h1>MOVIES</h1>
                <input placeholder="Search" type="text" value={value} onChange={e=>setValue(e.target.value)} />
            </header>
            <section>
            {MockData.filter((res)=>{
                if(value===""){
                    return res
                }else if(res.Title.toLowerCase().includes(value.toLowerCase())){
                    return res
                }
            }).map(data => {
                return (
                    <>
                    <img className="posters" src={data.Poster} alt="Poster"></img>
                    </>
                )
            })
            }
            </section>
        </>
    )

}
export default Poster