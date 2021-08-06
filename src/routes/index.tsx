import React from "react";

import { SignIn } from "../screens/SignIn";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";


export function Route(){
  const { user } = useAuth();

  return(
     <NavigationContainer>
        { user.id ? <AppRoutes /> : <SignIn />}
     </NavigationContainer>
    
  );
}