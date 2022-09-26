import locationIcon from '../assets/world.svg'

export default function MainContent(props) {
    return (
        <div className="main--container">
            <img src={props.imageUrl} alt="image of place" />
            <div>
                <span><img src={locationIcon} /></span>
                <span>{props.location}</span>
                <a href="#" target="_blank" >View on Google Maps</a>
                <h2>{props.title}</h2>
                <span>{props.startDate}</span>
                <span>{props.endDate}</span>
                <p>{props.description}</p>
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