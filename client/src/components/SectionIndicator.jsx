import { useLocation } from 'react-router-dom';
import ButtonPrimary from './Buttons/ButtonPrimary';
import { useNavigateHelper } from '../utils/hooks/useNavigateHelper';
import { getSectionName } from '../utils/functions/getSectionName';
import { HOME, OFFERS } from '../routes/constPath';
const SectionIndicator = () => {

  const { navigateToPath } = useNavigateHelper();
  const location = useLocation();

  const sectionName = getSectionName(location);


  return (
    <div className="w-full sm:hidden flex justify-between text-sm font-medium pb-4">
      <p className='font-medium'>{sectionName}</p>
      {
        sectionName === 'Menú' ?
          <ButtonPrimary textChildren={'Recomendados'} className={"!text-sm !py-1 !px-3"} onClick={() => navigateToPath(OFFERS)} /> :
          <ButtonPrimary textChildren={'Menú'} className={"!text-sm !py-1 !px-3"} onClick={() => navigateToPath(HOME)} />
      }
    </div>
  );
}

export default SectionIndicator;
