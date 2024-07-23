import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Services = () => {
    const services = [
        {
            id: 0,
            image: "https://cdn.icon-icons.com/icons2/3223/PNG/512/laundry_washing_machine_clothes_clean_wash_icon_196747.png",
            name: "Washing",
            
        },
        {
            id: 12,
            image: "https://cdn.icon-icons.com/icons2/2176/PNG/512/household_chores_task_laundry_dry_clothes_hang_icon_133342.png",
            name: "Laundry",
           
        },
        {
            id: 13,
            image: "https://cdn.icon-icons.com/icons2/4201/PNG/512/housework_clothing_laundry_ironing_board_iron_icon_262712.png",
            name: "wash & iron",
           
        },
        {
            id: 14,
            image: "https://cdn.icon-icons.com/icons2/3425/PNG/512/cleaning_smart_wash_clean_cleaner_washing_machine_laundry_loundry_icon_218684.png",
            name: "Cleaning",
           
        }
    ];
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize:16, fontWeight:"500", marginBottom:7}}>Services Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service,index) => (
                <Pressable style={{margin:10, backgroundColor:"white", padding:20, borderRadius:7}} key={index}>
                     <Image source={{ uri: service.image }} style={{ width: 70, height: 70 }} />   
                    <Text style={{textAlign:"center", marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}

        </ScrollView>
      
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})