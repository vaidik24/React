import React from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

function UserContextProvider({ childern }) {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {childern}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  childern: PropTypes.element,
};

export default UserContextProvider;
