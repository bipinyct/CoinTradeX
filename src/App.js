import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes> {/* Wrap your Routes in a Routes element */}
          <Route path="/" element={<Homepage />} /> {/* Use 'element' prop */}
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
