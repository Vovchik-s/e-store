import Directory from '../../components/directory/directory.component';
import { Outlet } from 'react-router-dom';


const Home = () => {
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80",
            "repeat": "no-repeat",
            "size": "cover",
            "position": "center"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80",
            "repeat": "no-repeat",
            "size": "cover",
            "position": "center"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://images.unsplash.com/photo-1532561685579-890e8f61456a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
            "repeat": "no-repeat",
            "size": "cover",
            "position": "center"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://images.unsplash.com/photo-1571799610292-935ff425ba12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80",
            "repeat": "no-repeat",
            "size": "cover",
            "position": "center"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
            "repeat": "no-repeat",
            "size": "cover",
            "position": "top"
        }
    ]


    return (
        <div>
            <Directory categories={categories} />
            <Outlet />
        </div>
    );
};

export default Home;