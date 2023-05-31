import React from 'react'



export default function Front(props) {
  return (
      <div>
          
          <>
        <div className="container">
          
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Orcus</h1>
    <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda perspiciatis exercitationem dignissimos voluptatem eaque, dolorem sint quis officiis autem in amet repellendus maiores quod totam tempora alias obcaecati ratione?</p>
  </div>
</div>
          <div className="row ">
            <div className="col-md-6 ">
              <h1 className="font-weight-bold">TURN HEADS ALL <span className="text-primary">SUMMER</span></h1>
            </div>

            <div className="col-md-6">
              <img src={props.jump} className="img-fluid pic" alt="Picture 1" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 banner">
              <img src={props.cart} className="img-fluid pic" alt="Testimonial" />
            </div>

            <div className="col-md-6">
              <h1 className="font-weight-bold">HOT PRICES HERE!</h1>
              <p>The Button below will sort out some activities for you for the day. Might not be much but it's better than watching paint on the wall dry</p>
            </div>
          </div>
        </div>    

</>
          
    </div>
  )
}


