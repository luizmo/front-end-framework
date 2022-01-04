/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from 'components/user';
import Loading from 'components/loading';
import Album from 'core/types/album';
import Photo from 'core/types/photo';
import { useParams } from 'shared/components';
import { getPhotosByAlbumId } from 'core/services/photos';
import { CloseButton, Container, Grid, PageTitle, Popup, PopupContent } from './styles';
import { getAlbumById } from 'core/services/albums';
import Breadcrumb from 'components/breadcrumb';
import { ALBUMS, HOME } from 'core/routes/constants';

const AlbumDetail: React.FC = () => {
  const { albumId } = useParams<{
    albumId: string
  }>();

  const [photos, setPhotos] = useState<Photo[]>();
  const [album, setAlbum] = useState<Album>();
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);
  const [show, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      const remotePost = await getPhotosByAlbumId(albumId);
      remotePost && setPhotos(remotePost);
      const remoteAlbum = await getAlbumById(albumId);
      remoteAlbum && setAlbum(remoteAlbum);
    }
    fetchPost();
  }, [albumId])

  const openPopup = (position: number) => {
    setSelectedPhoto(position);
    setShowPopup(true);
  }

  const closePopup = () => {
    setSelectedPhoto(0);
    setShowPopup(false);
  }

  const prevPhoto = () => {
    if(selectedPhoto === 0){
      closePopup();
    }
    setSelectedPhoto(selectedPhoto - 1);
  }

  const nextPhoto = () => {
    setSelectedPhoto(selectedPhoto + 1);
  }

  if(!photos){
    return <Loading/>
  }

  return(
    <>
      <Container>
        <Breadcrumb
          crumbs={[
            <Link to={`${HOME}`}>Home</Link>,
            <Link to={`${ALBUMS}`}>Albuns</Link>,
            <span>{album?.title}</span>
          ]}
        />
        <PageTitle>{album?.title}</PageTitle>
        {album && <UserInfo userId={`${album?.userId}`}/>}
        <Grid>
          {photos?.map((photo: Photo, key: number) => (
            <button onClick={() => openPopup(key)} key={key}>
              <img src={photo.thumbnailUrl} key={key} alt={photo?.title}/>
            </button>
          ))}
        </Grid>
      </Container>
      { show && (
        <Popup>
          <CloseButton onClick={closePopup} title="Fechar">
            &#x2715;
          </CloseButton>
          {selectedPhoto > 0 && (
            <button onClick={prevPhoto} title="Anterior">&larr;</button>
          )}
          {photos && ( 
            <PopupContent>
              <img src={photos[selectedPhoto]?.url} alt={photos[selectedPhoto]?.title}/>
              <p>{photos[selectedPhoto]?.title}</p>
            </PopupContent>
          )}
          {selectedPhoto < photos?.length - 1 && (
            <button onClick={nextPhoto} title="Próxima">&rarr;</button>
          )}
        </Popup>
      )}
    </>
  );
}

export default AlbumDetail;