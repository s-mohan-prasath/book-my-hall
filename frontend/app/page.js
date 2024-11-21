
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
        </main >
    );
}
