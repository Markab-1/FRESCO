import Section from 'components/Section/Section';
import Title from 'components/Title/Title';

import s from './HomeDescription.module.css';

function HomeDescription({children}) {
      
  return ( 
    <Section>
      <Title title="Welcome to the JWST FRESCO Survey"/>
        <div className={s.content}>
            <p className={s.par}>
            FRESCO stands for the "First Reionization Epoch Spectroscopically Complete Observations" - 
            a JWST cycle 1 program of about 54 hours to obtain deep NIRCam/grism spectra over the two GOODS 
            legacy survey fields.
            </p> 
            <p className={s.par}>
            To ensure these legacy data are fully exploited, we will release high-level 
            science data products to the community as soon as they are available, which will be announced on 
            this webpage <a href="https://mast.stsci.edu/portal/Mashup/Clients/Mast/Portal.html" target="_blank" rel="noreferrer noopener"> archive</a>.
            </p> 
            <p>
            The observations were taken Nov 2022 and Feb 2023. The full raw data from our program is public 
            immediately and can be downloaded from the STScI MAST <a href="https://arxiv.org/abs/2304.02026" target="_blank" rel="noreferrer noopener">Oesch et al. (2023)</a>
            </p>
        </div>
    </Section>
  ) ;
}

export default HomeDescription;
