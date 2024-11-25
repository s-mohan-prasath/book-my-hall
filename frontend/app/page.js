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
                <div className="hero">" Let’s Make Your Next Event <span className="hero-span">Extraordinary!</span> "</div>
                {/* <div className="hero">"Seamless Venue Booking for <span className="hero-span">Unforgettable Events!</span> "</div> */}
            </div>
            <div class="features-container">
                <h2 class="features-title">Features</h2>
                <div class="features">
                    <div class="feature-card">
                        <img src="image1.jpg" alt="Feature 1" class="feature-image" />
                        <div class="feature-content">
                            <h3>Feature Title 1</h3>
                            <p>Feature description 1</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <img src="image2.jpg" alt="Feature 2" class="feature-image" />
                        <div class="feature-content">
                            <h3>Feature Title 2</h3>
                            <p>Feature description 2</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <img src="image3.jpg" alt="Feature 3" class="feature-image" />
                        <div class="feature-content">
                            <h3>Feature Title 3</h3>
                            <p>Feature description 3</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <img src="image4.jpg" alt="Feature 4" class="feature-image" />
                        <div class="feature-content">
                            <h3>Feature Title 4</h3>
                            <p>Feature description 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
} 