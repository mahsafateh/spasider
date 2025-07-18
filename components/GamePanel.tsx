import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { showRole, hideRole, resetGame } from "../store/gameSlice";

const WORD_BOX_HEIGHT = 60;

const GamePanel = () => {
  const dispatch = useDispatch();
  const {
    gameStarted,
    spies,
    insiders,
    word,
    currentRole,
    showWord,
    roles,
    loading,
    error,
  } = useSelector((state: RootState) => state.game);

  if (!gameStarted) return null;

  return (
    <View
      className={"flex-auto justify-center items-center min-h-[260px] w-full"}
    >
      {loading && <Text>Loading...</Text>}
      {error && <Text className='text-red-500'>{error}</Text>}
      {!loading && (
        <View className='items-center w-full'>
          <Text>Insiders: {insiders}</Text>
          <Text>Spies: {spies}</Text>
          <Text>Total Players: {insiders + spies}</Text>
          <View className='my-4'>
            <Text className='mb-2'>
              Players left: {roles.length + (currentRole ? 1 : 0)}
            </Text>
          </View>
          {/* Fixed height word/role display */}
          <View
            className='items-center justify-center w-full'
            style={{ minHeight: WORD_BOX_HEIGHT, marginBottom: 16 }}
          >
            {showWord ? (
              <>
                <Text className='text-2xl font-bold'>
                  {currentRole === "insider" ? word : "SPY"}
                </Text>
                <Text className='mt-2 text-gray-500'>
                  ({currentRole?.toUpperCase()})
                </Text>
              </>
            ) : (
              // Empty space to reserve height
              <View style={{ height: WORD_BOX_HEIGHT }} />
            )}
          </View>
          {/* Button area, always rendered */}
          <View className='flex-row items-center justify-center w-full'>
            {roles.length > 0 ? (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (showWord) {
                    dispatch(hideRole());
                  } else {
                    dispatch(showRole());
                  }
                }}
              >
                <View className='bg-blue-500 px-6 py-2 rounded-full'>
                  <Text className='text-white text-lg font-bold'>
                    {showWord ? "Hide" : "Show"}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={() => dispatch(resetGame())}>
                <View className='bg-red-500 px-4 py-2 rounded-full'>
                  <Text className='text-white'>Restart Game</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default GamePanel;
