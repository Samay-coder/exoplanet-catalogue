import React from 'react'
import { Text, View, FlatList, StyleSheet, Alert, SafeAreaView } from 'react-native'
import {ListItem, Header, Icon} from 'react-native-elements'
import axios from 'axios'

export default class Details extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listData:[],
            url:`http://127.0.0.1:5000/planet?name=${this.props.navigation.getParam('planetName')}`
        }
    }

    getPlanets=()=>{
        axios.get(this.state.url)
        .then(r=>{
            return this.setState({
                listData:r.data.data
            })
        })
        .catch(e=>{
            alert(e.message)
        })
    }

    componentDidMount(){
        this.getPlanets()
    }

    render(){
        return(
            <View>
                <Text>
                    {`distance from Earth:${this.state.listData.distance_from_earth}`}
                </Text>
            </View>
        )
    }
}