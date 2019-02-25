import React, { Component } from 'react';
import Category from './Category.jsx';
import {Consumer} from '../Context'
class Categories extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <Consumer>
                {value =>{
                    const {datascategory} = value
                    return(
                        <div>
                            <Category
                                data = {datascategory}
                                
                            />
                        </div>
                    )}}
                    
            </Consumer>
            
        );
    }
}

 
export default Categories;