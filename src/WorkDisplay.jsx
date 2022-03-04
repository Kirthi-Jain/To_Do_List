import {Fragment } from 'react';
export default ({ tasker,select }) => {
    const { id, task, selected} = tasker,
    completedStyle = {fontStyle : "italic", color : "#cdcdcd", textDecoration : "line-through"};
    return ( 
        <Fragment>
        <h1 style={selected ? completedStyle : null}>{task}</h1>
        <input type="checkbox" checked = {selected} onChange = {()=> select(id)} />
        <hr/>
        </Fragment>
     );
}
 
 
