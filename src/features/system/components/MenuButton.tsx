import { useState } from "react";
import { Alert, ViewStyle } from "react-native";
import { IconButton, Menu } from "react-native-paper";

type Props = {
  style?: ViewStyle;
};

// the button which brings up the app's main menu
const MenuButton = ({ style }: Props) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

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
        <Menu.Item onPress={onHelp} title="Help" />
        <Menu.Item onPress={onSignOut} title="Sign Out" />
      </Menu>
    </>
  );
};

export default MenuButton;
