import React, { useEffect, useState } from 'react';
import { getAllAlbums } from 'core/services/albums';
import Album from 'core/types/album';
import AlbumCard from 'components/albumCard';
import { Container, Grid, ListTitle } from './styles';
import Loading from 'components/loading';
import Breadcrumb from 'components/breadcrumb';
import { Link } from 'react-router-dom';
import { HOME } from 'core/routes/constants';

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>();

  useEffect(() => {
    const fetchAlbums = async () => {
      const remoteAlbums = await getAllAlbums();
      setAlbums(remoteAlbums);
    }

    fetchAlbums();
  }, [])

  if(!albums){
    return <Loading/>
  }

  return(
    <Container>
      <Breadcrumb
        crumbs={[
          <Link to={`${HOME}`}>Home</Link>,
          <span>Albuns</span>
        ]}
      />
      <ListTitle>Albuns</ListTitle>
      <Grid>
        {albums?.map((album: Album, key:number) =>(
          <AlbumCard album={album} key={`album-${key}-${album.id}`}/>
        ) )}
      </Grid>
    </Container>
  );
}

export default Albums;