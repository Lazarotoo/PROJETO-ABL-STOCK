import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import sacolaIcone from './assets/icone-sacola.png';

import { BiSearchAlt2 } from "react-icons/bi";

import { IoMenu } from "react-icons/io5";

import "./NavBar.css";

import React from 'react'

const NavBar = () => {

    const [search, setSearch] = useState("");
    const [menuAberto, setMenuAberto] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`, { replace: true});

        setSearch("");
    };

  return (
    <nav id="navbar">
        <IoMenu 
          className="menu-icon" 
          onClick={() => setMenuAberto(!menuAberto)} 
        />

        <h1>ABL STOCK</h1>

            <Link to="/">
            <img 
            src={sacolaIcone}
            alt="Sacola de Compras"
            />
            </Link>

            <form onSubmit={handleSubmit}>

                <input
                type="text"
                placeholder="Busque um produto"
                onChange={(e) => setSearch(e.target.value)}
                
                value={search}
                />

                <button type="submit">
                    <BiSearchAlt2 />
                </button>

                <div className={`menu-lateral ${menuAberto ? "aberto" : ""}`}>
                    <Link to="/">ABL STOCK</Link>
                     <Link to="/moda">ABL MODA</Link>
                         <Link to="/produtos"><strong>Produtos</strong></Link>
                             <Link to="/contato">Contato</Link>
                                <Link to="/sobre">Sobre</Link>
                </div>
            </form>
    </nav>
  )
}

export default NavBar;