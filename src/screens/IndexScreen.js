import React,{useContext} from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';
import BlogContext from '../context/BlogContext'; // Import a constant from a component must not have {}

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);
  console.log(blogPosts);
  return (
    <View>
      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => blogPost.title}
        renderItem={( { item } ) => {
          return (<Text>{item.title}</Text>) ;
        }}
      />
    </View>
  );
}

const styles=StyleSheet.create({});



export default IndexScreen;