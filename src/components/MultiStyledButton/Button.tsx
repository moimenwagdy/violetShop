const Button: React.FC<{
  title?: string;
  onClick?: () => void;
  variants?: string;
  additionalStyles?: string;
  disabled?: boolean;
}> = ({ onClick, title, variants, additionalStyles, disabled }) => {
  let VariantsClasses;
  switch (variants) {
    case "basic":
      VariantsClasses =
        "w-full dark:text-lightestViolet dark:bg-simidarkViolet  bg-lightestViolet text-simidarkViolet hover:text-lightestViolet hover:bg-simidarkViolet  dark:hover:bg-lightestViolet dark:hover:text-simidarkViolet";
      break;
    case "redButton":
      VariantsClasses =
        "ms-[50%] -translate-x-[50%] bg-subColor_4 text-white hover:bg-white hover:text-subColor_4 ";
      break;
    case "redButtonFree":
      VariantsClasses =
        "bg-subColor_4 text-white hover:bg-white hover:text-subColor_4 ";
      break;
    case "redButtonClose":
      VariantsClasses =
        "absolute bottom-5 left-5 text-center py-1 px-4 rounded-md font-basic bg-subColor_4 ";
      break;
    case "AddItem":
      VariantsClasses =
        "text-center py-1 px-4 rounded-md font-basic bg-subColor_4 text-white hover:scale-105 transition-all duration-200";
      break;
    default:
      break;
  }
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-1 rounded-md  disabled:bg-gray-200 disabled:hover:bg-gray-200 disabled:text-black/50 disabled:hover:text-black/50  ${VariantsClasses} ${additionalStyles}`}>
      {title}
    </button>
  );
};

export default Button;
