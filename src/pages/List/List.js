import React, { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ScrollButton from 'components/BtnScrollTop';
import { ProductContainer, ProductMain } from './styles';
import axios from 'axios';
import Calendar from 'components/Calendar';
import { useDispatch } from 'react-redux';
import { calendarState } from "store/Calendar/Calendar.actions.js"
import Load from 'components/Load';

function List() {
    const [isLoad, setIsLoad] = useState(false)
    const timeStamp = '1565045589';
    const apiKey = 'ee68de675c8974e59523743047126f44';
    const md5 = '0a0a3a5577e32a445041edb4872d747e';

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            setIsLoad(true)
            getHeros()
        }
    }, [])

    function getHeros() {
        axios
            .get(
                `http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=5`,
            )
            .then((response) => {                
                console.log(response.data.data.results);
                setIsLoad(false)
                dispatch(calendarState({
                    "Calendar" : response.data.data.results
                }));
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
                setIsLoad(false)
            });
    }    

    return (
        <>
            <Header />

            <ProductMain>
                <ProductContainer>
                    <Calendar />
                </ProductContainer>
            </ProductMain>
            <Footer />            
            <ScrollButton />
            {
                isLoad &&
                <Load />
            }
        </>
    );
}

export default List;