/* global Babel */
import { useState } from "react";
import CodeEditor from "./components/Editor";
import Preview from "./components/Preview";
import PackageManager from "./components/PackageManager";
import "./App.css";

const App = () => {
  const [code, setCode] = useState(`const App = () => <h1>Hello, World!</h1>;`);
  const [transpiledCode, setTranspiledCode] = useState('');
  const [packages, setPackages] = useState([]);

  const handleRunCode = () => {
    try {
      const transformed = Babel.transform(
        `
        ${packages.map(pkg => `import "${pkg}";`).join('\n')}
        const rootElement = document.getElementById('root');
        ${code}
        ReactDOM.render(<App />, rootElement);
        `,
        { presets: ["react", "env"] }
      ).code;
      setTranspiledCode(transformed);
    } catch (error) {
      setTranspiledCode(`console.error(\`${error.message}\`)`);
    }
  };

  const addPackage = (pkg) => {
    setPackages([...packages, pkg]);
  };

  return (
    <div className="app">
      <PackageManager addPackage={addPackage} />
      <button className="run-button" onClick={handleRunCode}>
        Run
      </button>
      <div className="main-section">
        <CodeEditor code={code} setCode={setCode} />
        <Preview code={transpiledCode} />
      </div>
    </div>
  );
};

export default App;
