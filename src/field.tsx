import React from 'react';
import { View, Text } from 'react-native';


interface RowProps {
    row: number;
}

interface SquereProps extends RowProps{
    col: number;
}

const Squere = ({row, col}: SquereProps) => {
    return (
    <View style={{flex: 1, backgroundColor: "pink",  borderWidth: 1, height: 50, width: 50}}>
        <Text>{row}</Text>
        <Text>{col}</Text>
    </View>);
};

const Row = ({row}: RowProps) => {
    return (
        <View style={{flex: 1, flexDirection: "row"}}>
            {
                new Array(8).fill(0).map((_, i)=>(
                    <Squere row={row} col={i} />
                )) 
            }
        </View>
    )
}


const GetField = () => {
    return (
        <View style={{flex: 1, height: 10}}>
            {
                new Array(8).fill(0).map((_,i)=> (
                    <Row key={i} row={i} />
                ))
            }
        </View>
    );
  };


  export default GetField;