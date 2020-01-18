import React, { useContext } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome5'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
 
  const navigationId=navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === navigationId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => 
      <TouchableOpacity
        onPress={()=>navigation.navigate('Edit', {id: navigation.getParam('id')})}
      >
        <Icon name='edit' style={styles.icon} />
      </TouchableOpacity>
  };
}

const styles = StyleSheet.create({
  icon : {
    marginRight:20,
    fontSize:30
  }
});


export default ShowScreen;