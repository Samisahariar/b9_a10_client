import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCardCraftSection from '../cardofcraftsection/SingleCardCraftSection';

const CardDetailsHome = () => {

    const subcategotydata = useLoaderData();
    console.log(subcategotydata)
    
    return (
        <div>
            {
                subcategotydata?.map((singledatahome, idx) => <SingleCardCraftSection singledatahome={singledatahome} key={idx}></SingleCardCraftSection>)
            }
        </div>
    );
};

export default CardDetailsHome;