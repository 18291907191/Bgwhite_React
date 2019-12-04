const frientsList = [
  {imgUrl: 'http://static.bgwhite.cn/react-website/gwc_hd.jpeg',name:"狗尾草的前端博客"},
]

const Footer = () => {
  return (
    <footer>
      <div className="hd">
        <span>友情链接:</span>
        <a title="加入我们" href="/">Join Us</a>
      </div>
      <ul>
        {
          frientsList.map((item,index) => (
           <a key={+new Date() + index} href="/">
              <img src={item.imgUrl} />
              <span>{item.name}</span>
           </a> 
          ))
        }
      </ul>
    <style jsx>{`
      footer {
        width: 100%;
        border-top: 1px solid #f0f0f0;
        box-sizing: border-box;
        padding: 20px 20px;
        height: 120px;
        display: flex;
        align-items: center;
      }
      .hd {
        width: 80px;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 0;
        font-size: 14px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-right: 1px solid #f0f0f0;
      }
      .hd a {
        color: #3576e0;
      }
      ul {
        width: 60%;
        flex: 1;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        box-sizing: border-box;
        padding: 20px;
      }
      ul a {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        margin: 10px;
        box-sizing: borderb-box;
        padding: 20px 20px;
        transition: .5s;
      }
      ul a:hover {
        color: #ffffff;
        background-color: #f0f0f0;
        transform: translateY(-5px);
        box-shadow: 0px 3px 0px 0px #3576e0;
      }
      ul a img {
        width: 45px;
        height: 45px;
        border-radius: 100%;
        margin-bottom: 10px;
        transition: .5s;
      }
      ul a span {
        font-size: 12px;
        color: #333333;
      }
    `}</style>
    </footer>
  )
}

export default Footer;