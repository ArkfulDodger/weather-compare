import { useAppSelector } from "@/src/redux/reduxHooks";
import { selectIsDark } from "@/src/redux/slices/systemSlice";
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
