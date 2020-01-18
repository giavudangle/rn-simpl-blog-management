import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text style={styles.label}> Edit Title:</Text>
      <TextInput 
      style={styles.input}
      value={title} 
      onChangeText={(text)=>setTitle(text)}
      />
      <Text style={styles.label} > Edit Content:</Text>
      <TextInput 
      style={styles.input}
      value={content} 
      onChangeText={(text)=>setContent(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    marginBottom: 10
  }
});


export default EditScreen;