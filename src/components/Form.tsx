function Form({ setInput, doxear, input }: any) {
  function handleChange(e: any) {
    e.preventDefault();
    setInput(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    doxear(input);
  }

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          // pattern="^(?!0)(?!.*.$)((1?d?d|25[0-5]|2[0-4]d)(.|$)){4}$"
          name="IP"
          id="ip"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}></button>
      </form>
    </div>
  );
}

export default Form;
