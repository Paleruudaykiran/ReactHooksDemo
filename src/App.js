import "./styles.css";
import Usestatehook from "./components/Usestatehook/Usestatehook";
import Useeffecthook from "./components/Useeffecthook/Useeffecthook";
export default function App() {
  // this approach is used when initialization is costly process}
  return (
    <div>
      <Usestatehook></Usestatehook>
      <Useeffecthook></Useeffecthook>
    </div>
  );
}
