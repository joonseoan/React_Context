// Context Object
// The reason we separate this file from the components is because
//  the context object gets into the components which import / use the context.
// Hence, it can be used many components' media between input and output

// this methods are invoked by using map.array();
// Therefore, values of console.log is like

/* 
    2 - this.context in Field:  english
    Field.js:9 this.context in Field:  undefined
*/
import React from 'react';

// we can create default value like this 'english'
export default React.createContext();