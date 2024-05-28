import React from 'react'

const Statement = () => {
  return (
    <div className='Statement_page'>

      <div class="Statement_page_firstcontent">
        <div>
          <h4>Statement</h4>
        </div>
        <div>
          <input type="text" placeholder="Search..." />

        </div>
      </div>

      <div className='row d-flex'>


        <div className='users_dashboard dashboard_bg col-md-3'>
          <h4>Over total </h4>
          <h4><b>1,270</b></h4>
        </div>
        <div className='users_dashboard dashboard_bg col-md-3'>
          <h4>Music </h4>
          <h4><b>1,200</b></h4>
        </div>
        <div className='users_dashboard dashboard_bg col-md-3'>
          <h4>Content </h4>
          <h4><b>270</b></h4>
        </div>

        <div className='col-md-3'>

        </div>

      </div>



      <div className='Statemenet_table'>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Customer name</th>
              <th scope="col">Licence code</th>
              <th scope="col">Music name</th>
              <th scope="col">Valid date</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
              <td>Aug 12 2022</td>
              <td>12:00PM</td>
              <td>Murali Kumar </td>
              <td>232345 </td>
              <td>copyva Proma  </td>
              <td>Sep 23 2024  </td>
              <td>₹ 1,200  </td>
            </tr>
            <tr>
            
              <td>Aug 12 2022</td>
              <td>12:00PM</td>
              <td>Murali Kumar </td>
              <td>232345 </td>
              <td>copyva Proma  </td>
              <td>Sep 23 2024  </td>
              <td>₹ 1,200  </td>
            </tr>
            <tr>
             
              <td>Aug 12 2022</td>
              <td>12:00PM</td>
              <td>Murali Kumar </td>
              <td>232345 </td>
              <td>copyva Proma  </td>
              <td>Sep 23 2024  </td>
              <td>₹ 1,200  </td>
            </tr>
          </tbody>
        </table>


      </div>





    </div>
  )
}

export default Statement