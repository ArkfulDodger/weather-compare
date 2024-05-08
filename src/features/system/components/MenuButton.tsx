import { ViewStyle } from "react-native";
import { IconButton } from "react-native-paper";

type Props = {
  style?: ViewStyle;
};

// the button which brings up the app's main menu
const MenuButton = ({ style }: Props) => {
  return (
    <>
      <IconButton icon="menu" />
    </>
  );
};

export default MenuButton;
