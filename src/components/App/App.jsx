//========== components ==========
import { Component } from 'react';
import { UsersList } from '../UsersList/UsersList';
import { Button } from '../Button/Button';
import { Form } from '../Form/Form';
import { Modal } from '../Modal/Modal';

//========== data ==========
import { data } from 'data/users';

//========== styles =========
import { Main } from './App.styled';

class App extends Component {
	state = {
		users: data,
		isFormOpen: false,
		currentAvatar: null,
	};

	onDeleteBtnClick = id => {
		this.setState(({ users }) => ({
			users: users.filter(user => user.id !== id),
		}));
	};

	changeJobStatus = id => {
		this.setState(({ users }) => ({
			users: users.map(user => {
				if (user.id === id) {
					return { ...user, hasJob: !user.hasJob };
				} else {
					return user;
				}
			}),
		}));
	};

	addNewUser = user => {
		this.setState(({ users }) => ({ users: [...users, user] }));
	};

	onOpenForm = () => {
		this.setState({ isFormOpen: true });
	};

	onCloseForm = () => {
		this.setState({ isFormOpen: false });
	};

	showAvatar = avatarInfo => {
		this.setState({ currentAvatar: avatarInfo });
	};

	closeAvatarModal = () => {
		this.setState({ currentAvatar: null });
	};

	render() {
		const { users, isFormOpen, currentAvatar } = this.state;

		return (
			<div>
				<Main>
					{currentAvatar && (
						<Modal avatarInfo={currentAvatar} closeModal={this.closeAvatarModal} />
					)}
					<UsersList
						data={users}
						deleteUser={this.onDeleteBtnClick}
						hasJobToggle={this.changeJobStatus}
						onShowBtnClick={this.showAvatar}
					/>
					{!isFormOpen ? (
						<Button text="Add user" clickHandler={this.onOpenForm} />
					) : (
						<Form closeForm={this.onCloseForm} formSubmit={this.addNewUser} />
					)}
				</Main>
			</div>
		);
	}
}

export { App };
