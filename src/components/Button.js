import React from 'react';

// creating this.context system in the nested component
import LanuageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';


class Button extends React.Component {


    // [ this.context approach ]
    /* 
        contextType ==> to guides the component to access to which context object is
        this.context ===> then to get value from the context object. 
    
    */

    // creating contextType property
    // it is a way to hook up constext object to the class.
    // contextType is a built-in name to run imported context object.
    // By using "staic", we can access to contextType on the basis of <Button /> class
    // static contextType = LanuageContext;

    // [ Consumer approach ]
    // single context
    // When we get the multiple contexts,
    //  we gotta use Consumer, not this.context.
    // renderSubmit = value => {
    //     return value === 'english' ? 'Submit' : '제출';            
    // }

    // multiple contexts
    renderSubmit = color => {
        return (
            <button className={`ui button ${ color }`}>
                <LanuageContext.Consumer>
                    {/* 
                        It is a callback to Consumer Object.
                        It is automatically invoked in that object
                    */}
                    { /* (value) => value === 'english' ? 'Submit' : '제출' */ }
                    { value =>  
                        // console.log('value: ', value)
                        value === 'english' ? 'Submit' : '제출' }
                </LanuageContext.Consumer>
            </button>
        );

    }    

    render() {

        // "eglish" as long as default value is setup
        // console.log(this.context); 
        
        // [ context ]
        // const text = this.context === 'english' ? 'Submit' : '제출';

        return (
            <ColorContext.Consumer>
                { color => this.renderSubmit(color) }
            </ColorContext.Consumer>
            
        );
    }
}

// Same thing as "static contextType = LanguageConText"above 
// Button.contextType = LanuageContext;

export default Button;