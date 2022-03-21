import { useState } from "react";

const useOpen = () => {
  const [opened, setOpened] = useState(false);
  const onMenuOpen = () => setOpened(true);
  const onMenuClose = () => setOpened(false);
  return { opened, onMenuOpen, onMenuClose };
};

export default useOpen;