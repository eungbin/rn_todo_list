import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Image = {
  image: React.JSX.Element
}

export default function IconButton({ image }: Image) {
  return (
    <TouchableOpacity style={styles.iconbutton}>
      {image}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconbutton: {
    // margin: 10,
  }
})