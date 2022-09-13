import Form from "./Form";

function Header({ setInput, doxear, input }: any) {
  return (
    <header>
      <div className="Wrap">
        <h1>IP Address Tracker </h1>
        <Form setInput={setInput} input={input} doxear={doxear} />
      </div>
    </header>
  );
}

export default Header;
