import useStyles from "@/src/hooks/useStyles";
import {
  Picker as NativePicker,
  PickerProps,
} from "@react-native-picker/picker";
import { useMemo, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Icon, Modal, Portal, Text } from "react-native-paper";
import { Platform, View } from "react-native";
import { createStyles } from "./Picker.styles";

export type PickerData = { [value: string]: string };

export type Props = PickerProps & {
  data: PickerData;
};

// allows the user to select an option from a native picker
// returns the dropdown picker on Android
// returns a button opening a picker modal on iOS
const Picker = ({ data, ...pickerProps }: Props) => {
  const styles = useStyles(createStyles);

  // whether picker modal is shown on iOS
  const [modalShown, setModalShown] = useState(false);
  const showModal = () => setModalShown(true);
  const hideModal = () => setModalShown(false);

  const pickerItems = Object.entries(data).map(([value, label], i) => (
    <NativePicker.Item key={i} value={value} label={label} />
  ));

  const picker = useMemo(
    () => (
      <NativePicker
        {...pickerProps}
        onValueChange={(itemValue: string | number, itemIndex: number) => {
          !!pickerProps.onValueChange &&
            pickerProps.onValueChange(itemValue, itemIndex);
          modalShown && hideModal();
        }}
      >
        {pickerItems}
      </NativePicker>
    ),
    [pickerProps, modalShown]
  );

  const button = useMemo(
    () => (
      <>
        <TouchableOpacity onPress={showModal}>
          <View style={styles.button}>
            <Text>
              {pickerProps.selectedValue
                ? data[pickerProps.selectedValue]
                : "Select a Day"}
            </Text>
            <Icon source="chevron-down" size={20} />
          </View>
        </TouchableOpacity>
        <Portal>
          <Modal visible={modalShown} onDismiss={hideModal}>
            <Card style={styles.modalCard}>{picker}</Card>
          </Modal>
        </Portal>
      </>
    ),
    [pickerProps.selectedValue, modalShown]
  );

  return <>{Platform.OS === "ios" ? button : picker}</>;
};

export default Picker;
