import React from 'react';
import { Image } from 'react-native';
import Discord from '../../assets/discord2.png';

import { styles } from './styles';

export function GuildIcon() {
  
  return (
    <Image
      style={styles.image}
      source={ Discord }
      resizeMode="cover"
    />
  );
}