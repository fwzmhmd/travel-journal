import './App.scss';
import data from './data.js';
import Card from './components/Card';
import Navbar from './components/Navbar';

export default function App() {
  const cards = data.map(d => {
    return <Card {...d} />;
  });
  return (
    <div>
      <Navbar />
      <main>{cards}</main>
    </div>
  );
}
