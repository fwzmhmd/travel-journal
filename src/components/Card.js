import '../styles/_card.scss';
import pin from '../imgs/location-pin.png';

export default function Card({
  location,
  title,
  googleMapsUrl: maps,
  startDate: start,
  endDate: end,
  description: desc,
  imageUrl: img,
}) {
  return (
    <div className='card'>
      <img src={img} alt='' className='location-img' />
      <div className='info'>
        <div className='location'>
          <div className='location-title'>
            <img src={pin} alt='' /> {location}
          </div>
          <div className='location-maps'>
            <a href={maps} target='_blank'>
              View on Google Maps
            </a>
          </div>
        </div>
        <div className='title'>{title}</div>
        <div className='date'>
          {start} - {end}
        </div>
        <div className='desc'>{desc}</div>
      </div>
    </div>
  );
}
