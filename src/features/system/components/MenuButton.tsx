import { useAppDispatch } from "@/src/redux/reduxHooks";
import { toggleDark } from "@/src/redux/slices/systemSlice";
import { useState } from "react";
import { Alert, ViewStyle } from "react-native";
import { IconButton, Menu } from "react-native-paper";

type Props = {
  style?: ViewStyle;
};

// the button which brings up the app's main menu
const MenuButton = ({ style }: Props) => {
  const dispatch = useAppDispatch();

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onToggle = () => {
    dispatch(toggleDark());
    closeMenu();
  };

  const onHelp = () => {
    Alert.alert(
      "Usage",
      "Type in any location, and select your desired timeframe to compare the weather across successive weeks."
    );
    closeMenu();
  };

  const onSignOut = () => {
    Alert.alert("User Has Been Signed Out");
    closeMenu();
  };

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="menu" onPress={openMenu} />}
      >
        <Menu.Item onPress={onToggle} title="Light/Dark" />
        <Menu.Item onPress={onHelp} title="Help" />
        <Menu.Item onPress={onSignOut} title="Sign Out" />
      </Menu>
    </>
  );
};

export default MenuButton;
