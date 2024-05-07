import { useAppSelector } from "@/src/store/reduxHooks";
import { selectIsDark } from "@/src/store/slices/systemSlice";
import { StatusBar, StatusBarProps } from "expo-status-bar";

// status bar component which will update its style to fit dark/light theme
const ThemedStatusBar = (props: StatusBarProps) => {
  const isDark = useAppSelector(selectIsDark);

  const statusBarProps: StatusBarProps = {
    style: isDark ? "light" : "dark",
    ...props,
  };

  return <StatusBar {...statusBarProps} />;
};

export default ThemedStatusBar;
