//========== helpers ==========
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

//========== components ==========
import { Component } from 'react';

//========== styles ==========
import { AddForm, Label, Input, Btn, CloseBtn } from './Form.styled';

class Form extends Component {
	static propTypes = {
		closeForm: PropTypes.func.isRequired,
		formSubmit: PropTypes.func.isRequired,
	};

	state = {
		name: '',
		email: '',
	};

	changeHandler = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	submitHandler = event => {
		event.preventDefault();

		const newUser = {
			...this.state,
			id: nanoid(5),
			hasJob: false,
			avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
		};

		this.props.formSubmit(newUser);
		this.props.closeForm();
	};

	render() {
		const { name, email } = this.state;
		const closeForm = this.props.closeForm;

		return (
			<>
				<CloseBtn onClick={() => closeForm()} type="button">
					&#60;= back
				</CloseBtn>
				<AddForm onSubmit={this.submitHandler}>
					<Label>
						Name
						<Input
							onChange={this.changeHandler}
							type="text"
							name="name"
							value={name}
						/>
					</Label>
					<Label>
						Email
						<Input
							onChange={this.changeHandler}
							type="text"
							name="email"
							value={email}
						/>
					</Label>
					<Btn type="submit">Submit</Btn>
				</AddForm>
			</>
		);
	}
}

export { Form };
