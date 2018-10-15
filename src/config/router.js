import React from "react";
import { Platform, StatusBar, AsyncStorage } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator,
  TabBarBottom
} from "react-navigation";

import Home from "../comp/pages/Home/Home";

export const HomeRoute = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      Home: {
        screen: HomeRoute
      }
    },
    {
      initialRouteName: signedIn ? "Home" : "Home"
    }
  );
};
