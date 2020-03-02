import React, { Fragment } from "react";
import Film from "../components/Film";

function FilmList({ films }) {
  const filmComponents = films.map(film => {
    return (
      <Film url={film.url} key={film.id}>
        {film.name}
      </Film>
    );
  });

  return (
    <Fragment>
      <ul>{filmComponents}</ul>
      <hr />
      <button>
        <a href="https://www.imdb.com/calendar/?region=gb">
          View more upcoming releases
        </a>
      </button>
    </Fragment>
  );
}

export default FilmList;
