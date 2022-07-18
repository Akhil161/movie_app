import React from "react";

class Categeory extends React.Component{

      state = {
        allenre : ["Action"],
      }
     componentDidMount(){
      fetch("/genre").then(function(res){
        return res.json();
      }).then((json) => {
        this.setState({allenre:json})
      })
     }
      render(){
        return(
            <ul class="list-group">
             <li class="list-group-item" key="allgenre" onClick={() => {
                              this.props.gered("AllGenre");
              }
             }>ALL Genres</li>

           {
            this.state.allenre.map((el) => {
                return  <li class="list-group-item" key={el._id} onClick={() => {
                  this.props.gered(el.name);
  }
 }>{el.name}</li>
            })
           }
          </ul>
        )
      }
}

export default Categeory;