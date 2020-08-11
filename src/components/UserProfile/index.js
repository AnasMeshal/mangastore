import React from "react";
import { observer } from "mobx-react";

//Styles
import { UserProfileWrapper, HeadeWrapper, IconWrapper } from "./styles";

//Icons
import { RiAccountBoxLine, RiLogoutBoxRLine } from "react-icons/ri";

//Stores
import authStore from "../../stores/authStore";

const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <HeadeWrapper>
        <h4>Hello, {authStore.user.username}</h4>
      </HeadeWrapper>
      <IconWrapper>
        <RiAccountBoxLine
          style={{ marginTop: "auto", marginBottom: "auto" }}
          size="3em"
        />
        <RiLogoutBoxRLine
          style={{ marginTop: "auto", marginBottom: "auto" }}
          onClick={authStore.signout}
          size="2em"
        />
      </IconWrapper>
    </UserProfileWrapper>
  );
};

export default observer(UserProfile);
