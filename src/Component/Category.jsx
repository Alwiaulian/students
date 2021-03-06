import React, { Component } from 'react';
import { Menu, Dropdown, Icon,Card, } from 'antd';
import {Consumer} from '../Context'
class Category extends Component {
    constructor(props) {
        super(props); 
    }

    menu = () => {
    const SubMenu = Menu.SubMenu;
    const dummy  =  this.props.data;
        return (
            <Menu>
                {dummy.map(data => 
                    <SubMenu title={data.name}>
                        {data.categorySub.map(data2 =>
                            <SubMenu title={data2.name}>
                                {data2.categorySubChild.map(data3 =>
                                    <Menu.Item>{data3.name}</Menu.Item>
                                )}
                            </SubMenu>
                        )}
                    </SubMenu>
                )}
                
                    
            </Menu>            
        )
    }

    render() {
        return (  
            <Consumer>
                {value =>{
                    return(
                        <Card title ="data fashion" style={{ width: '120%', position:'center'}}>
                        <Dropdown overlay={this.menu}>
                            <a className="ant-dropdown-link"  href="#" >
                              Category Menu <Icon type="down" />
                            </a>
                        </Dropdown>
                        </Card>
                    )
                }}
            </Consumer>
            
        );
    }
}
 
export default Category;