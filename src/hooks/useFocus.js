import { useState } from "react";

const useFocus = () => {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return { focused, onFocus, onBlur };
};

export default useFocus;
