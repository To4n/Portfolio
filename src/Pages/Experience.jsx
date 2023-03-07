import React from 'react';
import Constants from '../Constants';

function Experience(props)  {
    const options = [...Constants.works.company];
    const data = [...Constants.works.data];
    
    const [filteredData, setFilteredData] = React.useState(data[0].information);
    const [activeItem, setActive] = React.useState(options[0]);
  
    const onActiveHandle = (name) => {
      setActive(name);
      setFilteredData(data.find((item) => item.company === name).information);
    };

    const renderFitler = () => (
        <div
          className='option-wrapper'
          data-aos='fade-up'
          data-aos-delay='150'
          data-aos-once='true'
          data-aos-duration='500'>
          {options &&
            options.map((option, index) => (
              <div
                className={`option-item ${
                  activeItem === option ? 'active-item' : ''
                }`}
                key={index}
                onClick={() => onActiveHandle(option)}>
                {index + 1}. {option}
              </div>
            ))}
        </div>
      );
      const renderData = () => (
        <div
          className='content-wrapper'
          data-aos='fade-up'
          data-aos-delay='150'
          data-aos-once='true'
          data-aos-duration='800'>
          <div className='title-company'>
            <span className='title'>{filteredData.title}</span>
            <span className='highlight-text ml-2'> @ {activeItem}</span>
          </div>
          <div className='location-time'>
            <span>{filteredData.location}</span>
            <span className='float-right timeline'>{filteredData.time}</span>
          </div>
          <div className='description mt-5'>
            {filteredData.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      );
    
      return (
        <>
          {renderFitler()}
          {renderData()}
        </>
      );
}
export default Experience;