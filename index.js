import { Navigation } from "react-native-navigation";
import { withNavigationProvider } from "react-native-navigation-hooks"
import react, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';

Navigation.setDefaultOptions
    ({
        topBar: {
            background: {
                color: 'yellow',
            }
        },
        statusBar: {
            visible: false
        },
    })

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'aqua',
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderWidth: 10,
        borderStyle: 'solid',
        borderColor: 'red',
    },
    heading1:
    {
        fontSize: 30,
    }
});

function App(props) {

    useEffect(() => {

        setTimeout(() => {

            const titleText = Date.now() + "";

            Navigation.mergeOptions(props.componentId, { topBar: { title: { text: titleText } } });
        }, 2000);

    }, []);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.heading1}>mergeOptions test</Text>
            <Text>Os: {Platform.OS}</Text>
            <Text>Version: {Platform.Version}</Text>
            <View style={styles.bottom}>
                <Text>This text should be visible at the bottom of the screen</Text>
            </View>
        </View>
    )
}

Navigation.registerComponent('com.myApp.WelcomeScreen', () => withNavigationProvider(App), () => App);
Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'com.myApp.WelcomeScreen'
                        }
                    }
                ]
            }
        }
    });
});