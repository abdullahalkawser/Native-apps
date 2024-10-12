import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, View } from 'react-native';

const SearchBar = () => {
  return (
    <View>
      {/* Search Bar */}
      <View className="flex-row items-center mt-5 mx-4">
        <Icon name="search" size={20} color="#888" className="absolute ml-3" />
        <TextInput
          placeholder="Search..."
          className="border border-gray-300 rounded-full pl-10 pr-4 py-2 w-full bg-white shadow-md" // Tailwind classes
          style={{
            shadowColor: '#ffffff', // Custom shadow color
            shadowOffset: { width: 0, height: 2 }, // Custom shadow offset
            shadowOpacity: 0.3, // Custom shadow opacity
            shadowRadius: 4, // Custom shadow blur
            elevation: 5, // Shadow for Android
          }}
        />
      </View>
    </View>
  );
}

export default SearchBar;
