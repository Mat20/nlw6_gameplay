import React from 'react';
import { 
  View,
  Text, 
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';


import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonsIcon';
import { Background } from '../../components/Background';


import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export function SignIn() {
  //const navigation = useNavigation();
  const {loading, signIn} = useAuth();
  
 async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
     //navigation.navigate('Home');
  }

  return (
    <Background>
          <View style={styles.container}>
              <Image
                style={styles.image} 
                source={IllustrationImg}
                resizeMode="stretch"
              />
              <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'} e organize {'\n'} suas jogatinas.
                </Text>
                <Text style={styles.subtitle}>
                  Cire grupos para jogar seus games {'\n'} favoritos com seus amigos.
                </Text>
                
                {
                  loading ? <ActivityIndicator color={theme.colors.primary} /> :
                  <ButtonIcon
                    title="Entre no Discord"
                    onPress={handleSignIn}
                  />
                }
                
              </View>
          </View>
    </Background>
  );
}

export default SignIn;
