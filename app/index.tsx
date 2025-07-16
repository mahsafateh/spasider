import {Text, TextInput, View} from "react-native";

export default function Index() {
  return (
    <View className={'flex-1 justify-center items-center'}
    >
      <Text className={'font-quicksand-bold'}>Hello, I am Spy</Text>
      
      <View>
        <Text>Enter the number of Spies</Text>
        <TextInput placeholder={'Enter the number of Spies'} />
      </View>
      <View>
        <Text>Enter the number of Insiders</Text>
        <TextInput placeholder={'Enter the number of Insiders'} />
      </View>
    </View>
  );
}
