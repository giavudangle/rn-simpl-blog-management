import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const BlogPostForm = ({ onSubmit ,initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  
  
  return (
    <View>
      <Text style={styles.label}>Enter Title: </Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label} >Enter Content: </Text>
      <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)} />
      <Button
        title="SAVE POST"
        onPress={() =>  onSubmit(title, content)}
      />
    </View>
  );
}

BlogPostForm.defaultProps = {
  initialValues: {
    title:'',
    content:''
  }
};



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

export default BlogPostForm;