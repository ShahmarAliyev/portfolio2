import './Portfolio.scss';
import { featuredPortfolio } from '../../data';

export default function Portfolio() {
  // const [selected, setSelected] = useState('featured');
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   switch (selected) {
  //     case 'featured':
  //       setData(featuredPortfolio);
  //       break;
  //     default:
  //       setData(featuredPortfolio);
  //   }
  // }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>

      <div className='container'>
        {featuredPortfolio.map((d) => (
          <div key={d.id} className='item'>
            <img src={d.img} alt='' />
            <div>
              <span>
                <a href={d.visit}>Visit Website</a>
              </span>
              <span>
                <a href={d.github}>See Code</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
