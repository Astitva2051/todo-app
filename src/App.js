import React,{useState} from "react";
import Plan from "./components/plan";

function App() {

 const [text, settext] = useState("");
 const [items, setitems] = useState([]);  

 let handleChange = (e)=>{
   settext(e.target.value);
 }

 let handleAdd = (e) => {
    if(text !== ""){
      const item = [...items,text];
      setitems(item);
      settext("");
    }
 }

 let handleDel = (id) => {
    const oldplans=[...items];
    const newplans = oldplans.filter((value,i)=>{
       return i !==id
   })
   setitems(newplans);
 }
 
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h3 className="text-center">Today's Plan</h3>
          <div className="row">
            <div className="col-9">
              <input type="text" className="form-control" placeholder="write your Plan " value={text} onChange={handleChange} />
            </div>
            <div className="col-2">
              <button className="btn btn-success" onClick={handleAdd}>ADD</button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                  {
                     items.map((value,i)=>{
                       return <Plan key= {i} value={value} id = {i} sendData={handleDel}/>
                     })
                  }
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
