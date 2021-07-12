import React from 'react'
import { Text, View, FlatList, StyleSheet, Alert, SafeAreaView } from 'react-native'
import {ListItem, Header, Icon} from 'react-native-elements'
import axios from 'axios'

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listData:[],
            url:"http://c3a2ffad40d1.ngrok.io/",
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

    keyExtractor=(item,index)=>index.toString()

    renderItem=({item,index})=>(
        <ListItem
        key = {index}
        title = {`Planet:${item.name}`}
        subtitle={`Distance from Earth:${item.distance_from_earth}`}
        titleStyle={{fontSize:18,color:'orange'}}
        containerStyle={{backgroundColor:'blue'}}
        bottomDivider
        chevron
        onPress={()=>{
            this.props.navigation.navigate('home',{planetName:item.name})
        }}
        />
    )

    render(){
        if(this.state.listData.length == 0){
            return(
                <View>
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        } else {
            return(
            <View>
                <SafeAreaView/>
                <View>
                    <FlatList keyExtractor = {this.keyExtractor} data = {this.state.listData} renderItem = {this.renderItem} />
                </View>
            </View>
        )
        }
    }
}