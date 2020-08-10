import React from "react";
import { observer } from "mobx-react";

//Styles
import { UserProfileWrapper, HeadeWrapper } from "./styles";

//Icons
import { RiAccountBoxLine } from "react-icons/ri";

//Stores
import authStore from "../../stores/authStore";

const UserProfile = () => {
  return (
    <UserProfileWrapper>
      <HeadeWrapper>
        <h4>Hello, {authStore.user.username}</h4>
      </HeadeWrapper>
      <RiAccountBoxLine size="3rem" />
    </UserProfileWrapper>
  );
};

export default observer(UserProfile);
