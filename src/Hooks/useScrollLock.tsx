import { useEffect, useState } from "react";

const useScrollLock = () => {
  ///<----States--->
  const [lock, setLock] = useState(false);

  ///<----Use Effects--->

  useEffect(() => {
    if (lock) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [lock]);

  return { lock, setLock };
};

export default useScrollLock;
