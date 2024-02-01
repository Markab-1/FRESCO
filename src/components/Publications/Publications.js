import Section from 'components/Section/Section';
import Subsection from 'components/Subsection/Subsection';
import Title from 'components/Title/Title';
import PaperList from 'components/PaperList/PaperList';

import papers from '../../papers-list.json'



function Publications({children}) {
      
  return ( 
    <Section>
        <Title title="FRESCO publications"/> 
        <Subsection>
        <PaperList list={papers}/>
        </Subsection>   
    </Section>
  ) ;
}

export default Publications;