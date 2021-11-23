import React from 'react';
import axios from 'axios';
import Card from '../Card';
import './gallery.sass'

//компонент галереи должен запрашивать информацию при рендере

class Gallery extends React.Component{
    constructor(props){
        super()
        this.state ={
            images: [],
            loaded: false
        }
    }

    async componentDidMount(){
        const images = await axios({
            method: "GET",
            url: "https://picsum.photos/v2/list"
        })
        this.setState({
            images: images.data,
            loaded:true
        })
    }
    render() {
        const CardList = this.state.images.map(img=>{
            return <Card 
            key={img.id}
            img_link = {img.download_url}
            author = {img.author}
            url = {img.url}
            />
        })

        if(!this.state.loaded){
            return <div>Идёт загрузка</div>
        }else{
    
    return(
        <div><h1>Gallery</h1>
        <div className="gallery_wrapper">
            {CardList}
            </div>
        </div>
    )
        }
    }
}
export default Gallery