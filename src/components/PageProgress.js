// This component was written by Noman Gul
import React, { useState, useEffect } from "react";

const PageProgress = ({ color, height, ...props }) => {
  const [width, setWidth] = useState(null);

  const watchScrolling = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    const winScroll = document.body.scrollTop || scrollTop;
    const winHeight = scrollHeight - clientHeight;
    const scrolled = `${(winScroll / winHeight) * 100}%`;
    if (winHeight > 0) {
      return setWidth(scrolled);
    } else {
      return setWidth(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", watchScrolling);
    return () => window.removeEventListener("scroll", watchScrolling);
  }, [color, height]);

  const styles = {
    progress: {
      marginTop: 0,
      // marginLeft: -10,
      // marginRight: -10,
      padding: 0,
      // background: color ? color : "skyblue",
      background: "linear-gradient(45deg, blue, darkgreen)",
      // borderRadius: "10px",
      position: "fixed",
      height: height ? height : 5,
      width: width,
      top: 0,
      zIndex: 99,
      transition: "width 200ms ease-out"
    }
  };

  return <div style={styles.progress} {...props} />;
};

export default PageProgress;
