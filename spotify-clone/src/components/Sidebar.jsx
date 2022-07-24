import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";

function Sidebar(){
    return(
        <Container>
          <div className="top__links">
           <div className="logo">
           <img
             src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
             alt="spotify"/> 
         </div>
        <ul>
          <li>
              <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
             <MdSearch /> 
            <span>Search</span>
          </li>
          <li>
             <IoLibrary /> 
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
    );
};

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      img {
        max-inline-size: 90%;
        block-size: auto;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 0.6rem;
        margin-left: 1rem;
        cursor: pointer;
        font-size:15px;
        font-weight: 500;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
          background-color:
        }
      }
    }
  }
`;

export default Sidebar;


