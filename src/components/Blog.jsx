import blogData from "../mockData/blogData";


export const BlogTop = ({ blogTopData }) => {
  const { header } = blogTopData;
  return (
    <>
        <h1 className="blog_of_news_text">{header}</h1>
    </>
  );
};

export const Blog1Container = ({ blog1containersData }) => {
  const { src, alt } = blog1containersData;
  return (
    <>
      <img src={src} alt={alt} />
    </>
  );
};


export const News1Text = ({ blog_of_news_5containers_1newstextongroundData }) => {
  const { header, content, bottom } = blog_of_news_5containers_1newstextongroundData;
  return (
    <>
      <h7 className="blog_of_news_5containers_1newstextonground_top">
            {header}
        </h7>
        <h3 className="blog_of_news_5containers_1newstextonground_middle">
            {content}
        </h3>
        <h7 className="blog_of_news_5containers_1newstextonground_bottom">
            {bottom}
        </h7>
    </>
  );
};


export const News2Text = ({ blog2containersData }) => {
  const { src, alt } = blog2containersData;
  return (
    <>
      <img src={src} alt={alt}/>
    </>
  );
};


export const News3Text = ({ blog3containersData }) => {
  const { src, alt  } = blog3containersData;
  return (
    <>
      <img className="blog_of_news_5containers_img3" src={src} alt={alt}/>
    </>
  );
};


export const News4Text = ({ blog4containersData }) => {
  const { src, alt } = blog4containersData;
  return (
    <>
      <img className="blog_of_news_5containers_img4" src={src} alt={alt}/>
    </>
  );
};


export const News5Text = ({ blog5containersData }) => {
  const { src, alt } = blog5containersData;
  return (
    <>
      <img className="blog_of_news_5containers_img5" src={src} alt={alt}/>
    </>
  );
};


export const SmallNews = ({ blog_small_news }) => {
  const { src, alt } = blog_small_news;
  return (
    <>
      <img src={src} alt={alt}/>
    </>
  );
};


const Blog = () => {
    const {blogTopData, blog1containersData,blog_of_news_5containers_1newstextongroundData,blog2containersData,blog3containersData,blog4containersData,blog5containersData,blog_small_news} = blogData;

    return(
        <>
            <div className="blog_of_news">
                <BlogTop blogTopData={blogTopData} />
                <div className="blog_of_news_5containers">
                    <div class="blog_of_news_5containers_1newscontainer">
                        <Blog1Container blog1containersData={blog1containersData} />
                        <div className="blog_of_news_5containers_1newstextonground bigground">
                            <News1Text blog_of_news_5containers_1newstextongroundData={blog_of_news_5containers_1newstextongroundData}/>
                        </div>
                    </div>
                    <div className="blog_of_news_5containers_group">
                        <div class="blog_of_news_5containers_2newscontainer">
                            <News2Text blog2containersData={blog2containersData}/>
                            <SmallNews blog_small_news = {blog_small_news}/>
                        </div>
                        <div class="blog_of_news_5containers_3newscontainer">
                            <News3Text blog3containersData={blog3containersData}/>
                            <SmallNews blog_small_news = {blog_small_news}/>
                        </div>
                        <div class="blog_of_news_5containers_4newscontainer">
                            <News4Text blog4containersData={blog4containersData}/>
                            <SmallNews blog_small_news = {blog_small_news}/>
                        </div>
                        
                        <div class="blog_of_news_5containers_5newscontainer">
                            <News5Text blog5containersData={blog5containersData}/>
                            <SmallNews blog_small_news = {blog_small_news}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
