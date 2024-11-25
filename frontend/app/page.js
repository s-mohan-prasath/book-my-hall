
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
            </div>
            <div className="features-container">
        <h2 className="features-title">Features</h2>
        <div className="features">
            <div className="feature-card">
                <img src="image1.jpg" alt="Feature 1" className="feature-image"/>
                <div className="feature-content">
                    <h3>Feature Title 1</h3>
                    <p>Feature description 1</p>
                </div>
            </div>
            <div className="feature-card">
                <img src="image2.jpg" alt="Feature 2" className="feature-image"/>
                <div className="feature-content">
                    <h3>Feature Title 2</h3>
                    <p>Feature description 2</p>
                </div>
            </div>
            <div className="feature-card">
                <img src="image3.jpg" alt="Feature 3" className="feature-image"/>
                <div className="feature-content">
                    <h3>Feature Title 3</h3>
                    <p>Feature description 3</p>
                </div>
            </div>
            <div className="feature-card">
                <img src="image4.jpg" alt="Feature 4" className="feature-image"/>
                <div className="feature-content">
                    <h3>Feature Title 4</h3>
                    <p>Feature description 4</p>
                </div>
            </div>
        </div>
    </div>
        </main >
    );
}
