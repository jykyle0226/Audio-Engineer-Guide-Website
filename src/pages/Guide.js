import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import Part1 from '../pages/PartPages/Part1'
import Part2 from '../pages/PartPages/Part2'
import Part3 from '../pages/PartPages/Part3'
import Part4 from '../pages/PartPages/Part4'
import Part5 from '../pages/PartPages/Part5'


const Guide = (props) => {
  return(
    <div>
      <div className="App">
        <h1>Guides</h1>
      </div>

      <div className="guides">
        <table className='table'>
          <tr className='tr'>
          <Link to="/guide/part1">
            <td id="td1">Part 1</td>
            <td id='td2'>What do we do as Audio Engineers</td>
          </Link>
          </tr>

          <tr>
          <Link to="/guide/part2">
          <td id="td1">Part 2</td>
          <td id='td2'>Mixer</td>
          </Link>
          </tr>

          <tr>
          <Link to="/guide/part3">
          <td id="td1">Part 3</td>
          <td id='td2'>Sound blending in Worship</td>
          </Link>
          </tr>

          <tr>
          <Link to="/guide/part4">
          <td id="td1">Part 4</td>
          <td id='td2'>Background Music</td>
          </Link>
          </tr>

          <tr>
          <Link to="/guide/part5">
          <td id="td1">Part 5</td>
          <td id='td2'>Advanced Engineering you can do...</td>
          </Link>
          </tr>

        </table>

        <Route exact path="/guide/part1">
        <Part1/>
      </Route>
      
      <Route exact path="/guide/part2">
        <Part2/>
      </Route>

      <Route exact path="/guide/part3">
        <Part3/>
      </Route>

      <Route exact path="/guide/part4">
        <Part4/>
      </Route>

      <Route exact path="/guide/part5">
        <Part5/>
      </Route>

      </div>

    </div>



  );
};

export default Guide;