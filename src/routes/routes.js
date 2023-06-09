import React, { useContext} from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";
import AuthContext from "../contexts/auth";
import AppRoutes from "./app.routes";

const Routes = () => {
    
    const { logado, loading} = useContext(AuthContext);
    

    if (loading) {
        return(
            <View style={{flex:1, justifyContent: 'center', alignContent:'center' }}>
                <ActivityIndicator size="large" color="#a1a1a1"/>
            </View>
        );
    } else {
        return (logado) ?  <AppRoutes></AppRoutes> : <AuthRoutes></AuthRoutes>
    }


    
}

export default Routes;
