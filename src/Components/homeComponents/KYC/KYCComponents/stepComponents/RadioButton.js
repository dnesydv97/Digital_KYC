import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = ({ onPress, selected, children }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const RadioButton = () => {
  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Male", selected: false },
    { id: 2, value: false, name: "Female", selected: false },
    { id: 3, value: false, name: "Other", selected: false }
  ]);
  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };
  return (
    <View style={styles.container}>
      {isLiked.map((item) => (
        <Button
          onPress={() => onRadioBtnClick(item)}
          selected={item.selected}
          key={item.id}
        >
          {item.name}
        </Button>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    maxWidth: 500,
    flexDirection: 'row',
    
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: '20%',
    marginRight: 30
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#98CFB6"
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 10
  },
  text: {
    lineHeight: 30,
    fontSize: 20,
    marginVertical: 5
  }
});

export default RadioButton;
