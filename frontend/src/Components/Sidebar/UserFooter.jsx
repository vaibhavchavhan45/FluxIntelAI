import UserMenu from "../UserMenu";

function UserFooter({ user, isOpen }) {
  return <UserMenu user={user} isOpen={isOpen} position="sidebar" />;
}

export default UserFooter;