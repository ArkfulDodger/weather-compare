import { Provider as PaperProvider } from "react-native-paper";
import { Theme, ThemeProvider } from "@react-navigation/native";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import useAppState from "../hooks/useAppState";
import useThemeControl from "../hooks/useThemeControl";
import ThemedStatusBar from "./ThemedStatusBar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {
  children: React.ReactNode;
};

// responsible for wrapping the app in global providers (other than redux store)
const AppWrapper = ({ children }: Props) => {
  // track the app state
  useAppState();

  // get the controlled theme object to pass to providers
  const theme = useThemeControl();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme as ThemeProp}>
        <ThemeProvider value={theme as Theme}>
          {children}
          <ThemedStatusBar />
        </ThemeProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default AppWrapper;
