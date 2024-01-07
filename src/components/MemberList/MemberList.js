import Member  from 'components/Member/Member';
import s from './MemberList.module.css';


const MemberList = ({list}) => {
  return <ul className={s.list}>
          {list.map(item  => 
           (<li key={item.id}>
            <Member name={item.name} fname={item.fname} institute={item.institute}/>
            </li>
            ))}           
         </ul>;
}

export default MemberList;