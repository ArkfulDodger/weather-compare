import { useTheme } from "react-native-paper";
import { AppTheme } from "../theme/themes";

// hook to retrieve the app theme, using the RN Paper theme hook, enforced to app theme type
const useAppTheme = () => useTheme() as AppTheme;

export default useAppTheme;
