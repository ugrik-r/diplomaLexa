import { useRouter } from "../hooks/useRouter";
import './app.styles.css';

export const App = () => {
  const router = useRouter();
  return <div className="App">{router}</div>;
};
