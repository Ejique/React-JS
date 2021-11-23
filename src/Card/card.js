function Card(props){
    return(
<div className="Card">
    <img src={props.img_link} alt="" height="200"/>
    <a href={props.url}>{props.author}</a>
</div>
    )
}
export default Card