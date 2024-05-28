import React from 'react'

const UploardList = () => {
  return (
    <div className='Statement_page'>

      <div class="Statement_page_firstcontent">
        <div>
          <h4>Uploard List</h4>
        </div>
        <div>
          <input type="text" placeholder="Search..." />

        </div>
      </div>





      <div className='Statemenet_table'>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Song name</th>
              <th scope="col">Affilliate link</th>
              <th scope="col">Artist name</th>
              <th scope="col"> Copyright owners</th>

            </tr>
          </thead>
          <tbody>
            <tr>

              <td>Music</td>
              <td>Demo music</td>
              <td>https://copyva.com/searchmusic </td>
              <td>Demo name</td>
              <td>Demo name</td>

            </tr>
            <tr>


              <td>Music</td>
              <td>Demo music</td>
              <td>https://copyva.com/searchmusic </td>
              <td>Demo name</td>
              <td>Demo name</td>
            </tr>
            <tr>


              <td>Music</td>
              <td>Demo music</td>
              <td>https://copyva.com/searchmusic </td>
              <td>Demo name</td>
              <td>Demo name</td>
            </tr>
          </tbody>
        </table>


      </div>





    </div>
  )
}

export default UploardList