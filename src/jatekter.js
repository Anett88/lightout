import React from "react";
import Lampa from "./lampa";


const segedlampaTomb=[{id:0,allapot:true},{id:1,allapot:true},{id:2,allapot:true},
    {id:3,allapot:true},{id:4,allapot:true},{id:5,allapot:true},{id:6,allapot:true},{id:7,allapot:true},{id:8,allapot:true},]

 

class JatekTer extends React.Component{
  
constructor(){
  super();
  
this.state={tomb:segedlampaTomb}

}
aktualisLampa=(id)=>{

  console.log("elem: "+id);

  // segedtomb[id].allapot=!segedtomb[id].allapot;

  // this.setState({

  //   tomb:segedtomb

  // })
  segedlampaTomb[id].allapot=!segedlampaTomb[id].allapot;
  
  let meret=3;

      if(id>meret-1){

        segedlampaTomb[id-meret].allapot=!segedlampaTomb[id-meret].allapot;

      }
        if(id<meret * meret -meret){

          segedlampaTomb[id+meret].allapot=!segedlampaTomb[id+meret].allapot;

  

      }

      if(id % meret !== 0){

        segedlampaTomb[id-1].allapot=!segedlampaTomb[id-1].allapot;



      }

      if(id % meret !== meret-1){

        segedlampaTomb[id+1].allapot=!segedlampaTomb[id+1].allapot;



      }
      this.setState({tomb:segedlampaTomb})


}


/*
aktualisLampa=(id)=>{
  console.log("Jatekter: "+id);
  segedlampaTomb[id].allapot=!segedlampaTomb[id].allapot;
  this.setState({tomb:segedlampaTomb})

}
*/
render() {
    return (
      <React.Fragment>
    
      <h1>Light OUT</h1>
      <div id="lampak" className="allapot">
        {this.state.tomb.map((elem, index) => {
         
          return (
              
            <Lampa
              key={index}
              id={elem.id}
              allapot={elem.allapot}
              aktualisLampa={this.aktualisLampa}
            
            />
          );
        })}
        </div>
      </React.Fragment>
    );
  }
}

export default JatekTer;

