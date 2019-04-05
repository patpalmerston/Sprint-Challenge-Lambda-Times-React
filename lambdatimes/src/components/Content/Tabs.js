import React from 'react';
import PropTypes from 'prop-types'
import Tab from './Tab';



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            
            {props.tabs.map((tabs, index) => {
              console.log(props.tabs)
              return <Tab 
                        tab={tabs} 
                        selectedTab={props.selectedTab} 
                        selectTabHandler={props.selectTabHandler(tabs)} 
                        key={index}/>
            })}

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propsTypes = {
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.array
}

export default Tabs;
