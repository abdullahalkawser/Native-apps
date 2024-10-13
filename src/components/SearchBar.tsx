import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput, View } from 'react-native';

const SearchBar = () => {
  return (
    <View>
      {/* Search Bar */}
      <View className="flex-row items-center mt-5 bg-white">
        {/* Search Icon */}
        <Icon name="search" size={20} color="#888" style={{ position: 'absolute', left: 10, zIndex: 1 }} />

        {/* Search Input */}
        <TextInput
          placeholder="Search..."
          className="rounded-xl pl-10 p-5 w-full"
          style={{
            backgroundColor: 'white', // White background
            paddingLeft: 40, // Make space for the search icon
            paddingVertical: 15, // Vertical padding for better height
            borderRadius: 10, // Rounded corners
            shadowColor: '#000', // Shadow color
            shadowOffset: { width: 0, height: 2 }, // Shadow depth
            shadowOpacity: 0.2, // Shadow opacity
            shadowRadius: 4, // Shadow blur
            elevation: 5, // Shadow for Android
            width: '100%', // Full width
          }}
        />
      </View>
    </View>
  );
}

export default SearchBar;
