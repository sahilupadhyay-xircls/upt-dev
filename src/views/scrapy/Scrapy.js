import React, { useState } from "react"
import abc from './static.png'

const Scrapy = () => {
  const [showSecondCard, setShowSecondCard] = useState(false)

  const handleScrape = (e) => {
    e.preventDefault()
    setShowSecondCard(true)
  }

  return (
    <div>
      <div className="row">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Scraping Input</h5>
            <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Website Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Example input"
                />
              </div>
              <div className="form-group mt-1">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleScrape}
                >
                  Scrape
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showSecondCard && (
        <div className="row">
          <div className="card">
            <div className="card-body" >
              <h5 className="card-title">Domain Graph</h5>
              <div class="d-flex justify-content-center">
                <img src={abc} alt="this is car image" class="img-fluid" />
              </div>

            </div>
          </div>

          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Links</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Internal Links</th>
                    <th>External Links</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="">/games/</a></td>
                    <td><a href="">/groups/discover/</a></td>
                  </tr>
                  <tr>
                    <td><a href="">https://www.meta.com/</a></td>
                    <td><a href="">https://www.meta.com/quest/</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      )}

      <div>

      </div>
    </div>
  )
}

export default Scrapy
