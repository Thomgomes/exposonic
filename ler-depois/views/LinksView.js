import React, { useState, useEffect } from "react";
import { Text } from "react-native";

export function LinksView() {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Log out",
            headerLeft: () => <Logout closeRealm={closeRealm} />
        });
      }, [navigation]); 

    return (
        <Text>Links go here</Text>
    );
}