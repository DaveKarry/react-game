import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import SquereComponent from './squere';



class RowComponent extends Component {
    public row: number;

    constructor(props) {
        super(props);

        this.row = props.row;
    }
    
    selectRow() {
        console.log(`Row : ${this}`)
    }
    render(){
        return (
            <View style={{flex: 1, flexDirection: "row"}}>      
                    {
                        new Array(8).fill(0).map((_, i)=>(
                            <SquereComponent row={this.row} col={i}/>
                        )) 
                    } 
            </View>
        )
    }
}

export default RowComponent;