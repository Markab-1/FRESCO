import { VscDebugBreakpointData } from "react-icons/vsc";

import s from './Member.module.css';

const Member = ({ name, fname, institute }) => {
  return <div className={s.box}>
    <VscDebugBreakpointData style={{color: "gray"}}/>
    <p className={s.item}>{name}</p>
    <p className={s.item}>{fname}, </p>
    <p className={s.itemInst}>{institute}</p>
    </div>;
}

export default Member;