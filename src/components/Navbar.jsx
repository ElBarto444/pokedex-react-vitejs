function Navbar({increment, decrement}) {
  return (
    <>
      <div>
        <button onClick={decrement}>Précedent</button>
        <button onClick={increment}>Suivant</button>
      </div>
    </>
  );
}

export default Navbar;
