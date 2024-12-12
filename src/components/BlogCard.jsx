import PrimaryButton from "./PrimaryButton";

const BlogCard = () => {
    return (
        <div>
            <div>
                <img src="https://via.placeholder.com/600" alt="600 x 600" />
            </div>
            <div>
                <h5>Titolo del Post</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque rem exercitationem nisi dolorum ratione veritatis, aspernatur quis! Eum architecto voluptate rerum suscipit corrupti reprehenderit saepe repellat fuga ut tempora?</p>
                <PrimaryButton />
            </div>
        </div>
    )
}

export default BlogCard;