import React, { useEffect } from 'react';

import { getTalentInfo } from './utils/API';

import PageShell from './components/PageShell';
import FilteredContent from './components/FilteredContent';

const Hololist = props => {
    const { state, dispatch } = props;
    const { page } = state;
    const loading = page.includes('loading');

    useEffect(() => {
      loading && getTalentInfo()
      .then(res => dispatch({type: 'INITIAL_DATA_LOAD', payload: res.data}))
      .catch(err => console.log(err));
    });
  

    return(
        <PageShell props={props}>
            {!loading ? (<FilteredContent props={props} />) : (<div>LOADING</div>)}
        </PageShell>
    )
}

export default Hololist;