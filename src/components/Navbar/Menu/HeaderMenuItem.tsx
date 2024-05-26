const HeaderMenuItem: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <li
      onClick={onClick}
      className=" mb-1 text-center font-basic dark:bg-midlightViolet/50 bg-middarkViolet/50 py-2 rounded-md">
      Site Map
    </li>
  );
};

export default HeaderMenuItem;
