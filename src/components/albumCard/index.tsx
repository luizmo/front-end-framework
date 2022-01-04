import React from 'react';
import Album from 'core/types/album';
import { Link } from 'react-router-dom';
import { Container, Tag , AlbumTitle} from './styles';
import UserInfo from 'components/user';

interface IAlbum{
  album: Album
}

const AlbumCard: React.FC<IAlbum> = ({album}) => {
  return(
    <Link to={`/album/${album.id}`}>
      <Container>
        <Tag>Album</Tag>
        <AlbumTitle>{album.title}</AlbumTitle>
        <UserInfo userId={`${album.userId}`}/>
      </Container>
    </Link>
  );
}

export default AlbumCard;