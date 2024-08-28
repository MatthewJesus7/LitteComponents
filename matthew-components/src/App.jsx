import Section from "./Components/Layout/Section";

function App() {
  return (
    <div className="App">
      <Section customclass="text-center bg-pink-300">
        <h1>Seja Bem-vindo a litteComponents!</h1>
        <h2>By Matthew</h2>
      </Section>
      <Section customclass="flex">
        <article>
          <h2>Como funciona a nossa biblioteca?</h2>
          <p></p>
        </article>
        <aside>
          Card
        </aside>
      </Section>
    </div>
  );
}

export default App;
