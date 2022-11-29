import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import RowComponent from './components/row';


class FieldComponent extends Component {
    public name;
    constructor(props) {
        super(props);
        this.name = props.name;
        this.state = {
            entityCount : 0,
        }
        // бинды функций
        //this.selectField = this.selectField.bind(this);  
    }


    selectField() {
        console.log(`field : ${this.name}`)
    }

    render(){
        return (
            <View style={{flex: 1, height: 10}}>
                        {
                            new Array(8).fill(0).map((_,i)=> (           
                                <RowComponent key={i} row={i} />
                            ))
                        }
                <Text>Тут что-то будет</Text>
            </View>
        );
    }
}



export default FieldComponent;