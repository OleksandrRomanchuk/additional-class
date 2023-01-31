import PropTypes from 'prop-types';

//========== components ==========
import { Container } from 'components/Container/Container';

//========== styles ==========
import {
	List,
	Item,
	Info,
	InfoSpan,
	JobInfo,
	BtnList,
	BtnItem,
	Btn,
} from './UsersList.styled';

export function UsersList({ data, deleteUser, hasJobToggle, onShowBtnClick }) {
	return (
		<Container>
			<List>
				{data.map(({ id, email, name, hasJob, avatar }) => (
					<Item key={id}>
						<Info>
							Name: <InfoSpan>{name}</InfoSpan>
						</Info>
						<Info>
							Email: <InfoSpan>{email}</InfoSpan>
						</Info>
						<Info>
							Has job:{' '}
							<JobInfo employed={hasJob}>
								{hasJob ? 'employed' : 'not employed'}
							</JobInfo>
						</Info>
						<BtnList>
							<BtnItem>
								<Btn onClick={() => deleteUser(id)} type="button">
									Delete
								</Btn>
							</BtnItem>
							<BtnItem>
								<Btn onClick={() => hasJobToggle(id)} type="button">
									Change job status
								</Btn>
							</BtnItem>
							<BtnItem>
								<Btn
									onClick={() => onShowBtnClick({ src: avatar, alt: name })}
									type="button"
								>
									Show avatar
								</Btn>
							</BtnItem>
						</BtnList>
					</Item>
				))}
			</List>
		</Container>
	);
}

UsersList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			hasJob: PropTypes.bool.isRequired,
			avatar: PropTypes.string.isRequired,
		})
	),
	deleteUser: PropTypes.func.isRequired,
	hasJobToggle: PropTypes.func.isRequired,
	onShowBtnClick: PropTypes.func.isRequired,
};
