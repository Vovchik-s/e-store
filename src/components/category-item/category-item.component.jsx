import './category-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { title, imageUrl, repeat, size, position } = category
    return (
        <div className='category-container'>
            <div className="background-image" style={{
                background: `url(${imageUrl})`,
                backgroundSize: `${size}` ,
                backgroundPosition: `${position}` ,
                backgroundRepeat: `${repeat}`
            }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;
