import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Platform,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { showRole, hideRole, resetGame } from "@/store/gameSlice";
import PrimaryButton from "./PrimaryButton";
import { GameResultsModalProps } from "@/types/index";

const WORD_BOX_HEIGHT = 60;

const GameResultsModal: React.FC<GameResultsModalProps> = ({
  visible,
  onClose,
}) => {
  const dispatch = useDispatch();
  const {
    spies,
    insiders,
    word,
    currentRole,
    showWord,
    roles,
    loading,
    error,
  } = useSelector((state: RootState) => state.game);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
      presentationStyle="pageSheet"
    >
      <ImageBackground
        source={require("../assets/images/spy.png")}
        resizeMode="cover"
        className="w-full"
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.5 }}
      >
        <SafeAreaView className="flex-1">
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View
              className="rounded-3xl p-4 m-4"
              style={{
                backgroundColor: Platform.OS === "ios" ? "#EEEEEE" : "#fff",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 20,
                elevation: 30,
                width: "100%",
                maxWidth: 400,
              }}
            >
              <View className="flex-row items-center justify-between mb-4">
                <Text className="font-quicksand-bold text-lg">
                  Game Results
                </Text>
                <TouchableOpacity onPress={() => dispatch(resetGame())}>
                  <Text className="text-blue-500 font-quicksand-semibold">
                    ✕
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="items-center w-full">
                {loading && <Text>Loading...</Text>}
                {error && <Text className="text-red-500">{error}</Text>}
                {!loading && (
                  <>
                    <Text className="font-quicksand-semibold text-2xl">
                      Insiders: {insiders}
                    </Text>
                    <Text className="font-quicksand-semibold text-2xl">
                      Spies: {spies}
                    </Text>
                    <Text className="font-quicksand-semibold text-2xl">
                      Total Players: {insiders + spies}
                    </Text>
                    <View className="my-4">
                      <Text className="mb-2 font-quicksand-semibold text-2xl">
                        Players left: {roles.length + (currentRole ? 1 : 0)}
                      </Text>
                    </View>

                    <View
                      className="items-center justify-center w-full"
                      style={{ minHeight: WORD_BOX_HEIGHT, marginBottom: 16 }}
                    >
                      {showWord ? (
                        <>
                          <Text className="text-2xl font-quicksand-semibold">
                            {currentRole === "insider" ? word : "جاسوس"}
                          </Text>
                          <Text className="mt-2 font-quicksand-semibold text-gray-500">
                            ({currentRole?.toUpperCase()})
                          </Text>
                        </>
                      ) : (
                        <View style={{ height: WORD_BOX_HEIGHT }} />
                      )}
                    </View>

                    <View className="flex-row items-center justify-center w-full">
                      {roles.length > 0 || showWord ? (
                        <PrimaryButton
                          title={showWord ? "Hide" : "Show"}
                          className="bg-blue-500"
                          onPress={() => {
                            if (showWord) {
                              dispatch(hideRole());
                            } else {
                              dispatch(showRole());
                            }
                          }}
                        />
                      ) : (
                        roles.length === 0 &&
                        !showWord && (
                          <PrimaryButton
                            title="Reset Game"
                            className="bg-red-500"
                            onPress={() => dispatch(resetGame())}
                          />
                        )
                      )}
                    </View>
                  </>
                )}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </Modal>
  );
};

export default GameResultsModal;
