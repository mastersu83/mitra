import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          fontSize: 30,
        }}
      >
        <Link to="/mitra">
          <span>Назад</span>
        </Link>
      </div>
      <p className="about">
        Я начинающий React-разработчик. Много самостоятельной практики, интернет
        магазин, todo. Могу самостоятельно сделать небольшое приложение, от
        вёрстки до полной работоспособности на react с использованием: -UI
        библиотек MUI и ANT Design, -TypeScript, -Redux, -Redux Toolkit,
        -Redux-thunk, -RTK Query, -axios, -React Router, -REST API, -React-Hook.
        Огромное желание расти и развиваться дальше. Быстро обучаюсь и всегда
        довожу начатое до конца. Ответственность и выполнение работы в срок для
        меня самое важное. Ссылка на githab
        <a href="https://github.com/mastersu83">
          https://github.com/mastersu83
        </a>
      </p>
    </Container>
  );
};

export default About;
