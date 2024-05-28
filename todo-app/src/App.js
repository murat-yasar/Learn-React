import './App.css';
import Header from './components/Header';
import List from './components/List';
import Menu from './components/Menu'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section class="todoapp">
        <Header />
      </section>
      <section class="main">
        <List />
        <Menu />
      </section>
        <Footer />
    </div>
  );
}

export default App;
