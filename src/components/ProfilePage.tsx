import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Text,
  useWindowDimensions,
  Linking,
  PixelRatio,
  TextInput,
  NativeModules,
} from 'react-native';
import {MyView} from './MyView';
import NativeInfoView from './LinearView';
import profile_bg_img from '../assets/icon_mine_bg.png';
import icon_menu from '../assets/icon_menu.png';
import icon_share from '../assets/icon_share.png';
import defaultAvatar from '../assets/icon_default_avatar.png';
import icon_qrcode from '../assets/icon_qrcode.png';
import icon_add from '../assets/icon_add.png';
import icon_female from '../assets/icon_female.png';
import icon_setting from '../assets/icon_setting.png';

const ProfilePage = () => {
  const windowDimensions = useWindowDimensions();
  // console.log(windowDimensions);
  const {NativeMethodsModule} = NativeModules;

  const handleMore = () => {
    console.log('more...');
  };
  const handleShare = () => {
    console.log('handleShare...');
    // 调用printMessage原生方法
    NativeMethodsModule.printMessage('Hello from JS!')
      .then(() => {
        console.log('Message sent to native method successfully!');
      })
      .catch(error => {
        console.error('Error calling native method:', error);
      });
  };

  const handleAvatar = () => {
    console.log('avatar');
    NativeMethodsModule.openGallery();
  };
  const handleQrcode = () => {
    console.log('handleQrcode');
  };

  const handleSetting = () => {
    console.log('handleSetting');
    // Linking.openURL('https://m.baidu.com');
    console.log(PixelRatio.get());
  };

  const handleEdit = () => {
    console.log('handleEdit');
    // Linking.openURL('tel:10086');
    // Linking.openURL('smsto:10086');
    Linking.openSettings();
    // Linking.openURL('geo:116.38, 39.9');
  };

  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground style={styles.imgBg} source={profile_bg_img}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleMore}>
              <Image style={styles.icon_menu} source={icon_menu} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
              <Image
                style={styles.icon_share}
                source={icon_share}
                tintColor={'#fff'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.userDetaile}>
            <TouchableOpacity onPress={handleAvatar}>
              <View style={styles.avatar}>
                <Image style={styles.avatar_img} source={defaultAvatar} />
                <Image style={styles.add} source={icon_add} />
              </View>
            </TouchableOpacity>

            <View style={styles.userInfo}>
              <Text style={styles.name}>孙悟空</Text>
              <View style={styles.detail}>
                <Text style={styles.account}>小红书号：1238882</Text>
                <TouchableOpacity onPress={handleQrcode}>
                  <Image
                    style={styles.qrcode}
                    source={icon_qrcode}
                    tintColor={'#ffffff'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.profile}>
            <Text style={styles.desc}>点击关注，填写简介</Text>
          </View>
          <View style={styles.sex}>
            <Image style={styles.sex_icon} source={icon_female} />
          </View>
          <View style={styles.popularity}>
            <View style={styles.row}>
              <View style={styles.row_item}>
                <Text style={styles.popNum}>123</Text>
                <Text style={styles.label}>关注</Text>
              </View>
              <View style={styles.row_item}>
                <Text style={styles.popNum}>12121</Text>
                <Text style={styles.label}>粉丝</Text>
              </View>
              <View style={styles.row_item}>
                <Text style={styles.popNum}>12323</Text>
                <Text style={styles.label}>获赞与收藏</Text>
              </View>
            </View>
            <View style={styles.operate}>
              <TouchableOpacity onPress={handleEdit}>
                <View style={styles.edit}>
                  <Text style={styles.edit_text}>编辑资料</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSetting}>
                <View style={styles.setting}>
                  <Image
                    style={styles.icon_setting}
                    source={icon_setting}
                    tintColor={'#fff'}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* 桥接原生ui组件 kt */}
      <NativeInfoView />
      <Text>北京</Text>
      <View style={styles.inputView}>
        <View
          style={[
            styles.inputBox,
            {
              borderColor: !inputValue
                ? '#888'
                : inputValue.length === 11
                ? '#00cd00'
                : '#c0c0c0',
            },
          ]}>
          <TextInput
            keyboardType="number-pad"
            maxLength={11}
            onChangeText={value => {
              console.log('text', value);
              setInputValue(value);
            }}
          />
        </View>
      </View>
      {/*Fragment  */}
      {/* <MyView /> */}
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  inputView: {
    width: '100%',
    paddingHorizontal: 20,
    // paddingTop: 34,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    borderRadius: 10,
  },
  popularity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  operate: {
    flexDirection: 'row',
  },
  edit: {
    justifyContent: 'center',
  },
  edit_text: {
    height: 30,
    lineHeight: 30,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    paddingHorizontal: 10,
    color: '#fff',
  },
  setting: {
    justifyContent: 'center',
    height: 30,
    lineHeight: 30,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  icon_setting: {
    width: 20,
    height: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row_item: {
    marginRight: 18,
    alignItems: 'center',
  },
  label: {
    color: '#ffffffd2',
    marginTop: 6,
  },
  popNum: {
    width: '100%',
    color: '#ffffff',
    textAlign: 'center',
  },
  imgBg: {
    width: '100%',
    // height: 370,
    resizeMode: 'cover',
    paddingTop: 20,
    paddingBottom: 30,
    // height: 200,
  },
  sex: {
    width: 31,
    marginTop: 18,
    paddingVertical: 3,
    backgroundColor: '#b9b4d4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sex_icon: {
    width: 11,
    height: 17,
  },
  container: {
    width: '100%',
    // height: '100%',
    paddingHorizontal: 16,
  },
  profile: {
    marginTop: 22,
  },
  desc: {
    fontSize: 18,
    color: '#ffffff',
  },
  userInfo: {
    marginLeft: 15,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  account: {
    color: '#ffffff',
    fontSize: 16,
    marginRight: 8,
  },
  qrcode: {
    width: 16,
    height: 16,
  },
  name: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: 'bold',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  icon_menu: {
    width: 33,
    height: 33,
  },
  icon_share: {
    width: 33,
    height: 33,
  },
  userDetaile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  avatar: {
    position: 'relative',
    width: 86,
    height: 86,
  },
  avatar_img: {
    width: '100%',
    height: '100%',
  },
  add: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: -6,
    bottom: 3,
  },
});
