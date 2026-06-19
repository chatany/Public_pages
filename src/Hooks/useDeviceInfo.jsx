import { useEffect, useState } from "react";

export const useDeviceInfo = () => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const ua = navigator.userAgent;

    const getPlatform = () => {
      if (/Windows/i.test(ua)) return "Windows";
      if (/Macintosh/i.test(ua)) return "MacOS";
      if (/Android/i.test(ua)) return "Android";
      if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
      if (/Linux/i.test(ua)) return "Linux";
      return "Unknown";
    };

    const getOSVersion = (platform) => {
      if (platform === "iOS") {
        const m = ua.match(/OS (\d+)[._](\d+)/);
        return m ? `${m[1]}.${m[2]}` : "Unknown";
      }

      if (platform === "Android") {
        const m = ua.match(/Android (\d+(?:\.\d+)?)/);
        return m ? m[1] : "Unknown";
      }

      if (platform === "MacOS") {
        const m = ua.match(/Mac OS X (\d+[_]\d+[_]?\d*)/);
        return m ? m[1].replace(/_/g, ".") : "Unknown";
      }

      if (platform === "Windows") {
        const m = ua.match(/Windows NT (\d+\.\d+)/);
        return m ? m[1] : "Unknown";
      }
      return "Unknown";
    };

    const platform = getPlatform();
    const os_version = getOSVersion(platform);

    const result = {
      platform,
      os_version,
    };

    setInfo({
      device_type: "Web",
      device_info: JSON.stringify(result),
    });
  }, []);
  return info;
};
