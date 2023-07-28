
export const GifItem = ({title, url, id}) => {

    return (
        <div className="card">
            <img height={150} width={150} src={url} alt={title}/>
            <p>{ title }</p>
        </div>
    )
}
