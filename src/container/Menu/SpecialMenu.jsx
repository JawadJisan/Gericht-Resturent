import React from 'react';
import images from '../../constants/images';
import data from '../../constants/data';
import './SpecialMenu.css';
import { MenuItem, SubHeading } from '../../components';


const SpecialMenu = () => {


  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className=' app__specialMenu-title'>
        <SubHeading title="Menu that fits you palatte" />
        <h1 className='headtext__comorant'>Today’s Special</h1>
      </div>
      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex-center'>
          <p className='app__speicalMenu_menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu_menu_items'>
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} price={wine.price} tags={wine.tags} title={wine.title} wine={wine} />
            ))}
          </div>
        </div>
        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="Menu" />
        </div>
        <div className='app__specialMenu-menu_cocktails flex-center'>
          <p className='app__speicalMenu_menu_heading'>Wine & Beer</p>
          <div className='app__specialMenu_menu_items'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} price={cocktail.price} tags={cocktail.tags} title={cocktail.title} />
            ))}
          </div>
        </div>

      </div>
      <div style={{ marginTop: '15px' }}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </div>
  );

};

export default SpecialMenu;