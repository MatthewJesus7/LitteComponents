import Section from "./Components/Layout/Section";
import Card from "./Components/Layout/Card";
import CardButton from "./Components/Items/CardButton";

function App() {
  return (
    <div className="App">
      <Section customclass="text-center">
        <h1>Seja Bem-vindo a litteComponents!</h1>
        <h2>By Matthew</h2>
      </Section>
      <Section customclass="flex justify-between flex-col sm:flex-row">

        <article className="sm:w-1/2 pb-5">
          <h2>Como funciona a nossa biblioteca?</h2>
          <p>conteúdo</p>
        </article>

        <aside className="sm:w-1/2">
        <Card
        type="card component_card"
        title="Cards"
        />
        <CardButton></CardButton>
        </aside>

      </Section>
    </div>
  );
}

export default App;
