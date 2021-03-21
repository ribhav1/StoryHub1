import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WriteStoryScreen from '../screens/WriteStoryScreen';
import ReadStoryScreen from '../screens/ReadStoryScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="WriteStory" component={WriteStoryScreen} />
                <Tab.Screen name="ReadStory" component={ReadStoryScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
