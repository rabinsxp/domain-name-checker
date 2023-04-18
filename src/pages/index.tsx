import Image from 'next/image'
import { Inter } from 'next/font/google'
import DomainChecker from "../components/DomainChecker";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="hero">
      
        <h1 className="hero-title">Welcome to Domain Checker!</h1>
        <p className="hero-text">Check the availability of your desired domain name with ease.</p>
      </div>
          <DomainChecker />
       <style jsx>{`
        .hero {
          position: relative;
          height: 400px;
          width: 100%;
          margin-bottom: 40px;
        }
        .hero-title {
          font-size: 48px;
          font-family: ${inter.family};
          font-weight: 700;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .hero-text {
          font-size: 24px;
          font-family: ${inter.family};
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
}
