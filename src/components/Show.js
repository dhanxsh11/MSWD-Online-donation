import axios from 'axios';
import { useState } from 'react';
function Show(){
const [res,setRes]=useState(null);

if (res==null){
axios.get('http://localhost:8081/showall',{

}).then((response)=>{
    console.log(response.data);
    setRes(response.data);
})
}
 return(
    <div>
        {JSON.stringify(res)}
    </div>
 );
}
export default Show;