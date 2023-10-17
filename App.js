import react, { useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';

import {Navigation} from 'react-native-navigation';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    info:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        borderWidth: 3,
        borderStyle:'solid',
        borderColor:'red',
    }
});

function App(props) {
    
    useEffect(() => {

        const opts = {
            topBar: {
                title: {
                    text: 'Oi'
                }
            }
        }
        
        setTimeout(() => {
            Navigation.mergeOptions(props.componentId, opts);
        }, 2000);

    }, [])
    
    

    return (
        <View style={styles.wrapper}>
            <View style={styles.info}>
                <Text>There should be a red border visible under this text</Text>
            </View>
        </View>
    )
}

export default App;
