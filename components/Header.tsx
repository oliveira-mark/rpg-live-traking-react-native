import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col6}>
          <View style={styles.userInfo}>
            <Image source={require('../assets/images/image.jpg')} style={styles.userImage} />
            <View style={styles.userText}>
              <Text style={styles.greeting}>Olá, Marcos.</Text>
              <Text style={styles.welcome}>Bem-vindo de volta!</Text>
            </View>
          </View>
        </View>
        <View style={styles.col6}>
          <TouchableOpacity style={styles.profileButton}>
            <Image source={require('../assets/images/image.jpg')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.col12}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>

              <View style={styles.sliderItem}>
                <View style={styles.card}>
                  <Image source={require('../assets/images/image.jpg')} style={styles.cardIcon} />
                  <Text style={styles.cardText}>+240</Text>
                  <Text style={styles.cardText}>dias restantes</Text>
                </View>
              </View>

              <View style={styles.sliderItem}>
                <View style={styles.card}>
                  <Image source={require('../assets/images/image.jpg')} style={styles.cardIcon} />
                  <Text style={styles.cardText}>+240</Text>
                  <Text style={styles.cardText}>dias restantes</Text>
                </View>
              </View>

              <View style={styles.sliderItem}>
                <View style={styles.card}>
                  <Image source={require('../assets/images/image.jpg')} style={styles.cardIcon} />
                  <Text style={styles.cardText}>+240</Text>
                  <Text style={styles.cardText}>dias restantes</Text>
                </View>
              </View>

              <View style={styles.sliderItem}>
                <View style={styles.card}>
                  <Image source={require('../assets/images/image.jpg')} style={styles.cardIcon} />
                  <Text style={styles.cardText}>+240</Text>
                  <Text style={styles.cardText}>dias restantes</Text>
                </View>
              </View>

              <View style={styles.sliderItem}>
                <View style={styles.card}>
                  <Image source={require('../assets/images/image.jpg')} style={styles.cardIcon} />
                  <Text style={styles.cardText}>+240</Text>
                  <Text style={styles.cardText}>dias restantes</Text>
                </View>
              </View>

          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  col6: {
    flex: 1,
  },
  col12: {
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userText: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcome: {
    fontSize: 14,
    color: '#666',
  },
  profileButton: {
    alignItems: 'flex-end',
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  slider: {
    flexDirection: 'row',
  },
  sliderItem: {
    marginRight: 10,
  },
  card: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Header;