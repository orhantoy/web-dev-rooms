import React from 'react';

const users = ['Student', 'Mentor', 'Admin'];
function ButtonRadio() {
  return (
    <div className="btn-group">
      {users.map((u) => (
        <>
          <button type = "button" name="user" className="button">
            {' '}
            {u}
          </button>
        </>
      ))}
    </div>
  );
}

export default ButtonRadio;
