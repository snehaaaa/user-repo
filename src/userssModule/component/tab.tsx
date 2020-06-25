
import * as React from "react";
import {RepositoriesName} from "../const"

const Tab: React.SFC = () => (
    <>
    <div className="tabClass">
    {RepositoriesName.map((el)=>{
        return(<li className={`tabs ${el.active ? "active" : "not_active"}_tab`}>{el.name}</li>)
    })}
      </div> 
    </>

);
export default Tab;