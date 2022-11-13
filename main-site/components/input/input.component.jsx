import { useState } from "react";

export default function InputPassword({ className, name, onChange }) {
  const [isHidden, setIsHidden] = useState(true);
  function handleClick() {
    setIsHidden(!isHidden);
  }
  return (
    <div className={className}>
      <input type={isHidden ? "password" : "text"} name={name} onChange={onChange} />

      {isHidden ? (
        <img src="/Modal/sign-up/eye.svg" alt="show icon" onClick={handleClick} />
      ) : (
        <img src="/Modal/eye-off.svg" alt="show icon" onClick={handleClick} />
      )}
    </div>
  );
}
