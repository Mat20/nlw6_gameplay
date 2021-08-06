import React, { useState } from 'react';
import { RectButton, RectButtonProps  } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { GuildProps } from '../Guild';
import { categories } from '../../utils/categories';
import Player from '../../assets/player.svg'
import Calendar from '../../assets/calendar.svg';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

 type Props = RectButtonProps & {
   data: AppointmentProps;
 }

export function Appointments({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;


  return (
  <RectButton {...rest}>
    <View style={styles.container}>
      <LinearGradient
        style={styles.guildIconContainer}
        colors={[secondary50, secondary70]}
      >

      <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            { data.guild.name }
          </Text>
          <Text style={styles.category}>
            { category.title }
          </Text>
        </View>

        <View style={styles.footer}>
          <View style={styles.dateInfo}>  
            <Calendar />

            <Text style={styles.date}>
               { data.date }
            </Text>
          </View>
        
          <View style={styles.playerInfor}>
            <Player fill={ owner ? primary : on } />

            <Text style={[ styles.players, { color: owner ? primary : on}]}>
              { owner ? 'Anfitrião' : 'Visitante' }
            </Text>

          </View>
        </View> 
      </View>
    </View>
  </RectButton>
  );
}
