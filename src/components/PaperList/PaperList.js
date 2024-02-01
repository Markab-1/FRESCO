import PaperInfo  from 'components/PaperInfo/PaperInfo';
import s from './PaperList.module.css';


const PaperList = ({list}) => {
  return <ul className={s.list}>
          {list.map(item  => 
           (<li key={item.id}>
            <PaperInfo authors={item.authors} title={item.title} link={item.link}/>
            </li>
            ))}           
         </ul>;
}

export default PaperList;