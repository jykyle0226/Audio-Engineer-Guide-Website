import React from "react";
import '../../Style/mid1.css'

const Mid1 = () => {
  return (
    <div className="Mid1">
    <img 
    src="https://i.imgur.com/1Z64RHk.png?1"
    className="MixerLeft"
    alt="..."
      />
    <div id="MixerLeft">
      <h4>
    On the middle side of CL5, there are also 9 buttons. The buttons feature different things but they are mainly used to control DCA and some output volume. 
      </h4>
      <h4>
      DCA is useful in situations where you have a collection of similar channels such as Drum, Guitars, and Keyboards and you want to be able to quickly adjust a certain group of inputs’ overall level. 
      </h4>
      <h4>
      We have set up drums, keys, guitars, STEMs, VoxMSTR and BandMstr. As it is written in the previous section, if these DCAs are turned off, even if any channel that is in these DCAs is turned on, the channel won’t be able to make a sound and its ON button will be flashing. 
      </h4>

      <h4>
      If you click the SEL button on a DCA group, the faders on your left will display all the channels that are in the DCA group you have selected. 
      VoxMstr and BandMstr overpower every DCAs on their left side. 
      </h4>
    </div>

    </div>          
    
  )
};

export default Mid1;
