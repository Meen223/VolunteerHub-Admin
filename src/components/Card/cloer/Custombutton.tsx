function CustomButton({ text, colorClass, hoverClass, onClick }) {
  return (
    <button
      className={`${colorClass} text-white text-sm rounded-full px-16 py-2 ${hoverClass} focus:outline-none`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CustomButton;