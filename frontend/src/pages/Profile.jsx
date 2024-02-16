import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../service/user/userApi';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  // Fetch the user profile on component mount
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  // Set the first and last name from the user object
  useEffect(() => {
    if (user) {
      const { firstName: userFirstName, lastName: userLastName } = user.body;
      setFirstName(userFirstName);
      setLastName(userLastName);
    }
  }, [user]);

  // Update the user profile
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ firstName, lastName }));
    setIsEditing(false);
  };

  return user ? (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          {`${firstName} ${lastName}`}!
        </h1>
        {isEditing ? (
          <form>
            <div className='edit-input'>
              <input
                type='text'
                id='firstName'
                name='firstName'
                placeholder={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type='text'
                id='lastName'
                name='lastName'
                placeholder={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className='edit-button-wrapper'>
              <button
                className='edit-button'
                type='submit'
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className='edit-button'
                type='submit'
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button className='edit-button' onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className='sr-only'>Accounts</h2>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
          <p className='account-amount'>$2,082.79</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
          <p className='account-amount'>$10,928.42</p>
          <p className='account-amount-description'>Available Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
      <section className='account'>
        <div className='account-content-wrapper'>
          <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
          <p className='account-amount'>$184.30</p>
          <p className='account-amount-description'>Current Balance</p>
        </div>
        <div className='account-content-wrapper cta'>
          <button className='transaction-button'>View transactions</button>
        </div>
      </section>
    </main>
  ) : (
    <main className='main bg-dark'>
      <h1>Loading...</h1>
    </main>
  );
};

export default Profile;
