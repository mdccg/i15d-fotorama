import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Photo } from './../../models/Photo'
import {
  BackButton,
  BackLink,
  BackLinkPanel,
  Container,
  Image,
  InfoPanel,
  PhotoCreationDate,
  PhotoDescription,
  PhotoPanel,
} from './styles'

type Location = {
  state: {
    photo: Photo
  }
}

const PhotoView = () => {
  const { t } = useTranslation();

  const location: Location = useLocation()
  const { photo } = location.state

  return (
    <Container>
      <PhotoPanel>
        <Image src={photo.regularUrl} alt={photo.description} />

        <InfoPanel>
          {photo.description && (
            <PhotoDescription>{photo.description}</PhotoDescription>
          )}

          <PhotoCreationDate>
            {t('photoView.creationDate', { creationDate: photo.creationDate })}
          </PhotoCreationDate>
        </InfoPanel>
      </PhotoPanel>

      <BackLinkPanel>
        <BackLink to='/'>
          <BackButton>{t('photoView.backButton')}</BackButton>
        </BackLink>
      </BackLinkPanel>
    </Container>
  )
}

export default PhotoView
