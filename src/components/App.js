import React from 'react';
import UserCreate from './UserCreate'

// Creating context Provider to send data to deeply nested components
// need to wire it up with context object first.
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = {
        language: 'english',
        color: 'primary'
    };

    onLanguageChange = (language, color) => {
        this.setState({ language, color });
    };

    render = () => {
        return(<div className="ui container">
            <div>
                Select a language:
                <i className="flag us" onClick={ () => this.onLanguageChange('english', 'primary') } />
                <i className="flag kr" onClick={ () => this.onLanguageChange('korean', 'negative') } />
            </div>
            {/* 
                Creating Provider to send data to the deeply nested components
                But UserCrate must know that status. So what 's different??
            */}
            <LanguageContext.Provider value={ this.state.language }>
                    <UserCreate />
            </LanguageContext.Provider>

            {/* 
                Keep in mind that whenever we set up Context.Provider, 
                it creates a brand new pipe of information!
            */}
            <LanguageContext.Provider value="english">
                    <UserCreate />
            </LanguageContext.Provider>
            {/* 
                In the Field class,
                it is undefined becuase it does nto wire up to Language.Provider.
                , nothing but Field connects to UserCreate.
                then just rendering again from "UserCreate"
            */}

            <UserCreate />

            <ColorContext.Provider value={ this.state.color }>
                <LanguageContext.Provider value={ this.state.language }>
                        <UserCreate />
                </LanguageContext.Provider>
            </ColorContext.Provider>
        </div>);
    };
};

export default App;
