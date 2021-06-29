import React from 'react';
import { 
  View,
  Text, 
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonIcon } from '../../components/ButtonsIcon';
import IllustrationImg from '../../assets/illustration.png'
import { Background } from '../../components/Background';

import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();
  
  function handleSignIn() {
    navigation.navigate('Home');
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
                 
                
                <ButtonIcon
                    title="Entre no Discord"
                    onPress={handleSignIn}
                />
                
              </View>
          </View>
    </Background>
  );
}

export default SignIn;
