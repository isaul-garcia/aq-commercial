import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: sticky;
    height: 80px;
    width: 100%;
    padding: 0 100px;
    margin-top: 85px;
    top: 0;
    z-index: 202;
    transition: all .1s ease-in-out;
    background-color: #ffffffdd;
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);

    @media screen and (max-width: 1500px) {
        padding: 0 30px;
        margin-top: 30px;
    }
`

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;
`

export const NavWrapper = styled.div`
    float: right;

    @media screen and (max-width: 991px) {
        height: 100vh;
        width: 100vw;
        margin-top: -0.4vh;
        margin-right: -7.9vw;
    background-color: #ffffffee;
    }
`


export const Nav = styled.div`
    display: inline-block;
    padding: 5px 15px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
        color: #7c7c7c; 
    }

    @media screen and (max-width: 991px) {
        margin: 18px 12px;
        display: block;
    }
`

export const MenuButton = styled.div`
    float: right;
    padding: 6px 6px 2px 6px;
    border: 1px solid #cdcdcd;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    vertical-align: top;
    display: none;
    margin: 16px 0;

    @media screen and (max-width: 991px) {
        display: inline;
    }
`

export const NavText = styled(Link)` 
    font-weight: 400;
    font-size: 1em;
    line-height: 70px;
    text-decoration: none;
    color: #000000;
    transition: 0.1s;

    &:hover {
        color: #999999;
    }

    @media screen and (max-width: 991px) {
        font-size: 2em;
    }
`

export const IconWrapper = styled(Link)`
    height: 100%;   
    transition: all .1s ease-in-out;
    text-decoration: none;
    position: relative;
    margin-left: 10px;

    &:hover{
        opacity: 0.75;
    }
`

export const Icon = styled.img`
    height: 100%;
    width: 300px;
    position: relative;
    display: inline-block;

    @media screen and (max-width: 1500px) {
        width: 230px;
    }
`

export const BackWrapper = styled(Link)`
    padding: 5px 6px;
    margin-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    box-shadow: 0px 0px 5px #bcbcbc00;
    outline: 1px solid #f0f0f000;
    outline-offset: -1px;
    pointer-events: auto;    
    background-color: #222;
    position: relative;
    display: inline-block;
    vertical-align: top;

    &:hover {
        background-color: #ff6000;
    }
`

export const BackIconWrapper = styled(Link)`
    height: 100%;
    width: 100%;
    white-space: nowrap;
    text-align: left;
    float: left;
    transition: all .1s ease-in-out;

    &:hover{
        opacity: 0.75;
    }
`

export const BackIcon = styled.img`
    vertical-align: top;
    pointer-events: all;
    margin-top: 0px;
    max-height: 19px;
    max-width: 100px;
    
    @media screen and (max-width: 991px) {
        margin-top: 0px;
        max-height: 23px;
        max-width: 100%;
    }
`