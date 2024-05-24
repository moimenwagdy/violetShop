import { useDarkMoodToggler } from "./utilities/useDarkMoodToggler";

function App() {
  const { darkMoodToggler } = useDarkMoodToggler();

  return (
    <>
      <button onClick={darkMoodToggler}>toggle</button>
    </>
  );
}

export default App;
