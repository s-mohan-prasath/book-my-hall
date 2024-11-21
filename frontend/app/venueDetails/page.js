
import Link from 'next/link';
import '../styles/venueDetails.css';
export default function VenueDetails() {
    return (
        <div>
            <div className="img-container">
                <div className="box large"><img src='images/large.jpg' alt='Venue Images' /></div>
                <div className="box"><img src='images/img1.jpg' alt='Venue Images' /></div>
                <div className="box"><img src='images/img2.jpg' alt='Venue Images' /></div>
                <div className="box"><img src='images/img3.jpg' alt='Venue Images' /></div>
                <div className="box seemore"><img src='images/img4.jpg' alt='Venue Images' /> <Link href={" "}>See More</Link> </div>
            </div>
            <div className='details'>

            </div>

        </div>
    );
}