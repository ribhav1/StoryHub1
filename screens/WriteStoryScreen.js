import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class WriteStory extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <View style={styles.screenContainer}>

                <View style={styles.header}>
                    
                    <Text style={styles.headerText}>Story Hub</Text>

                </View>
            
                <View style={styles.mainContainer}>

                    <View style={styles.main}>

                        
                        <TextInput style={styles.storyTitleInputBox} placeholder={'Story Title'} />
                        
                         <TextInput style={styles.authorInputBox} placeholder={'Author'} />
                        
                        <TextInput style={styles.writeStoryInputBox} multiline={true} placeholder={'Write your story'} />
                       
                    </View>

                </View>

                <View style={styles.submitContainer}>

                    <TouchableOpacity style={styles.submitButton}>

                        <Text style={styles.submitButtonText}>Submit</Text>

                    </TouchableOpacity>

                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'lightgreen'
    },
    header: {
        flex: .1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cornflowerblue'
    },
    headerText: {
        fontSize: 32,
    },
    mainContainer: {
        flex: .8,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        width: '70%',
        height: '95%',
        backgroundColor: 'dodgerblue',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },  
    storyTitleInputBox: {
        flex: .1,
        backgroundColor: 'skyblue',
        width: '90%',
        borderRadius: 15,
        textAlign: 'center',
    },
    authorInputBox: {
        flex: .1,
        backgroundColor: 'skyblue',
        width: '90%',
        borderRadius: 15,
        textAlign: 'center',
    },
    writeStoryInputBox: {
        flex: .65,
        backgroundColor: 'skyblue',
        width: '90%',
        borderRadius: 15,
        textAlign: 'center',
    },
    submitContainer: {
        flex: .1,
        width: SCREEN_WIDTH,    
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        width: '30%',
        height: '80%',
        backgroundColor: 'cornflowerblue',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButtonText: {
        fontSize: 24,
    },
});

export default WriteStory;
