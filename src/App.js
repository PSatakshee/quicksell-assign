import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';

const App = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
                setTickets(response.data.tickets);
                setUsers(response.data.users); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <Header tickets={tickets} users={users} /> 
        </div>
    );
};

export default App;