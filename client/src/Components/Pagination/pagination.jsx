import React, { useState } from "react";
import PokeCards from "../PokeCards/pokeCards";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getPokemons } from '../../Store/Actions/actions'


const Pagination = () => {
    const dispatch = useDispatch() //disparamos la accion

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(12)

    //GET 
    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const pokemons = useSelector((state) => state.pokemons)
    const currentPosts = pokemons?.slice(indexOfFirstPost, indexOfLastPost)

    //CHANGE
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div pokemons={pokemons}>
            <Pagination
                postPerPage={postPerPage}
                totalPosts={totalPosts}
                paginate={paginate}
            />
        </div>
    )
}
export default Pagination;