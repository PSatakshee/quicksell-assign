import React, { useState, useEffect } from 'react';
import Status from './Status';
import Priority from './Priority';
import User from './User';
import '../styles/Header.css';
import downarrow from '../assets/down.svg';
import display from '../assets/Display.svg';

function Header({ tickets, users }) {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState('User');

    useEffect(() => {
        // Check localStorage for the last selected component
        const lastSelected = localStorage.getItem('selectedComponent');
        if (lastSelected) {
            setSelectedComponent(lastSelected);
        }
    }, []);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedComponent(option);
        setShowOptions(false);
        // Save the selected component to localStorage
        localStorage.setItem('selectedComponent', option);
    };

    return (
        <>
            <div className="header-container">
                <div className="dropdown">
                    <button 
                        onClick={handleButtonClick} 
                        className="dropdown-button">
                        <img src={display} alt="Display" />Display <img src={downarrow} alt="Dropdown" />
                    </button>
                    
                    {showOptions && (
                        <div className="dropdown-options">
                            <div 
                                onClick={() => handleOptionClick('Status')} 
                                className="dropdown-option">
                                Grouping Status
                            </div>
                            <div 
                                onClick={() => handleOptionClick('Priority')} 
                                className="dropdown-option">
                                Ordering Priority
                            </div>
                            <div 
                                onClick={() => handleOptionClick('User')} 
                                className="dropdown-option">
                                User
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="component-container">
                {selectedComponent === 'Status' && <Status tickets={tickets} />}
                {selectedComponent === 'Priority' && <Priority tickets={tickets} />}
                {selectedComponent === 'User' && <User tickets={tickets} users={users} />}
            </div>
        </>
    );
}

export default Header;