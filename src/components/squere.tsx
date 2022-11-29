import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class SquereComponent extends Component {

    public row: number;
    public col: number;
    public entity: string;

    constructor(props) {
        super(props);
        this.state = {
            row : props.row,
            col : props.col,
            entity : null,
        }
        // бинды
        this.selectSquere = this.selectSquere.bind(this)
    }
    
    selectSquere() {
        console.log(`row: ${this.row} , col: ${this.col}, entity: ${this.state.entity}`)
        this.state.entity ? this.setState({ entity: null }) : this.setState({ entity: '+'})
    }

    render(){
        return  (
            <View >
                <TouchableHighlight onPress={this.selectSquere} >
                    <View style={{ backgroundColor: "pink",  borderWidth: 1, height: 50, width: 50}}>
                        <Text>{this.state.entity}</Text>
                    </View>
                </TouchableHighlight>
            </View>
            )
    }
}

export default SquereComponent; 