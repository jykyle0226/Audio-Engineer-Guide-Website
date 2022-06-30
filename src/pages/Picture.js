import React from 'react'
import pictureArr from '../PictureData'
import PictureComp from '../components/PictureComp'

const Picture = (props) => {
  const data = pictureArr.map((ele, index) => {
    return <PictureComp {...ele} key={index} />
  })

  return(
      <div>
        <section className='picture-section'>
          {data}
        </section>
      </div>

  );
};

export default Picture;