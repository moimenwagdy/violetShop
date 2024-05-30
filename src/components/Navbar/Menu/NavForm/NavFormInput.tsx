export const NavFormInput: React.FC<{
  type: string;
  id: string;
  title: string;
  placeHolder?: string;
  name: string;
  conflict?: boolean;
  passwordConfirming?: boolean;
  isSignUp?: boolean;
  additionalStyles?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  id,
  type,
  title,
  placeHolder,
  onChange,
  name,
  conflict,
  isSignUp,
  passwordConfirming,
  additionalStyles,
}) => {
  const passDontMatch = isSignUp && conflict && passwordConfirming;
  return (
    <div
      className={`flex flex-col justify-center items-start  ${
        additionalStyles ? additionalStyles : ""
      }`}>
      <label className="w-full" htmlFor={id}>
        {title}
      </label>
      <input
        name={name}
        placeholder={placeHolder}
        type={type}
        id={id}
        onChange={(e) => {
          onChange && onChange(e);
        }}
        className={`${!isSignUp ? "py-2" : "py-1"} 
        ${passDontMatch ? "ring-1 ring-subColor_4" : ""}
       
         focus:outline-none focus:outline focus:outline-1 rounded-sm focus:outline-white focus:ring-0  w-full bg-lightestViolet/20 ps-4  placeholder:text-sm placeholder:font-basic placeholder:text-white/50`}></input>
    </div>
  );
};
