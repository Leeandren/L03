import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
    render() {
        return (
            <ScrollView>
                <Movie title={'Doctor Sleep'} year={2019} icon_name={"skull"} icon_color={"grey"}
                       poster={require("./img/doctor-sleep.jpg")} />
                <Movie title={'Midway'} year={2020} icon_name={"person-rifle"} icon_color={"red"}
                       poster={require("./img/midway.jpg")} />
                <Movie title={'Avengers Endgame'} year={2019} icon_name={"a"} icon_color={"blue"}
                       poster={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyqqfMsSk7Z_4EubjffyT55IOadx19dJZXdOvbT2_jA&s=10'}} />
            </ScrollView>
        );
    };
};

export default AllMovies;