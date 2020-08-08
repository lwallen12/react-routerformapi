import React, { Component } from 'react';
import Input from './Input/Input';
import './CreateSession.css';

class CreateSession extends Component {

    state = {
        createSessionForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
                },
                value: '',
                label: 'Title'
            },
            body: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Start Typing'
                },
                value: '',
                label: 'Body'
            },
            id: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'id'
                },
                value: '',
                label: 'Id'
            }
        }
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.createSessionForm) {
            formElementsArray.push({
                id: key,
                config: this.state.createSessionForm[key]
            });
        }
        let form = (
            <form> 
                {formElementsArray.map(formElement => (
                    <Input key={formElement.id}
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                           label={formElement.config.label}
                           elementType={formElement.config.elementType} />
                    // <p key={formElement.id}>
                    // {formElement.config.elementType} + {formElement.config.elementConfig.placeholder}
                    // </p>
                ))}
            </form>
        )

        return (
            <div className='CreateSession'>
                <h4>Create Session</h4>
                {form}
            </div>
        );
    }
}


//{/* <Input elementType="..." elementConfig="..." value="Bill" label="Name" /> */}
export default CreateSession;