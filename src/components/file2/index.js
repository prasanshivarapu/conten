import './index.css'

const Products = props => {
  const {happy} = props

  return (
    <div>
      <div className=" col-12">
        <div className="pk">
          <h2 className="par">{happy.data.title}</h2>
<div className='pa'>
  <p className="para ">Score: {happy.data.score}</p>
</div>

          <p className='pt'>{happy.data.selftext_html}</p>

  

          
          <a className='btn btn-primary' href={happy.data.url} target="_blank" >
            Link
          </a>
          
        </div>
        {/* <hr className="line" /> */}
      </div>
    </div>
  )
}

export default Products