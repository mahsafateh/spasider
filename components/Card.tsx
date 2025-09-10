import { View, ViewProps } from "react-native";

type Props = ViewProps & { className?: string };

const Card = ({ className = "", style, ...props }: Props) => {
  return (
    <View
      className={`rounded-2xl p-4 bg-white ios:bg-[#EEEEEE] ${className}`}
      style={[
        {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 20,
          elevation: 30,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default Card;
