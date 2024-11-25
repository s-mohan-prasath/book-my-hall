"use client"
import Image from "next/image";
import './styles/home.css';
export default function Home() {
    return (
        <main>
            <div>
                <Image className="img"
                    src="/images/bg.jpg"
                    alt="Sample Image"
                    width={612}
                    height={335}
                    layout="responsive"
                    style={{ maxWidth: '100%', maxHeight: '80.2vh' }}
                />
                <div className="hero">" Lets Make Your Next Event <span className="hero-span">Extraordinary!</span> "</div>
                {/* <div className="hero">"Seamless Venue Booking for <span className="hero-span">Unforgettable Events!</span> "</div> */}
            </div>
            <div class="features-container">
                <h2 class="features-title">Our Key Features</h2>
                <p>Explore the key features that make our service stand out. From advance bookings to hassle-free venue management and a comprehensive event calendar, we've got you covered.</p>
                <div class="features">
                    <div class="feature-card">
                        <img src="images/booking.jpeg" alt="Feature 1" class="feature-image" />
                        <div class="feature-content">
                            <h3>Advance Booking</h3>
                            <p>Secure your preferred venue well in advance with our simple and efficient booking system. Avoid last-minute hassles and ensure everything is set for your special occasion.</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <img src="images/event.jpeg" alt="Feature 2" class="feature-image" />
                        <div class="feature-content">
                            <h3>Hassle Free Venue Management</h3>
                            <p>Our platform provides seamless venue management, allowing you to coordinate with ease. Manage bookings, view availability, and handle all details effortlessly.</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <img src="images/ed.jpeg" alt="Feature 3" class="feature-image" />
                        <div class="feature-content">
                            <h3>Event Calendar</h3>
                            <p>Keep track of all your events with our comprehensive event calendar. View upcoming events, important dates, and manage your schedule effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}