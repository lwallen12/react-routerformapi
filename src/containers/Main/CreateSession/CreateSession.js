import React, { Component } from 'react';
import Input from './Input/Input';
import './CreateSession.css';
import Axios from 'axios';

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
                label: 'Title',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            body: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Start Typing'
                },
                value: '',
                label: 'Body',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            id: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Id'
                },
                value: '',
                label: 'Id',
                validation: {},
                valid: true,
                touched: false
            },
            userId: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'UserId'
                },
                value: '',
                label: 'UserId',
                validation: {
                    required: true,
                    maxlength: 3
                },
                valid: false,
                touched: false
            },
        }, 
        formIsValid: false
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        this.setState( {loading: true} );
        const formData = {};
        for (let formElementIdentifier in this.state.createSessionForm) {
            formData[formElementIdentifier] = this.state.createSessionForm[formElementIdentifier].value;
        }

        //console.log(formData);

        //axiost.post
        Axios.post('https://jsonplaceholder.typicode.com/posts', formData)
            .then( response => {
                this.setState({loading: false});
                console.log(response);
                this.props.history.push('/');
            })
            .catch( error => {
                this.setState({loading: false});
            })
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.maxlength) {
            isValid = value.length <= rules.maxlength && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        //console.log(event.target.value);
        const updatedForm = {
            ...this.state.createSessionForm
        }
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);

        let formIsValid = true;
        for (let inputIdent in updatedForm) {
            formIsValid = updatedForm[inputIdent].valid && formIsValid;
            //couldn't you set it to the value, and if it is false then break?
        }

        this.setState({createSessionForm: updatedForm, formIsValid: formIsValid})
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
            <form onSubmit={this.submitHandler}> 
                {formElementsArray.map(formElement => (
                    <Input key={formElement.id}
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                           label={formElement.config.label}
                           elementType={formElement.config.elementType}
                           changed={(event) => this.inputChangeHandler(event, formElement.id)}
                           invalid={formElement.config.valid}
                           touched={formElement.config.touched} />
                    // <p key={formElement.id}>
                    // {formElement.config.elementType} + {formElement.config.elementConfig.placeholder}
                    // </p>
                ))}
              <button type="submit" disabled={!this.state.formIsValid} style={{backgroundColor: ['lightgreen']}}>SUBMIT</button>
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