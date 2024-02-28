import React from 'react';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Home = () => {
    return (
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">코드로 전세계 뉴스 검색</h1>
            <p class="lead text-muted">JSON API를 사용하여 웹 전반의 뉴스 소스와 블로그에서 기사와 속보 헤드라인을 찾아보세요.</p>
            <p>
              <Link to ="/news" className="btn btn-primary my-2">메뉴 이동
                </Link>
            </p>
          </div>
        </section>
    );
};

export default Home;