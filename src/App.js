import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import NotesList from "./components/NotesList";
import NoteProvider from "./store/NoteProvider";

function App() {
  return (
    <NoteProvider>
      <Header />
      <Note />
      <NotesList/>
      <Footer/>
    </NoteProvider>
  );
}

export default App;
