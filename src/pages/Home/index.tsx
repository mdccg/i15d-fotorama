import { useState, useEffect, useContext } from 'react'

import { Photo } from '../../models/Photo'
import { PhotoService } from '../../service/PhotoService'
import {
  Container,
  CriteriaOptionButton,
  CriteriaOptionLabel,
  CriteriaPanel,
  CurrentPage,
  FilterInput,
  Loading,
  NavigationArea,
  NavigationButton,
  ResultsArea,
  SearchArea,
  SearchButton,
} from './styles'
import loadingGif from '../../assets/img/loading.gif'
import PhotoCard from '../../components/PhotoCard'
import { UserContext } from '../../context/UserContext'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation();

  const [loading, isLoading] = useState(false)

  const photoService = new PhotoService()

  const {
    query,
    setQuery,
    criteria,
    setCriteria,
    photos,
    setPhotos,
    page,
    setPage,
    perPage,
    setPerPage,
    totalPages,
    setTotalPages,
  } = useContext(UserContext)

  const searchPhotos = async () => {
    isLoading(true)
    setPhotos([])
    setTotalPages(0)
    const photosFound = await photoService.findPhotos(
      query,
      page,
      perPage,
      criteria
    )
    setPhotos(photosFound.photos)
    setTotalPages(photosFound.totalPages)
    isLoading(false)
  }

  useEffect(() => {
    searchPhotos()
  }, [page])

  return (
    <Container>
      <SearchArea>
        <FilterInput
          placeholder={t('home.filterInputPlaceholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <CriteriaPanel>
          <CriteriaOptionButton
            checked={criteria == 'relevant'}
            onChange={(e) =>
              setCriteria(e.target.checked ? 'relevant' : 'latest')
            }
          />
          <CriteriaOptionLabel>{t('home.mostRelevantCriteria')}</CriteriaOptionLabel>

          <CriteriaOptionButton
            checked={criteria == 'latest'}
            onChange={(e) =>
              setCriteria(e.target.checked ? 'latest' : 'relevant')
            }
          />
          <CriteriaOptionLabel>{t('home.mostRecentCriteria')}</CriteriaOptionLabel>
        </CriteriaPanel>

        <SearchButton onClick={() => searchPhotos()}>{t('home.searchButton')}</SearchButton>
      </SearchArea>

      <ResultsArea>
        {loading && <Loading src={loadingGif} alt={t('home.loadingMessage')} />}

        {photos.length > 0 &&
          photos.map((p) => <PhotoCard key={p.id} photo={p} />)}
      </ResultsArea>

      {totalPages > 1 && (
        <NavigationArea>
          {page > 1 && (
            <NavigationButton onClick={() => setPage(page - 1)}>
              &lt;
            </NavigationButton>
          )}

          <CurrentPage>
            {t('home.currentPage', { page, totalPages })}  
          </CurrentPage>

          {page < totalPages && (
            <NavigationButton onClick={() => setPage(page + 1)}>
              &gt;
            </NavigationButton>
          )}
        </NavigationArea>
      )}
    </Container>
  )
}

export default Home
