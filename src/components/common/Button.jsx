export const Button = ({ children, variant = "primary", size = "medium", onClick, disabled = false }) => {
  const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 rounded-md transition";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
    active: "bg-green-500 text-white hover:bg-green-600",
  };

  const sizes = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3",
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
};
