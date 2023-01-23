import axios from "axios";
import { useEffect, useState } from "react";

interface GreetingResponse {
  greeting: string;
}

function App() {
  const [data, setData] = useState<GreetingResponse | null>(null);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get<GreetingResponse>(
        "/greeting?month=January"
      );
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>TDD with Jest, RTL and MSW</h1>
      <p>{data ? data.greeting : "Wait a minute!"}</p>
    </div>
  );
}

export default App;
