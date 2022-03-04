import ArrayJSON from "./ArrayJSON";
import WorkDisplay from "./WorkDisplay";
import {useState} from 'react';

export default () => {
    const [data, setData] = useState(ArrayJSON),
    handleChange = i => {
          setData(data.map(it=> {
            if(it.id == i){
              it.selected = !it.selected;
            }
            return it;
          }));
        }
    return (data.map(json1 => <WorkDisplay key={json1.id} tasker ={json1} select ={handleChange}/>));
  }

