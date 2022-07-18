import React from 'react'
import Categeory from './Categeory'
import Search from './Search'
import Table from './Table'



  

 class App extends React.Component {
    state = {
      nofMovies:0,
      searchStr:"",
      currGenre:"AllGenre"
    }
    
    receiveMovieData = (number) => {
         this.setState({nofMovies:number});
    }
    receiveSearchData = (val) => {
      this.setState({searchStr:val});
    }
    receiveCurrGenre = (genre) => {
          this.setState({currGenre:genre});
    }
  render(){
  return (
    <>

      <div className="row">
        <div className="col-2 p-4">
          <Categeory  gered={this.receiveCurrGenre}/>
        </div>
        <div className="col-10 p-4">
          <div className="row">
            <div className="col-3">
              <Search nofMovies={this.state.nofMovies} sdata={this.receiveSearchData}/>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <Table sendData={this.receiveMovieData} sdata1={this.state.searchStr} currGenre={this.state.currGenre}/>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
  }
}
export default App;