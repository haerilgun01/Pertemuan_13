import React, { useState } from 'react';
import Button from '../ui/Button';
import styled from 'styled-components';

const AddMovie = (props) => {

    // props yang datanya berasal dari main
    const { movies, setMovies } = props

    // state yang menghandle proses inputan
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [link, setLink] = useState("")
    const [genre, setgenre] = useState("")

    // arrow function menghandle inputan title
    const handleTitle = (e) => {setTitle(e.target.value)}

    // arrow function menghandle  inputan Link
    const handleLink = (e) => {setLink(e.target.value)}

    // arrow function menghandle inputan date
    const handleDate = (e) => {setDate(e.target.value)}

    //
    const handlegenre = (e) => {setgenre(e.target.value)}


    // arrow function menghandle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        if(title === "" && date === "") {alert("Title, Link, Date Dan Genre kosong")}

        if (title === "")
        {
           alert("Isi Title Terlebih Dahulu")
        } 

        else if (link === "")
        {
            alert("Isi Link Terlebih Dahulu")
        }
        
        else if (date === "")
        {
           alert("Isi Date Terlebih Dahulu")
        } 

        else if (genre === "")
        {
            alert("Pilih Genre Terlebih Dahulu ")
        }
         
         else {
            const movie = {
                id: 4,
                title: title, 
                genre: genre,
                date: date,
                image: link
            } 

            setMovies([...movies, movie])
            alert("Berhasil Menambahkan Movie Baru")
        }
    }

    return (
        <AddMovieStyle>
        <div className="container">
        <form className="addmovie" onSubmit={handleSubmit}>
            <h1 className="addmovie">Add Movie</h1>
        <input placeholder='Isi Title Disini' className="addmovie__input" id='title' type='text' value={title} onChange={handleTitle} />

        <input placeholder='Isi Link Disini' className="addmovie__input" id='link' type='text' value={link} onChange={handleLink} />
        
        <select className="addmovie__input" id='genre' value={genre} onChange={handlegenre} >
        <option>Genre</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Animation">Animation</option>
        <option value="Biography">Biography</option>
        <option value="Crime">Crime</option>
        <option value="Family">Family</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Sport">Sport</option>
        <option value="War">War</option>
        <option value="Musical">Musical</option>
        </select>

        <input className="addmovie__input" id='date' type='date' value={date} onChange={handleDate} />

        <Button variant="primary">Simpan</Button>
        </form>
     </div>
        </AddMovieStyle>
    );
}

const AddMovieStyle = styled.div`
    .container {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .addmovie {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        background:  radial-gradient(circle, rgba(43,43,214,0.7517401392111369) 0%, rgba(165,165,171,1) 0%, rgba(129,123,133,1) 60%);
        border-radius: 15px;
        color: white;
    }

    .addmovie__title {
        margin-top: 1rem;
        text-align: center;
        font-size: 1.6rem;
        color: white;
    }

    .addmovie__input {
        display: inline-block;
        box-sizing: border-box;
        border-radius: 10px;
        border-style: none;
        padding: 10px;
        margin: 1rem;
        width: 250px;
        height: 40px;
    }

    @media (min-width: 768px) {
        .addmovie {
            margin: 8px;
            max-width: 330px;
            height: auto;
        }
        .addmovie__input {
            width: 260px;
        }
    }
`

export default AddMovie;
