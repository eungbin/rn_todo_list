import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface IImage {
  image: React.JSX.Element;
  onPressOut?: any;
  index?: number;
}

export default function IconButton({ image, onPressOut, index }: IImage) {
  const _onPressOut = () => { onPressOut(index); }

  return (
    <TouchableOpacity style={styles.iconbutton} onPressOut={_onPressOut}>
      {image}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconbutton: {
    // margin: 10,
  }
})