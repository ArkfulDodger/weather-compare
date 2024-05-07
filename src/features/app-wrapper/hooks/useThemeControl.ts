import { useEffect, useMemo } from "react";
import { darkTheme, lightTheme } from "../../../theme/themes";
import {
  refreshSystemTheme,
  selectIsAppActive,
  selectIsDark,
} from "../../../redux/slices/systemSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/reduxHooks";

// updates system theme on app focus
// returns active theme object based on current dark mode state
const useThemeControl = () => {
  const isDark = useAppSelector(selectIsDark);
  const isAppActive = useAppSelector(selectIsAppActive);
  const dispatch = useAppDispatch();

  // when the app regains focus, refresh the system theme in case it has changed
  useEffect(() => {
    if (isAppActive) dispatch(refreshSystemTheme());
  }, [isAppActive]);

  // memoize the theme object, updating when theme state changes
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return theme;
};

export default useThemeControl;
