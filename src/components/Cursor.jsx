import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot === null || cursorOutline === null) {
        //   return null; // or handle the error in a way that makes sense for your application
      }

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    });
  }, []);

  return (
    <>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </>
  );
};

export default Cursor;
