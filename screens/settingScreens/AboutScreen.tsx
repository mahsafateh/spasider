import { ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/spy.png")}
      resizeMode="cover"
      className="w-full"
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.5 }}
    >
      <SafeAreaView className="flex-1">
        <ScrollView
          className="h-full flex-1 my-[20px] mx-[10px]"
          contentContainerClassName="justify-center items-center"
        >
          <View
            className={`flex-row bg-white rounded-xl shadow-lg w-11/12 items-stretch h-auto justify-between mb-4`}
          >
            <Text className="text-xl font-quicksand p-4 text-left leading-7">
              <Text className="font-quicksand-semibold">
                🎮 Game Overview:{" "}
              </Text>
              Spy & Insider is ideal for groups of 3 or more players. One player
              is randomly selected as the Spy, and the rest are Insiders who
              receive a secret word. The Spy must blend in without knowing the
              word — while Insiders try to subtly expose the Spy without giving
              away the secret.
            </Text>
          </View>
          <View
            className={`flex-row bg-white rounded-xl shadow-lg w-11/12 items-stretch h-auto justify-between mb-4`}
          >
            <Text className="text-xl font-quicksand p-4 text-left leading-7">
              <Text className="font-quicksand-semibold">🧩 How to Play:</Text>{" "}
              {"\n"}
              <Text className="font-quicksand-semibold">
                1. Choose a Category —
              </Text>{" "}
              Players select a word category (e.g., Food, Jobs, Animals).
              Thousands of words are built-in and accessible offline.
              {"\n"}{" "}
              <Text className="font-quicksand-semibold">2. Assign Roles —</Text>{" "}
              Input the number of Spies and Insiders.
              {"\n"}
              <Text className="font-quicksand-semibold text-gray-700">
                ✅ Recommended ratio: 1 Spy for every 5 players for balanced and
                engaging gameplay. Tap Start to distribute roles.
              </Text>{" "}
              {"\n"}
              <Text className="font-quicksand-semibold">
                3. View Your Role —
              </Text>{" "}
              Insiders receive the secret word. The Spy gets no word — only the
              challenge to blend in.
              {"\n"}
              <Text className="font-quicksand-semibold">
                4. Question Rounds —
              </Text>{" "}
              Players take turns asking creative two-option questions (e.g., “Is
              it soft or hard?”). Insiders answer based on the word; the Spy
              must bluff convincingly.
              {"\n"}
              <Text className="font-quicksand-semibold">5. Vote —</Text> After
              2-3 rounds of questions, players can vote on who they suspect is
              the Spy.
              {"\n"}
              <Text className="font-quicksand-semibold">
                Correct vote = Insider victory.
                {"\n"}
                Incorrect = Spy wins.
              </Text>
            </Text>
          </View>
          <Text className="text-lg font-medium">About Spasider</Text>
          <Text className="text-gray-600 mt-2">Version 1.0.0</Text>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;
