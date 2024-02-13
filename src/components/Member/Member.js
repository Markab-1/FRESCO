import { VscDebugBreakpointData } from "react-icons/vsc";
import { useMediaQuery } from 'react-responsive'

import s from './Member.module.css';

const Member = ({ name, fname, institute }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'  })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1399px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 1400px)' })

  return (
    <div>
    {isMobile && <div className={s.boxMobile}>  
    <div className={s.pointBox}><VscDebugBreakpointData style={{color: "gray"}}/></div>
    <div className={s.itemMobile}>
    <p className={s.name}>{name} {fname} </p>
    <p className={s.itemInstMobile}>{institute}</p>
    </div>
    </div>}
    {(isTablet || isDesktop) && <div className={s.box}>
    <VscDebugBreakpointData style={{color: "gray"}}/>
    <p className={s.item}>{name}</p>
    <p className={s.item}>{fname}, </p>
    <p className={s.itemInst}>{institute}</p>
    </div>}
    </div>
    );
}

export default Member;