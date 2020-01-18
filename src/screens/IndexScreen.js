import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext'; // Import a constant from a component must not have {}


import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity
                  onPress={() => deleteBlogPost(item.id)}
                >
                  <Ionicons name="md-trash" style={styles.addBlog} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () =>
      <TouchableOpacity onPress={() => navigation.navigate('Create')} >
        <AntDesign style={styles.newBlog} name="pluscircleo" />
      </TouchableOpacity>
  };
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginVertical: 10
  },
  title: {
    fontSize: 18
  },
  addBlog: {
    fontSize: 30,
    marginRight: 20
  },
  newBlog: {
    marginRight: 20,
    fontSize: 30
  }

});



export default IndexScreen;