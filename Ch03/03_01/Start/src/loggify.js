import React, { Component } from 'react'
import styled from 'styled-components';

const LoggerContainer = styled.div`
    backgroundColor: aliceblue;
    border: 2px grooved aquamarine;
    border-radius: 5px
`

LoggerContainer.displayName = 'LoggerConatiner'

const H2 = styled.h2`
    color: blueviolet;
`

H2.displayName = 'H2'

export default (Wrapped) => {

    let originals = {

    }

    const methodsToLog = ['componentWillMount']

    methodsToLog.forEach(method => {
        if (Wrapped.prototype[method]) {
            originals[method] = Wrapped.prototype[method]
        }

        Wrapped.prototype[method] = (...args) => {
            
            let original = originals[method]

            console.groupCollapsed(`${Wrapped.displayName} called ${method}`)

            console.groupEnd()

            if (original) {
                original = original.bind(this)
                original(...args)
            }
        }
    })
    return class extends Component {
        render() {
            return ( 
                <LoggerContainer >
                    <H2>
                        {Wrapped.displayName} is now loggified 
                    </H2>
                    <Wrapped {...this.props}/> 
                </LoggerContainer>
            ) // return 
        } // render
    } // class
} // export