import "./styles.css";
import Usestatehook from "./components/Usestatehook/Usestatehook";
import Useeffecthook from "./components/Useeffecthook/Useeffecthook";
import Usecontexthook from "./components/Usecontexthook/Usecontexthook";
import Userefhook from "./components/Userefhook/Userefhook";
export default function App() {
  // this approach is used when initialization is costly process}
  return (
    <div>
      {/* <Usestatehook></Usestatehook>
      <Useeffecthook></Useeffecthook>
      <Usecontexthook></Usecontexthook> */}
      <Userefhook></Userefhook>
    </div>
  );
}
