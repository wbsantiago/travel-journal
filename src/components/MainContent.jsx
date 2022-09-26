import locationIcon from '../assets/location-icon.svg'
import './mainContent.css'

export default function MainContent(props) {
    return (
        <div className="main--container">
            <div 
                className="main--card__image"
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                  }}
            ></div>
            <div className="main--content">
                <span className="main--location__icon" ><img src={locationIcon} /></span>
                <span className="main--location">{props.location}</span>
                <a href="#" target="_blank" >View on Google Maps</a>
                <h2>{props.title}</h2>
                <span className='content--dates'>{props.startDate}</span> - <span className='content--dates'>{props.endDate}</span>
                <p className="main--description">{props.description}</p>
            </div>
        </div>
    )
}

// id: 1,
//         title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://source.unsplash.com/WLxQvbMyfas"