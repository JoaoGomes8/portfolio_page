import Image from "next/image";
import "./styles/main.scss";

export default function Home() {
  return (
    <div className="main-page">
      <h1 className="tittle-main">My Tittle</h1>

      <div className="aboutme">
        <div className="aboutme-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni ea
            ipsam eius ratione, aliquid a laborum iusto, incidunt veritatis
            neque minus adipisci tempora maxime quam saepe quas enim nostrum
            alias?
          </p>
        </div>
        <div className="aboutme-img-side">
          <div></div>
        </div>
      </div>

      <div className="skills">
        <p>Minhas skills e ferramentas</p>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb7QHioHCZrCj9TcW7hS3NYiLAsK6knnn4g&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb7QHioHCZrCj9TcW7hS3NYiLAsK6knnn4g&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb7QHioHCZrCj9TcW7hS3NYiLAsK6knnn4g&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb7QHioHCZrCj9TcW7hS3NYiLAsK6knnn4g&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb7QHioHCZrCj9TcW7hS3NYiLAsK6knnn4g&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb7QHioHCZrCj9TcW7hS3NYiLAsK6knnn4g&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb7QHioHCZrCj9TcW7hS3NYiLAsK6knnn4g&s" alt="" />
        </div>
      </div>

    </div>
  );
}
