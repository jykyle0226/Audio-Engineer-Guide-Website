import React from "react";
import '../../Style/mixerLeft.css'

const MixerLeft = () => {
  return (
    <div className="MixerLeftdiv">
    <img 
    src="https://i.imgur.com/pEJ5V59.png?1"
    className="MixerLeft"
    alt="..."
      />
    <div id="MixerLeft">
    <h4>On your very left side, you will see 16 faders and 9 buttons on the right. On the 9 buttons, you will be able to find all the 72 channels and stereo inputs, DCA, custom A1, and A2. 
    
    When you click the button, the faders will display assigned channels.

    </h4>
    <h4>
    SEL is a select button. If you have that on, you will be able to manipulate the sound of that channel on the screen. 
    CUE button is used to listen to a certain channel. If you have this on, you will be able to listen to the channel through the headphone that is connected to the console.
    On button is very straightforward. If you have it on, the channel is on. If the on button is flashing, the channel is ON but its followed DCA is turned off. (DCA will be covered in the next session)
    </h4>
    <h4>
    The meter between On button and CUE button shows how much of a sound the channel is receiving from a source of input. 
    The fader is to control the volume of the channel. 

    </h4>
    </div>

    </div>          
    
  )
};

export default MixerLeft;
