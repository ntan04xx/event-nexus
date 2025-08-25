import "./Events.css";
import {useEffect, useState} from "react";
import ToolbarGuest from "../components/ToolbarGuest";
import Menu from '../components/Menu';

const Events = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => {
        setMenuVisible((prev) => !prev);
    };

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("http://localhost:3000/events/list");
                const tableData = await response.json();
                setData(tableData);
            } catch(e) {
                setError(e.message);
            }
        };
        fetchData();
    }, []);

    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="Events">
          <header className="Toolbar-header">
            <ToolbarGuest toggleMenu={toggleMenu} />
            <Menu isVisible={menuVisible} />
          </header>
    
          <header className="Notif-header">
            <h2>Events List</h2>
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Organiser</th>
                            <th>Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => (
                            <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.organiser}</td>
                            <td>{item.type}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
          </header>
        </div>
    );
};

export default Events;
