import React, { useEffect, useState } from 'react'; 
import { getUser } from 'core/services/users';
import User from 'core/types/user';
import { Container, Info } from './styles';

interface IUser{
  userId: string
}
const UserInfo: React.FC<IUser> = ({userId}) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await getUser(userId);
      setUser(user)
    }
    fetchUserData();
  },[userId])

  return(
    <Container>
      <Info>Autor: {user?.name} - {user?.username}</Info>
      <Info>E-mail: {user?.email}</Info>
    </Container>
  );
}

export default UserInfo;