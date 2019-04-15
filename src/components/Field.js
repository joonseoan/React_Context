import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

    static contextType = LanguageContext;

    render() {
        console.log('this.context in Field: ', this.context);

        const text = this.context === 'english' ? 'Name' : '제목';
        return(
            <div className="ui field">
                <label>{ text }</label>
                <input />
            </div>
        )
    }
}

export default Field;