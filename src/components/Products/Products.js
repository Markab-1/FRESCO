import Btn from 'components/Btn/Btn';
import Section from 'components/Section/Section';
import Subsection from 'components/Subsection/Subsection';
import Title from 'components/Title/Title';

function Products({children}) {      
    return ( 
      <Section>
         <Title title="Data Access"/>  
        <Subsection>
        <p>
            Science grade, reduced images and spectra will be released here, as soon as they are available. 
            Please check back soon.
        </p>
        <p>
            The JWST raw data of our survey are public immediately, and can be accessed through the MAST archive.
        </p>
        <p>
            The imaging data have been delivered to MAST and are being processed. They will be available at this DOI:
        </p>         
        <a href="https://archive.stsci.edu/doi/resolve/resolve.html?doi=10.17909/gdyc-7g80" target="_blank" rel="noreferrer noopener"> 
          <Btn text="Mast data DOI"/>  
        </a>  
        <p>
            For more information, please contact us at: pascal.oesch[at]unige.ch
        </p>
        </Subsection>
      </Section>
    ) ;
  }
  
  export default Products;