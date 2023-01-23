import CategoryItem from '../category-item/category-item.component';

import './directory.styles.scss';

// categories is an array of objects with 3 parameters: id, title, imageUrl
const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Directory;
