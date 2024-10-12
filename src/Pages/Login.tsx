import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Button, Image, Text, View } from 'react-native'

const Login = ()=> {

    return (
      <View>
        <Image source={require('./../assets/image.png')}/ >
        <View className='bg-[#ece5ec] rounded-t-3xl pt-28 h-screen'>
          <Text className='text-5xl font-bold text-center'>Welcome to  <Text>Education App</Text></Text>
          <Text className='text-center text-2xl font-bold mt-10'>Login/ SignUp</Text>
          <View>
          <View className="mt-5 flex-row justify-center gap-4 bg-[#0C7DE4-#12B3C9] p-5 w-96 rounded-2xl ml-4 mr-4">
          <Text>  <Icon name="google" size={30} color="#FFFFFF"  /> {/* Google icon */}</Text>
          <Text className='text-2xl color-slate-100'>
          Sign In with Google
          </Text>
       
        </View>
          </View>
        </View>
      </View>
    )

}

export default Login
