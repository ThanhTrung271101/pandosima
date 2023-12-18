import { StyleSheet, Text, View, Dimensions, useWindowDimensions } from 'react-native';
import { useState, useEffect } from 'react';

const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height



export default function App() {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window")
  // })

  // useEffect(() => {
  //   const subcription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window })
  //   })
  //   return () => subcription?.remove
  // })
  // const { window } = dimensions
  // const windowWidth = window.width
  // const windowHeight = window.height

  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  return (
    <View style={[styles.container]}>
      <View style={[styles.box, {
        width: windowWidth > 500 ? "70%" : "80%",
        height: windowHeight > 600 ? "60%" : "80%",
      }]}>

        <Text style={{ fontSize: windowWidth > 500 ? 50 : 24,
           color: windowWidth > 500 ? "green" : "red",
           fontWeight: windowWidth > 500 ? "bold" : "normal"}}>Hello World!!</Text>
      </View>
    </View>
  );
}

// console.log(windowHeight, windowWidth)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  // text: {
  //   fontSize: windowWidth > 500 ? 50 : 24,
  //   fontWeight: windowWidth > 500 ? "bold" : "normal"
  // }
});
