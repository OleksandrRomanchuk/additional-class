import { Component } from 'react';
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'


class Form extends Component {
    static propTypes = {
        closeForm: PropTypes.func.isRequired,
        formSubmit: PropTypes.func.isRequired,
    }

    state = {
        name: '',
        email: '',
    }

    changeHandler = (event) => {
        const { name, value } = event.target;
        
        this.setState({ [name]: value });
    }

    submitHandler = (event) => {
        event.preventDefault();

        const newUser = {
            ...this.state, id: nanoid(5), hasJob: false
        }

        console.log(newUser);

        this.props.formSubmit(newUser);
        this.props.closeForm();

    }

    render() { 
        const { name, email } = this.state;
        const closeForm = this.props.closeForm;

        return <form onSubmit={this.submitHandler}>
            <button onClick={ () =>closeForm()} type='button'>x</button>
            <label>Name<input onChange={this.changeHandler} type="text" name='name' value={name}/></label>
            <label>Email<input onChange={this.changeHandler} type="text" name='email' value={email}/></label>
            <button type='submit'>Submit</button>
        </form>
    }
}

export { Form };