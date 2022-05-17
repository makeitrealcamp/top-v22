import "./App.css";
import { AuthProvider } from "./store/AuthContext";
import Header from "./components/Header";
import Button from "./components/Buttons";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Button />
    </AuthProvider>
  );
}

export default App;
