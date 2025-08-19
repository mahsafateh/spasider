import { useWindowDimensions, Platform } from "react-native";

const useResponsive = () => {
  const { width, height, fontScale } = useWindowDimensions();
  const isPortrait = height >= width;
  const isTablet = Math.min(width, height) >= 768;
  const dp = (n: number) => Math.round((width / 375) * n); // density-independent pixels ==> based on iPhone 6/7/8 width
  const sp = (n: number) => Math.round(dp(n) / fontScale); // scale-independent pixels ==> respects Accessibility text size (users system setting for fonts and ...)
  const columns = isTablet ? 3 : width >= 480 ? 2 : 1;
  return { width, height, isPortrait, isTablet, columns, dp, sp, Platform };
};

export default useResponsive;
