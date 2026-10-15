import { useState } from "react"
import"./Like.css"

function LikeBotton(){
    const [count,setCount]=useState(0)
    const like=()=>{
        setCount(like => like + 1)
    }
    const reset=()=>{
        setCount(0)
    }
    // #############################
    const [user,setuser]=useState({
        Name:"",
        Email:"",
        Password:""
    })
    function dataChange(ev){
        if (ev.target.name=="name") {
            setuser({...user,Name:ev.target.value})  
        }
        if (ev.target.name=="email") {
            setuser({...user,Email:ev.target.value})
        }
        if (ev.target.name=="password") {
            setuser({...user,Password:ev.target.value})
        }
    }
    const [sub,setsub]=useState()
    const handsub=(e)=>{
        e.preventDefault()
        setsub(user)
    }
    return(
    <>
    <div className="parent">
        <div className="like">
            <button id="but1" onClick={like}>Like</button>
            <p>Number of likes: {count}</p>
        </div>
        <button id="but2" onClick={reset}>Reset</button>
        <hr />
    {/* </div>
    <div> */}
        <form id="from" action="" onSubmit={handsub}>
            <label id="leb" htmlFor="">Name:</label>
            <input type="text" name="name" value={user.Name} onChange={(ev)=>{dataChange(ev)}} required/>
            <br /><br />
            <label id="leb" htmlFor="">Email:</label>
            <input type="email" name="email" value={user.Email} onChange={(ev)=>{dataChange(ev)}} required/>
            <br /><br />
            <label id="leb" htmlFor="">Password:</label>
            <input type="password" name="password" value={user.Password} onChange={(ev)=>{dataChange(ev)}} required minLength={3} maxLength={8}/>
            <br /><br />
            <button id="sub" type="submit">submit</button>
        </form>
        {sub &&(
            <div>
                <h2>Input Data</h2>
                <p className="p2">Name:{sub.Name}</p>
                <p className="p2">Email:{sub.Email}</p>
                <p className="p2">Password:{sub.Password}</p>
            </div>
        )}
    </div>
    </>
    )
}
export default LikeBotton