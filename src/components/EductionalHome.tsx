import React from 'react'
import { View,Text, Image } from 'react-native'

const EductionalHome = () => {
  return (
    <View className='flex-row justify-between px-2 items-center'>
<View>
<Text>Hello</Text>
<Text className='text-2xl font-bold '>Abdullah Al Kawser</Text>
</View>
      <View>
        <Image className='w-16 h-16' source={require('./../assets/pro.png')}/>
      </View>
      
    </View>
  )
}

export default EductionalHome
