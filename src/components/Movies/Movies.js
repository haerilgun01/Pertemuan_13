import React from "react"
import Movie from "../Movie/Movie"
import styled from "styled-components"

function Movies(props) {

    const { item, title } = props
    
  return (

     <MoviesStyle>
        <div className="container">
            <section className="movies">
                <h2 className="movies__title">{title}</h2>
                <div className="movie__container">
                    {
                     
                     item.map((data) => <Movie key={data.id} title={data.title} date={data.release_date} image={data.poster_path} id={data.id} />)            
                     }
                </div>
            </section>
        </div>
     </MoviesStyle>
  )
}

const MoviesStyle = styled.div`
    .container {
    margin: 1rem;
    }

    .movies {
        margin: 5rem 0;
        text-align: center;
    }

    .movies__title {
        margin-bottom: 1rem;
        font-size: 2.44rem;
        color: #800000;
    }

    .movie__container {
        display: flex;
        flex-direction:  column;
    }

    .movie{
        margin-bottom: 1rem;
    }

    .movie__image {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    .movie__title {
        color: #2F4F4F;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }

    .movie__date {
        color: #64748b;
    }

    @media (min-width: 768px) {
        .movie__container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .movie {
            flex-basis: 50%;
        }
    }

        .button{
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            border: 2px solid #3498db;
            color: #3498db;
            background-color: #fff;
            border-radius: 5px;
            transition: 0.3s, color 0.3s;
        }

    @media (min-width: 992px) {
        .container {
            max-width: 1200px;
            margin: 3rem auto;
        }

        .movie {
            flex-basis: 25%;
            padding: 1rem;
        }
    }
`
export default Movies
