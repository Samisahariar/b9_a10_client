import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCardCraftSection from '../cardofcraftsection/SingleCardCraftSection';

const CardDetailsHome = () => {

    const subcategotydata = useLoaderData();
    console.log(subcategotydata)
    
    return (
        <div className='px-[10%] dark:bg-base-200 bg-white gap-2 grid pt-[2%]'>
            {
                subcategotydata?.map((singledatahome, idx) => <SingleCardCraftSection singledatahome={singledatahome} key={idx}></SingleCardCraftSection>)
            }
        </div>
    );
};

export default CardDetailsHome;