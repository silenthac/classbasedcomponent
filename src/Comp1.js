import React from 'react'
import Comp2 from './Comp2'

class Comp1 extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("comp1 constructor");

        
        


    }

    componentDidMount()
        {
            console.log("Comp1 ComponentdidMount");

        }
    

    render()
    {
        console.log("comp1 render method");
        return(
            <div>Hii My name is Prashant Pundir
             <Comp2/> 

            </div>
            
        )
    }
}

export default  Comp1;