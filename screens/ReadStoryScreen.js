import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ReadStory extends Component {
    render() {
        return (
            <View style={styles.screenContainer}>
                <Text>Read Story</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ReadStory;
