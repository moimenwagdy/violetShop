const HeaderMenuItem: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <li
      onClick={onClick}
      className="flex justify-evenly   dark:bg-midlightViolet/50 bg-middarkViolet/50 py-1 rounded-md">
      <h4 className="font-basic">Menu</h4>
    </li>
  );
};

export default HeaderMenuItem;
