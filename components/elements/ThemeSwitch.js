import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [togglETHeme, setTogglETHeme] = useState(
    () => JSON.parse(localStorage.getItem("togglETHeme")) || "light-mode",
  );
  useEffect(() => {
    localStorage.setItem("togglETHeme", JSON.stringify(togglETHeme));
    document.body.classList.add(togglETHeme);
    document.documentElement.classList.add(togglETHeme);
    return () => {
      document.body.classList.remove(togglETHeme);
      document.documentElement.classList.remove(togglETHeme);
    };
  }, [togglETHeme]);

  return (
    <>
      <div
        className="dark-light d-flex align-items-center pr-15 mr-15"
        onClick={() =>
          togglETHeme === "light-mode"
            ? setTogglETHeme("dark-mode")
            : setTogglETHeme("light-mode")
        }
      >
        {togglETHeme === "dark-mode" ? (
          <img
            src="/assets/imgs/theme/light.svg"
            alt=""
            className="light-icon"
          />
        ) : (
          <img src="/assets/imgs/theme/dark.svg" alt="" className="dark-icon" />
        )}
      </div>
    </>
  );
}
