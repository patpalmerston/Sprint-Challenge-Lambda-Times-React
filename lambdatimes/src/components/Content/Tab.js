import React from 'react';
import PropTypes from 'prop-types'




const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      
  const handledTabs = () => {
    if( props.selectedTab === props.tab) {
      return 'active.tab'
    } else {
      return 'tab'
    }
  }
    

  return (
    <div className={handledTabs()} onClick={props.selectTabHandler}>
      <p>{props.tab.toUpperCase()}</p>

    </div>
    

  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;
