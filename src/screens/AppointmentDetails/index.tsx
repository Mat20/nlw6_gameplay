import React from 'react';
import { Fontisto  } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Header } from '../../components/Header';
import { Members } from '../../components/Members';
import { ButtonIcon } from '../../components/ButtonsIcon';

import Banner from '../../assets/banner.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Rodrigo',
      avatar_url: 'https://github.com/mat20.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Lazaro',
      avatar_url: 'https://github.com/lazarobodevan.png',
      status: 'offline',
    }
  ]

  return (
  <Background>
     <Header
        title="Detalhes"
        action={
          <BorderlessButton>
             <Fontisto 
                name="share"
                size={24}
                color={theme.colors.primary}
             />

          </BorderlessButton>
        }
     />
     <ImageBackground 
       source={Banner}
       style={styles.banner}
     >
      <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challeger sem perder uma partida de md10.
          </Text>
       </View>
     </ImageBackground>

     <ListHeader 
       title="Jogadores"
       subtitle="Total 3"
     />

     <FlatList 
       data={members}
       keyExtractor={item => item.id}
       renderItem={({ item }) => (
         <Members data={item} />
       )}
       ItemSeparatorComponent={() => <ListDivider />}
       style={styles.members}
    />
    
    <View style={styles.footer}>
       <ButtonIcon title="Entrar na partida" />
    </View>
    
  </Background>
  
  );
}

export default AppointmentDetails;
