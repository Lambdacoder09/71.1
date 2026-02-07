import { memo } from "react";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  HiOutlineSearch,
} from "react-icons/hi";

const iconMap = {
  username: <HiOutlineUser className="w-5 h-5" />,
  email: <HiOutlineMail className="w-5 h-5" />,
  password: <HiOutlineLockOpen className="w-5 h-5" />,
  confirmPassword: <HiOutlineLockClosed className="w-5 h-5" />,
  search: <HiOutlineSearch className="w-5 h-5" />,
};

function Input({
  id,
  name,
  placeholder,
  className = "",
  touched,
  error,
  ...rest
}) {
  const icon = iconMap[name] || null;

  const errorClass = touched && error ? "border-red-500" : "border-gray-400";
  const focusClass = "focus:border-yellow-500 focus:ring-yellow-500";
  
  const combinedClassName = `w-full p-3 pl-10 border-2 rounded transition-colors duration-200 focus:outline-none focus:ring-1 ${errorClass} ${focusClass} ${className}`;

  return (
    <>
      <div className="relative flex items-center">
        {icon && (
          <span className="left-3 absolute opacity-50 w-5 h-5 pointer-events-none">
            {icon}
          </span>
        )}
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          className={combinedClassName}
          {...rest}
        />
      </div>
      {touched && error && (
        <p className="mt-1 pl-1 text-red-500 text-sm">{error}</p>
      )}
    </>
  );
}

export default memo(Input);
