import Scene from '../../components/GuideComponents/Scene'
import Mixer from '../../components/GuideComponents/Mixer'
import MixerLeft from '../../components/GuideComponents/MixerLeft';
import Mid1 from '../../components/GuideComponents/Mid1';
import Mid2 from '../../components/GuideComponents/Mid2';
import Mid3 from '../../components/GuideComponents/Mid3';
import Right from '../../components/GuideComponents/Right';
const Part2 = () => {
  return(
    <div className='Part2-all'>
      <div>
        <h1> Mixer </h1>
      </div>
      <div className='Part2-div'>
        <Mixer></Mixer>
        <Scene></Scene>
        <MixerLeft></MixerLeft>
        <Mid1></Mid1>
        <Mid2></Mid2>
        <Mid3></Mid3>
        <Right></Right>
      </div>
    </div>
  );
};

export default Part2;