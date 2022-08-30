function Tweet(props) {
   return (
   <div>
    <li> {props.name}</li>
    <li> {props.username}</li>
    <li> {props.date}</li>
    <li> {props.message}</li>
   </div>
   )
}