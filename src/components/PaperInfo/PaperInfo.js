import { VscDebugBreakpointData } from "react-icons/vsc";

import s from './PaperInfo.module.css';

const PaperInfo = ({ authors, title, link }) => {
  return <div className={s.box}>
    <VscDebugBreakpointData style={{color: "gray"}}/>
    <div className={s.authorBox}>
    <a href={link} target="_blank" rel="noreferrer noopener" > 
     <p className={s.item}>{authors}</p>
     <p className={s.item}>{title} </p>
    </a>
    </div>
    </div>;
}

export default PaperInfo;