import './sidebar.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Sidebar navigation</h2>
            <ul className="add-nav">
                <li>
                    <a href="">Item 1</a>
                </li>
                <li>
                    <a href="">Item 2</a>
                </li>
                <li>
                    <a href="">Item 3</a>
                </li>
            </ul>
            <h2>Text title</h2>
            <p>Some text some text some text some text some text some text</p>
      </aside>
    );
  }