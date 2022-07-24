import { breakpoint, WindowSize } from "./constants";

export function getWindowSize() {
    const { innerWidth } = window;
    if (innerWidth < breakpoint.small) {
        return WindowSize.SMALL
      } else if (innerWidth < breakpoint.medium) {
        return WindowSize.MEDIUM
      } else if (innerWidth < breakpoint.large) {
        return WindowSize.LARGE
      } else {
        return WindowSize.XLARGE
      };
}
