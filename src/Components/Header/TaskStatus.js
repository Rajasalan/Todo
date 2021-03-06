import React from 'react';


export default function TaskStatus(props) {

    
    let totalTasks=props.TodoItem.length;
    let completeTask=0;
    props.TodoItem.map((Item)=>{
        if(Item.completed==true)
        completeTask++;
    })

    let perCompleted=Math.floor((completeTask/totalTasks)*100);
    

    let tdWidth1=perCompleted+"%"
    let tdWidth2=tdWidth1+" Completed"
    

    return (
  
      <React.Fragment>
     
      <table width='100%' style={{paddingLeft:'0px'}}>
          <tr>
              <td style={{width:tdWidth1,backgroundColor:'#f77062'}}>&nbsp;</td>
    <td style={{color: 'lightgrey', height: '40px', fontSize:'18px', textAlign:'Center'}}>{tdWidth2}</td>
          </tr>
      </table>
       
      
           
    </React.Fragment>
      
    );
  }