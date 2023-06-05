import './main.css';
import Content from '../components/content';
import Sidebar from "../components/sidebar";

export default function Main() {
    return (
        <main className="main">
            <Content/>
            <Sidebar/>
        </main>
    );
  }