
import React from "react";
import "./lampa.css";


class Lampa extends React.Component{

    kattintasKezelo=()=>{
        this.props.aktualisLampa(this.props.id);
   
        }
    render() {
        return (
         
          <div className={this.props.allapot?"elem szinOn":"elem szinOff"} onClick={this.kattintasKezelo}>
            <div>{this.props.allapot}</div>
          </div>
        );
      }

   


    }
    



    export default Lampa;





    
