import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://st.depositphotos.com/1029099/1698/i/950/depositphotos_16980323-stock-photo-a-row-of-industrial-washing.jpg",
    "https://st5.depositphotos.com/10614052/67828/i/600/depositphotos_678285656-stock-photo-wicker-basket-dirty-clothes-laundry.jpg",
    "https://st5.depositphotos.com/33457736/67084/i/600/depositphotos_670846106-stock-photo-laundry-basket-clean-clothes-towels.jpg"
     ];

  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
