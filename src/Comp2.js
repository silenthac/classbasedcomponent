import React from 'react';

class Comp2 extends React.Component{

    constructor(props)
    {
        console.log("comp2 constructor");
        super(props);

        this.state ={
            name:"Dummmy Name",
            location : "Dummy Location",
            avatar_url : "Dummy Img"
            
        }
        

    }

   async componentDidMount()
    {
        console.log("comp2 componentdidMount");
        //API CALL
        let data  = await fetch('https://api.github.com/users/silenthac')
       const realdata =  await data.json();
        
        console.log(realdata.name);

        this.setState({
            name : realdata.name,
            location : realdata.location,
            avatar_url: realdata.avatar_url
        })
    

    }

    render()
        {
            console.log("comp2 render method");
            return(
                <div>
                    <h1>Name:{this.state.name}</h1>
                    <h1>Location : {this.state.location}</h1>
                    <img src={this.state.avatar_url} alt='myimg'/>
                    
                    

                </div>
            )
        }
    
}

export default Comp2;