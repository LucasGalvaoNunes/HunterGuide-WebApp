#!/bin/sh
# ./buildApp.sh [OPÇÃO] [APK NAME] [KEYSTORENAME]
platFormAndroidPath="platforms/android/app/build/outputs/apk/release/"

apkUnsigned="app-release-unsigned.apk"
apkName="$2.apk"
keyStoreName="$3.jks"


GenerateKeyStore(){
  keytool -genkey -v -keystore $keyStoreName -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
}
SignerApk(){
  jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $keyStoreName app-release-unsigned.apk my-alias
  zipalign -v 4 $platFormAndroidPath$apkUnsigned $platFormAndroidPath$apkName
  apksigner verify $platFormAndroidPath$apkName
}
case $1 in
--android-build)
  if [ -z "$2" ] && [ -z "$3" ]
  then
    echo "Esta função requer que voce digite o nome do aplicativo e depois o nome da chave!"
    exit 1
  fi
  export ANDROID_HOME=/home/nassar/Android/Sdk
  export PATH=$PATH:$ANDROID_HOME/tools;
  ionic cordova build android --prod --release
  if [ -f "$keystore" ]
  then
    SignerApk
  else
    GenerateKeyStore
  fi
;;

--android-run)
  export ANDROID_HOME=/home/nassar/Android/Sdk
  export PATH=$PATH:$ANDROID_HOME/tools;
  ionic cordova run android --prod
;;

--web-run)
  ionic serve
;;
esac
