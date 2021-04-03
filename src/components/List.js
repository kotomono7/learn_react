import React from 'react';

const List = ({ result }) => {
  const renderedList = result.map((item) => {
    return (
      <div key={item.pageid} className="ui segment">
        <h2>
          <a 
            href={"https://en.wikipedia.org?curid=" + item.pageid} 
            className="header" 
            target="_blank"
            rel="noreferrer">
              {item.title}
          </a>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
      </div>
    );
  });

  return renderedList;
}

export default List;