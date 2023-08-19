import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import enUs from './../../assets/img/en-us.png';
import esEs from './../../assets/img/es-es.png';
import frFr from './../../assets/img/fr-fr.png';
import itIt from './../../assets/img/it-it.png';
import ptBr from './../../assets/img/pt-br.png';
import { useOutsideAlerter, useTabChangeOrMinimize } from './../../utils/react_utils';
import { AngleDownSolidIcon, BackgroundGradient, Dropdown, DropdownItem, Flag, Language, LanguageSelectorContainer, SelectedLanguage } from './styles';

type LanguageType = {
  image: string;
  language: string;
  bcp47: string;
}

const languages: LanguageType[] = [
  { image: ptBr, language: 'Português brasileiro', bcp47: 'pt-BR' },
  { image: enUs, language: 'English',              bcp47: 'en-US' },
  { image: esEs, language: 'Español',              bcp47: 'es-ES' },
  { image: frFr, language: 'Français',             bcp47: 'fr-FR' },
  { image: itIt, language: 'Italiano',             bcp47: 'it-IT' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const ref = useRef<any>();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType | undefined>(
    languages.find(({ bcp47 }) => bcp47 === i18n.language) ||
    languages.find(({ bcp47 }) => bcp47 === 'pt-BR')
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdownItemClick = (language: LanguageType) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.bcp47);
    setIsOpen(false);
  }

  useOutsideAlerter(() => {
    setIsOpen(false);
  }, ref);
  
  useTabChangeOrMinimize(() => {
    setIsOpen(false);
  });

  return (
    <>
      <BackgroundGradient />

      <div ref={ref}>
        {selectedLanguage && (
          <LanguageSelectorContainer onClick={() => setIsOpen(!isOpen)}>
            <Flag src={selectedLanguage.image} />
            <SelectedLanguage>{selectedLanguage.language}</SelectedLanguage>

            <AngleDownSolidIcon style={{ transform: isOpen ? 'rotate(180deg)' : undefined }} />
          </LanguageSelectorContainer>
        )}

        {isOpen && (
          <Dropdown>
            {languages.map((language) => (
              <DropdownItem key={language.bcp47} onClick={() => handleDropdownItemClick(language)}>
                <Flag src={language.image} />
                <Language>{language.language}</Language>
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </div>
    </>
  );
}

export default LanguageSelector;