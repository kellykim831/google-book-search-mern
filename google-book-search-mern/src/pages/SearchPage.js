import React, { useState, useEffect } from 'react';
import API from '../utils/API';
// // import { Link } from 'react-router-dom';
// import Header from '../components/Header';
import Container from "../components/container";
import PageTitle from "../components/PageTitle";
import Card from "../components/Card";
import Title from "../components/Title";
import Author from "../components/Author";
import ImageTag from "../components/ImageTag";
import Description from "../components/Description";
import Search from '../components/Search';
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";


function SearchPage() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (!search) {
            return;
        }
    })
    return (
        <div>
            <Search />
            <Container>
                <PageTitle pageTitle={"Results"} />
                <Card> 
                    <Title title={"Harry Potter"}> </Title>
                    <Author author={"J.K. Rowling"}></Author>
                    <ImageTag src={"https://www.shethepeople.tv/wp-content/uploads/2020/05/Harry-Potter--e1588787564271.jpg"} name={"HarryPotter"}></ImageTag>
                
                </Card>
            </Container>
        </div>
    )
};




export default SearchPage;