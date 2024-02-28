import React, { useCallback, useState } from 'react';
import NewsList from './NewsList';

const News = () => {
  const [category, setCategory] = useState('all');
  const onselect = useCallback(
  (e,category) => {
    setCategory(category);
    e.preventDefault();
  },[]
); 
    return (
        <section>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a onClick={(e) => onselect(e,'all')} className= {category == 'all' ? 'nav-link active' : 'nav-link'} aria-current="page" href="#">
              전체보기
            </a>
          </li>
          <li className="nav-item">
            <a onClick={(e) => onselect(e,'business')} className= {category == 'all' ? 'nav-link active' : 'nav-link'} href="#">
              비즈니스
            </a>
          </li>
          <li className="nav-item">
            <a onClick={(e) => onselect(e,'entertainment')} className= {category == 'all' ? 'nav-link active' : 'nav-link'} href="#">
              엔터테인먼트
            </a>
          </li>
        </ul>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
                <NewsList category={category} />
              
              </div>
            </div>
          </div>
      </section>
      
    );
};

export default News;