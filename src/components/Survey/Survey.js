import Title from 'components/Title/Title';
import Section from 'components/Section/Section';
import s from './Survey.module.css';

function Survey({children}) {
      
  return ( 
    <Section>
        <Title title="Survey"/>
<p className={s.abs}>ABSTRACT</p>
<p className={s.abs}>FRESCO: The First Reionization Epoch Spectroscopically Complete Observations </p>
<p className={s.content}>
Revealing the dramatic build-up of galaxies during the first 1 billion years to the peak of star formation at z~2-3 
is one of Hubble's greatest achievements. Yet huge gaps in our understanding remain since our galaxy samples are incomplete
 due to the uncertainties of photometric selection. The highly-incomplete spectroscopic information at z&#62;6 means that we 
 lack physical understanding of the processes driving early galaxy assembly. To date, less than 1% of known galaxies in the 
 epoch of reionization at z&#62;6 have confirmed redshifts, and basic quantities such as mass-to-light ratios can be uncertain by 
 factors of 5-10 -- due to the unknown contributions of strong emission lines in the photometry used to derive stellar masses. 
 As a result, we still only have a broad, phenomenological picture of early galaxy formation and growth. FRESCO exploits 
 JWST's remarkable new spectroscopic capabilities to remedy this situation in a maximally-efficient way. By obtaining 2 
 hr deep NIRCam/grism observations with just the F444W filter, FRESCO will yield redshifts over a wide redshift range for a 
 complete sample of ~330 z~7-9 galaxies, as well as ~1200 z~5-6.5 galaxies, in the Deep CANDELS areas of the GOODS-S and 
 GOODS-N fields. FRESCO will yield an unprecedented Legacy archive, for the first time, of spectroscopic redshifts and 
 emission line measurements from [OIII]+H-beta, H-alpha, and even Pa-alpha at low redshifts. FRESCO's grism observations 
 provide the total line fluxes for estimating galaxy stellar mass and critically-needed slit-loss calibrations of NIRSpec/MSA 
 spectra. We are not requesting proprietary time to ensure that FRESCO will be a key Legacy dataset for the community. 
 </p>
    </Section>
  ) ;
}

export default Survey;
