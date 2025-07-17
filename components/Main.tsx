import { View, Button } from "react-native";
import FloatingLabelInput from "./FloatingLabelInput";

function Main() {
  const inputValueHandler = () => {
    console.log("Input value handler");
  }
  return (
    <View className={"flex-1 px-2 items-center "}>
 
      <View
        className={"rounded-lg p-4 mb-2 w-full max-w-md"}
      >
        <FloatingLabelInput label='Category' onChangeText={inputValueHandler}/>
   
        <FloatingLabelInput label='Spies' onChangeText={inputValueHandler}/>

        <FloatingLabelInput label='Insiders' onChangeText={inputValueHandler} />
      </View>
        <Button title={"Show"} />
      </View>
  );
}

export default Main;
