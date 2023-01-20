import PropTypes from 'prop-types';

export function UsersList({ data, deleteUser, hasJobToggle, onShowBtnClick }) {
    return (<ul>
        {data.map(({ id, email, name , hasJob, avatar}) => (<li key={id}>
                <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Has job: { hasJob.toString()}</p>
            <button onClick={() => deleteUser(id)} type="button">Delete</button>
            <button onClick={() => hasJobToggle(id) } type="button">Change job status</button>
            <button onClick={() => onShowBtnClick({src: avatar, alt: name})} type="button">Show avatar</button>
        </li>))}
    </ul>)
};

UsersList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        hasJob: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
             
    })),

    deleteUser: PropTypes.func.isRequired,
    hasJobToggle: PropTypes.func.isRequired,
    onShowBtnClick: PropTypes.func.isRequired,
};